import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { Buyer, response } from "src/@types";
import AgentNavbar from "src/componets/Agent/AgentNavbar";
import DashBoardLayout from "src/Layout/DasboardsLayout";
import { FetchState, useFetch } from "src/lib/hooks/useFetch";
import { useAxios } from "src/utills/axios";



const myPropertyCare = () => {
  const instance = useAxios();
  const [propertyCare, setPropertyCare] = useState([])

  if (propertyCare) {
    console.log(propertyCare, "djshfjkdshf")
  }

  useEffect(() => {
    const myGetPropertyCare = async () => {
      try {

        const res = await instance.get("/user/myCareServiceProperty");

        if (res.data) {
          console.log(res.data.data, "reeeeee");
          setPropertyCare(res.data.data)

        }
      } catch (error) {
        console.error("An error occurred:", error);

      }
    }
    myGetPropertyCare()
  }, [])


  if (!propertyCare || propertyCare.length === 0) {
    return <p >No property for care</p>;
  }

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 mt-5 w-full h-full">
      {propertyCare.map((currentProperty, propertyIndex) => (
        <div key={propertyIndex} className="my-3">
          <div className="flex flex-col sm:flex-row justify-between">
            <p className="text-2xl font-bold mb-2">Name: {currentProperty.name}</p>
          </div>
          <p className="text-lg font-bold mb-2">Images:</p>
          <div className="p-2 w-full flex space-x-2 items-start justify-start overflow-x-scroll scrollbar-hide">
            {currentProperty.propertyImages.map((curElem, index) => (
              <div key={index} className="w-[500px] flex-shrink-0">
                <img
                  style={{ width: "100%", objectFit: "cover", height: "100%", borderRadius: "15px" }}
                  src={curElem}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

myPropertyCare.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashBoardLayout Navbar={AgentNavbar}>
      {page}
      {/* <BuyersPageLayout>{page}</BuyersPageLayout> */}
    </DashBoardLayout>
  );
};

export default myPropertyCare;
