import { AiOutlineStock } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { FaProductHunt } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaServicestack, FaUsers } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandAirbnb } from "react-icons/tb";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaDelicious } from "react-icons/fa";
import { SiPrivatedivision } from "react-icons/si";
import { LiaBlogSolid } from "react-icons/lia";
import { CiCompass1 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaFirstOrderAlt } from "react-icons/fa";
import { RiCreativeCommonsByLine } from "react-icons/ri";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { GiVerticalBanner } from "react-icons/gi";
import { FaFeather } from "react-icons/fa";

export const SidebarItemsData = [
  {
    id: 1,
    name: "Services",
    path: "/dashboard/admin/services",
    Icon: <FaServicestack size={24} />,
  },
  {
    id: 2,
    name: "Home ",
    path: "/dashboard/admin/home",
    Icon: <FaProductHunt size={24} />,
    sub: [
      {
        id: 1,
        name: "Hero Description",
        path: "/dashboard/admin/home/hero-description",
        Icon: <CiBasketball />,
      },
      {
        id: 5,
        name: "Technology",
        path: "/dashboard/admin/home/technology",
        Icon: <MdManageHistory />,
      },
      {
        id: 5,
        name: "Our Services",
        path: "/dashboard/admin/home/our-services",
        Icon: <MdManageHistory />,
      },
      {
        id: 6,
        name: "Variant",
        path: "/dashboard/admin/products/variant",
        Icon: <MdManageHistory />,
      },
      {
        id: 6,
        name: "Assigned Variant",
        path: "/dashboard/admin/products/assigned-variants",
        Icon: <MdManageHistory />,
      },
      {
        id: 7,
        name: "Brands",
        path: "/dashboard/admin/products/brands",
        Icon: <TbBrandAirbnb />,
      },
    ],
  },
  {
    id: 3,
    name: "Category",
    path: "/category",
    Icon: <MdOutlineCategory size={24} />,
    sub: [
      {
        id: 1,
        name: " Primary Category",
        path: "/dashboard/admin/category/primary-category",
        Icon: <CiBasketball />,
      },
      {
        id: 2,
        name: "Secondary category",
        path: "/dashboard/admin/category/secondary-category",
        Icon: <MdManageHistory />,
      },
      {
        id: 3,
        name: "tertiary category",
        path: "/dashboard/admin/category/tertiary-category",
        Icon: <MdManageHistory />,
      },
      {
        id: 4,
        name: "Assigned categories",
        path: "/dashboard/admin/category/assigned-categories",
        Icon: <MdManageHistory />,
      },
    ],
  },
];
