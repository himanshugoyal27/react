import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";
import imgs from "public.json";
import { GrStar } from "react-icons/gr";
import { Propery } from "src/@types";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import PropertyCost, { formatCost } from "../costFormat/PropertyCost";
import generateSlug from "../slug/generateSlug";

const ProjectsCard = ({
    propertyImages,
    name,
    BHKconfig,
    _id,
    address,
    agentId,
    cost,
    primaryImage,
    areaValue,
    size,
    location,
    availableFor,
    toggle,
    propertyType,
    slug,
    areaType


}: Propery) => {
    const imageSource = primaryImage || (propertyImages && propertyImages[0]) || "/bighouse.png";

    // const slug = generateSlug(toggle, name:undefined, BHKconfig, propertyType, availableFor, location.name, _id);

    // if(slug){
    //   console.log(slug,"slug")
    // }

    return (
        // <Link href={`/details/${_id}`}>
        <Link href={`/details/${slug}`}>
            <div>
                <div className="relative rounded-lg h-64 w-[400px] overflow-hidden m-4">
                    <img
                        src={imageSource}
                        alt="Card Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-24">
                    <div className="absolute bottom-[30px] left-[40px] rounded-lg w-[350px] p-6 h-40  bg-white bg-opacity-100 text-black box-border  shadow-lg">
                        <h2 className="text-2xl font-bold">
                            {name.length > 20 ? `${name.slice(0, 20)}...` : name}
                        </h2>
                        <div className="flex gap-4 mt-2">
                            <div className="flex gap-2">
                                <HiLocationMarker style={{ color: "gray" }} />
                                <span style={{ color: "gray" }}>
                                    {location?.name || ""}    </span>
                            </div>
                            <div className="flex flex-col">
                                <span style={{ color: "gray" }} >
                                    ₹{areaValue}/{areaType}
                                </span>
                                <span style={{ color: "gray" }} >
                                    {size} {areaType}
                                </span>
                            </div>
                        </div>
                        <div className="list_header_semiBold f16  text-[1.4rem] ">₹ {formatCost(cost)} </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectsCard;



