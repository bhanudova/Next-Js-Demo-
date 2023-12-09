import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (<>
  
    <div>
      <div className="flex justify-between p-10 bg-[#1D232A]">
        <div className="flex gap-10">
          <div>
            <Image src={'/tsss_logo.png'} width={500} height={500} alt="tsss_logo" className="w-[13rem]"/>
          </div>
          <div className="text-gray-300">
            <h2 className="text-2xl font-semibold">Address</h2>
            <p className="text-sm font-semibold">
              TSSS Infotech & Infra Private Limited<br />
              82, Amrita towers, Camelot Pl,<br />
              Masjid Banda, Camelot Layout,<br />
              Kondapur,Telangana - 500084.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex gap-8 text-white">
            <FaPhoneAlt className="text-3xl" />
            <FaFacebook className="text-3xl" />
            <FaTelegram className="text-3xl" />
            <FaLinkedin className="text-3xl" />
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-[#15191E] text-gray-300">
        <aside>
          <p>Copyright © 2024 - All right reserved by TSSS Infotech & Infra Private Ltd</p>
        </aside>
      </footer>
    </div>
  </>)
}