import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Mobile Footer */}
      <div className="mobile-footer flex flex-col justify-center items-center my-8 mr-4 space-y-12 md:hidden">
        <div className="flex flex-row space-x-8 text-[#FF5E00]">
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>

        <ul className="space-y-4 font-normal text-sm ml-4">
          <li>support@hoo-mensfashion.com</li>
          <li>+234 805 273 6016</li>
          <li>08:00 - 22:00 - Everyday</li>
        </ul>

        <ul className="flex flex-row space-x-10 font-normal text-sm">
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

        <p className="font-normal text-xs">
          Copyright© HOO Men! All Rights Reserved.
        </p>
      </div>

      {/* Desktop and Tablet Footer */}
      <div className="desktop-footer h-[300px] flex-col bg-black text-white my-8 space-y-12 hidden md:flex lg:flex">
        <div className="flex flex-col lg:flex-row justify-between mx-8 lg:mx-36 items-center">
          <div className="space-y-16 mt-6">
            <ul className="flex flex-row space-x-10 font-normal text-xl lg:text-2xl">
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>

            <div className="flex flex-row space-x-10 ml-10 text-[#FF5E00]">
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <ul className="space-y-4 mt-6 font-normal text-lg lg:text-xl">
            <li>support@hoo-mensfashion.com</li>
            <li>+234 805 273 6016</li>
            <li>08:00 - 22:00 - Everyday</li>
          </ul>
        </div>

        <p className="mx-auto font-normal text-lg lg:text-xl">
          Copyright© HOO Men! All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
