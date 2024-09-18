import { Inter } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ethen Soft",
    template: `%s | Ethen Soft`,
  },
  keywords: [
    "Ethen Soft",
    "Web development services",
    "Next.js solutions",
    "Custom web solutions",
    "Mobile app development",
    "WordPress themes",
  ],
  description:
    "Ethen Soft provides custom web and mobile app solutions for businesses.",
  openGraph: {
    type: "website",
    url: "https://www.ethensoft.com",
    title: "Ethen Soft - Web and Mobile Solutions",
    description: "Custom Web and mobile app solutions tailored for businesses.",
    images: [
      {
        url: "https://www.ethensoft.com/images/1",
        width: 800,
        height: 600,
        alt: "Ethen Soft Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethen Soft - Web and Mobile Solutions",
    description: "Custom web and mobile app solutions tailored for businesses.",
    image: "https://www.ethensoft.com/images/twitter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fff]`}>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
