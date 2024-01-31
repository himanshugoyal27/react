// side navitem a usabale componet
// have two state active on active apply right border and color to text and icon
// have spaced out

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiCog, BiSupport } from "react-icons/bi";
import { MdContacts, MdMap, MdPictureInPicture, MdRoomService, MdSubscriptions } from "react-icons/md";
import { AdminNavbarIcons } from "./adminIcons";
import { GiBuyCard } from "react-icons/gi";
import { SiGoogleads } from "react-icons/si";

// sideNavItem
interface SideNavItemProps {
  name: string;
  Icon: React.ElementType;
  isActive?: boolean;
}

const SideNavItem = ({ name, Icon, isActive }: SideNavItemProps) => {
  return (
    <div
      className={
        "flex w-full space-x-4 py-2  items-center font-manrope   cursor-pointer pl-7 " +
        (isActive ? " border-primaryBlue border-r-2 " : " ")
      }
    >
      <Icon color={isActive ? "#0066FF" : "#AAA"} className={" text-3xl"} />
      <p
        className={
          " text-lg pt-1 " +
          (isActive ? "text-primaryBlue font-bold " : "text-[#AAAAAA]")
        }
      >
        {name}
      </p>
    </div>
  );
};

const AdminsideNav = () => {
  const router = useRouter();

  const handleURLQueries = (item: string) => {
    if (item) {
      return router.asPath.includes(item);
    }
  };

  const isNavLinkActive = (item: string) => {
    if (router.pathname === item || handleURLQueries(item)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
    {/* <ScrollWrapper> */}
      
      {/* <h1 style={{border:"2px solid red"}} className="text-xl text-black font-bold pl-9 pb-9">Wonderplots</h1> */}
      <div style={{ width: "150px", height: "50px", position: "relative", left: "20px" }}  className="md:pl-6 pl-4  mb-6">
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: 1 }}
          src="/logoW1.png"
          alt="Logo"
          width={150}
          height={45}
        />
      </div>
    <div className="w-full h-full overflow-auto font-manrope">
      <Link href={"/admin"}>
        <SideNavItem
          name="Dashboard"
          Icon={AdminNavbarIcons.home}
          isActive={router.pathname == "/admin"}
        />
      </Link>
      <Link href={"/admin/customers"}>
        <SideNavItem
          name="Customer"
          Icon={AdminNavbarIcons.customer}
          isActive={isNavLinkActive("/admin/customers")}
        />
      </Link>
      <Link href={"/admin/orders"}>
        <SideNavItem
          name="Orders"
          Icon={GiBuyCard}
          isActive={isNavLinkActive("/admin/orders")}
        />
      </Link>
      <Link href={"/admin/plans"}>
        <SideNavItem
          name="Plans"
          Icon={MdSubscriptions}
          isActive={isNavLinkActive("/admin/plans")}
        />
      </Link>
      <Link href={"/admin/locations"}>
        <SideNavItem
          name="Locations"
          Icon={MdMap}
          isActive={isNavLinkActive("/admin/locations")}
        />
      </Link>
      <Link href={"/admin/property"}>
        <SideNavItem
          name="Properties"
          Icon={AdminNavbarIcons.compnies}
          isActive={isNavLinkActive("/admin/property")}
        />
      </Link>
      <Link href={"/admin/care-service"}>
        <SideNavItem
          name="Care Service"
          Icon={MdRoomService}
          isActive={isNavLinkActive("/admin/care-service")}
        />
      </Link>
      <Link href={"/admin/leads"}>
        <SideNavItem
          name="Leads"
          Icon={SiGoogleads}
          isActive={isNavLinkActive("/admin/leads")}
        />
      </Link>
      <Link href={"/admin/blogs"}>
        <SideNavItem
          name="Blogs"
          Icon={MdPictureInPicture}
          isActive={isNavLinkActive("/admin/blogs")}
        />
      </Link>
      <Link href={"/admin/contacts"}>
        <SideNavItem
          name="Contacts"
          Icon={MdContacts}
          isActive={isNavLinkActive("/admin/contacts")}
        />
      </Link>
      <Link href={"/admin/tickets"}>
        <SideNavItem
          name="Tickets"
          Icon={BiSupport}
          isActive={isNavLinkActive("/admin/tickets")}
        />
      </Link>
      <Link href={"/admin/account-settings"}>
        <SideNavItem
          name="Settings"
          Icon={BiCog}
          isActive={isNavLinkActive("/admin/account-settings")}
        />
      </Link>
      {/* </ScrollWrapper> */}
    </div>
    </>

  );
};

export default AdminsideNav;