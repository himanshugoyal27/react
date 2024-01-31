import { useRouter } from "next/router";
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Input } from "src/componets/shared/sharedInput";
import { Footer, Navbar } from "src/componets";
import { useAxios } from "src/utills/axios";
const ContactForm = ({ navFooter }) => {
  const router = useRouter();
  const instance = useAxios();
  const [cookies] = useCookies(["jwtToken"]);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  //   service: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState("");
  const [service, setService] = useState("Interior Designing");
  const [mobileNumber, setMobileNumber] = useState("");

  // const handleSubmit = async (e) => {
  //   const formData = {
  //     name: name,
  //     email: email,
  //     message: message,
  //     mobile: mobile,
  //     service: service
  //   }
  //   try {
  //     const response = await instance.post(
  //       "/user/contactDetails",
  //       formData,
  //     );
  //     // setIsLoading(false)
  //     if (response.data) {
  //       router.push("/")
  //       toast("Message sent succesfully")
  //     }
  //   } catch (error) {
  //     console.error("Error while adding property:", error);
  //   }
  //   console.log(formData);
  //   //   setFormData
  // };

  const handleEmailChange = (value) => {
    setEmail(value);

    // Perform additional email validation if needed
    // For simplicity, I'm using the validation logic from the Input component
    const isValidEmail = validateEmail(value);
    if (!isValidEmail) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    // ... (other form submission logic)

    // Perform other form submission actions
    if (validateEmail(email)) {
      // Email is valid, proceed with submission
      console.log('Email submitted:', email);
      // Additional actions can be added here before or after the axios post
      try {
        const response = await instance.post('/user/contactDetails', {
          name,
          email,
          message,
          mobileNumber,
          service,
        });

        if (response.data) {
          router.push('/');
          toast('Message sent successfully');
        }
      } catch (error) {
        console.error('Error while adding property:', error);
        toast.error('Error sending message. Please try again.');
      } finally {
        // setIsLoading(false);
        console.log("finally")
      }
    } else {
      // Email is not valid, handle accordingly
      console.log('Invalid email. Please correct it.');
      toast.error("Invalid email. Please correct it.")
    }
  };


  const servicesNames = ["Interior Designing", "Property Care", "Earn With Us", "Others"]


  const handleService = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedService = event.target.value;
    setService(selectedService);
  };

  return <>
    {navFooter === true ? null : <Navbar />}
    <div className="flex items-center flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <p className="text-3xl">Contact Our Team</p>
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2 mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <Input
            placeholder="Enter Name"
            value={name}
            setValue={setName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <Input
            placeholder="Enter Email"
            value={email}
            type="email"
            // setValue={setEmail}
            setValue={handleEmailChange}
            showError={!!emailError}
            err={emailError}
          />

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <Input
            placeholder="Enter Message"
            value={message}
            setValue={setMessage}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mobile No.
          </label>
          <Input
            placeholder="Enter Your Mobile No."
            value={mobileNumber}
            type="number"
            setValue={setMobileNumber}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Service
          </label>
          <select
            className="py-3 group bg-white focus:ring-primaryBlue border w-full"
            value={service}
            onChange={handleService}
          >
            {servicesNames.map((serviceName, index) => (
              <option key={index} value={serviceName}>
                {serviceName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          // disabled={isLoading}
          className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-primaryBlueDark transition duration-300"
        >
          Send Message
        </button>
        {/* {isLoading ? 'Sending Message...' : 'Send Message'} */}
      </div>
    </div>

    {navFooter === true ? null : <Footer />}
  </>
};

export default ContactForm;