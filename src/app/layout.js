"use client"
import '../../styles/css/common-2.css'
import '../../styles/css/style-2.css'
import '../../styles/css/responsive.css'
import '../../styles/css/style.css'
import 'swiper/css'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const routeClassMap = {
  "/home": "overflow-hidden",
  "/about-us": "buzz-common",
  "/our-services": "buzz-common",
  "/blog-details": "buzz-common",
  "/contact-us": "buzz-common",
};

const bodyClass = routeClassMap[pathname] || "";

  
  return (
    <html lang="en">
      <body className={bodyClass}>
         
        {children}
        
      </body>
    </html>
  );
}
