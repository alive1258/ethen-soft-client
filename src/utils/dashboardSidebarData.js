import { AiOutlineStock } from "react-icons/ai";
import { MdManageHistory, MdCategory, MdCreateNewFolder } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import {
  FaDollarSign,
  FaFileInvoiceDollar,
  FaListAlt,
  FaProductHunt,
  FaUser,
} from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaSackDollar, FaServicestack, FaUsers } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandAirbnb } from "react-icons/tb";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaDelicious } from "react-icons/fa";
import { SiPrivatedivision } from "react-icons/si";
import { LiaBlogSolid } from "react-icons/lia";
import { CiCompass1 } from "react-icons/ci";
import { FaFirstOrderAlt, FaQuestion } from "react-icons/fa";
import {
  RiCreativeCommonsByLine,
  RiAdminFill,
  RiMessage2Fill,
} from "react-icons/ri";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { GiVerticalBanner } from "react-icons/gi";
import { FaFeather, FaImages } from "react-icons/fa";
import { getUserinfo } from "@/services/auth.services";

const user = getUserinfo();

export const SidebarItemsData = [
  {
    id: 1,
    name: "Products",
    path: "/dashboard/admin/our-products",
    Icon: <FaServicestack size={24} />,
  },
  {
    id: 2,
    name: "Banners",
    path: "/dashboard/admin/banner",
    Icon: <BsFillFileEarmarkRuledFill size={24} />,
  },
  {
    id: 3,
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
      {
        id: 13,
        name: "Service Category",
        path: "/dashboard/admin/home/service-category",
        Icon: <MdCategory />,
      },
      {
        id: 14,
        name: "Service Images",
        path: "/dashboard/admin/home/service-image",
        Icon: <FaImages />,
      },
      {
        id: 15,
        name: "Service FAQs",
        path: "/dashboard/admin/home/service-faq",
        Icon: <FaQuestion />,
      },
      {
        id: 16,
        name: "Pricing",
        path: "/dashboard/admin/home/pricing",
        Icon: <FaDollarSign />,
      },
      {
        id: 17,
        name: "Pricing Categories",
        path: "/dashboard/admin/home/pricing-category",
        Icon: <FaFileInvoiceDollar />,
      },
      {
        id: 18,
        name: "Pricing Features",
        path: "/dashboard/admin/home/pricing-feature",
        Icon: <FaListAlt />,
      },
      {
        id: 19,
        name: "Assigned Feature",
        path: "/dashboard/admin/home/feature-assigned-pricing",
        Icon: <MdCreateNewFolder />,
      },
      {
        id: 20,
        name: "Client's Message",
        path: "/dashboard/admin/home/contact-us",
        Icon: <RiMessage2Fill />,
      },
    ],
  },
  {
    id: 3,

    id: 4,
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
    id: 5,

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
    id: 6,
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
    id: 7,
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
      {
        id: 3,
        name: "Refund Policy",
        path: "/dashboard/admin/setting/refund-policies",
        Icon: <FaSackDollar />,
      },
    ],
  },
  {
    id: 8,
    name: "Team",
    path: "/dashboard/admin/team",
    Icon: <FaServicestack size={24} />,
  },
];

const users = {
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
    },
  ],
};

const settings = {
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
    {
      id: 3,
      name: "Refund Policy",
      path: "/dashboard/admin/setting/refund-policies",
      Icon: <FaSackDollar />,
    },
  ],
};

if (user?.role === "super-admin") {
  SidebarItemsData.push(user);
  SidebarItemsData.push(settings);
}
