import { AiOutlineStock } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { FaProductHunt, FaUser } from "react-icons/fa";
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
import { RiCreativeCommonsByLine, RiAdminFill, RiUser2Fill, RiUser4Fill, RiUserFill } from "react-icons/ri";
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
    id: 4,
    name: "Banners",
    path: "/dashboard/admin/banner",
    Icon: <BsFillFileEarmarkRuledFill size={24} />,
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
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 6,
        name: "Home About",
        path: "/dashboard/admin/home/home-about",
        Icon: <CgShutterstock />,
      },
      {
        id: 7,
        name: "Trust Us",
        path: "/dashboard/admin/home/trust-us",
        Icon: <AiOutlineStock />,
      },
      {
        id: 8,
        name: "Our Works",
        path: "/dashboard/admin/home/our-works",
        Icon: <FaFeather />,
      },
      {
        id: 9,
        name: "Our Clients",
        path: "/dashboard/admin/home/our-clients",
        Icon: <GiVerticalBanner />,
      },
      {
        id: 10,
        name: "Testimonials",
        path: "/dashboard/admin/home/testimonials",
        Icon: <FaQuoteLeft />,
      },
      {
        id: 11,
        name: "Blogs",
        path: "/dashboard/admin/home/blogs",
        Icon: <FaFirstOrderAlt />,
      },
      {
        id: 12,
        name: "Faqs",
        path: "/dashboard/admin/home/faqs",
        Icon: <FaQuoteLeft />,
      },
    ],
  },
  {
    id: 3,
    name: "User",
    path: "/user",
    Icon: <FaUser size={24} />,
    sub: [
      {
        id: 1,
        name: "Admins",
        path: "/dashboard/admin/user/admins",
        Icon: <RiAdminFill />,
      },
      {
        id: 2,
        name: "Customers",
        path: "/dashboard/admin/user/customers",
        Icon: <FaUsers />,
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
  {
    id: 5,
    name: "About",
    path: "/about",
    Icon: <MdOutlineCategory size={24} />,
    sub: [
      {
        id: 1,
        name: "About Hero",
        path: "/dashboard/admin/about/about-heros",
        Icon: <CiBasketball />,
      },
      {
        id: 2,
        name: "Company Gallery",
        path: "/dashboard/admin/about/company-galleries",
        Icon: <MdOutlinePermMedia />,
      },

      {
        id: 3,
        name: "Our Deals",
        path: "/dashboard/admin/about/our-deals",
        Icon: <FaDelicious />,
      },
      {
        id: 3,
        name: "Professional Service",
        path: "/dashboard/admin/about/professional-services",
        Icon: <SiPrivatedivision />,
      },
    ],
  },
  {
    id: 6,
    name: "Setting",
    path: "/setting",
    Icon: <LiaBlogSolid size={24} />,
    sub: [
      {
        id: 1,
        name: "Privacy Policies",
        path: "/dashboard/admin/setting/privacy-policies",
        Icon: <CiCompass1 />,
      },
      {
        id: 2,
        name: "Terms Condition",
        path: "/dashboard/admin/setting/terms-conditions",
        Icon: <RiCreativeCommonsByLine />,
      },
    ],
  },
];
