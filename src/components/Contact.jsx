import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="h-fit w-full bg-white bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('./contact.jpg')` }}
      aria-labelledby="join-heading"
    >
      <div className="w-4/6 mx-auto py-12 flex flex-col gap-8 ">
        <div>
          <h2
            id="join-heading"
            className="text-xl lg:text-2xl text-white font-bold"
          >
            Contact Us
          </h2>
          <hr className="w-12 h-0.5 bg-white " />
        </div>
        <div className=" flex flex-col lg:flex-row items-start lg:items-center justify-between  gap-4 ">
          <p className="">
            +2349043970401 <br /> qsubmailx@yahoo.com
          </p>
          <p>
            Otefe-Oghara, Delta State, <br />
            Nigeria
          </p>
          <div className="flex gap-4 items-center h-8 justify-end">
            <a href=" " className=" bg-white rounded-full p-2 text-gray-800">
              <FaFacebookF />
            </a>
            <a href=" " className=" bg-white rounded-full p-2 text-gray-800">
              <FaXTwitter />
            </a>
            <a href=" " className=" bg-white rounded-full p-2 text-gray-800">
              <FaLinkedinIn />
            </a>
            <a href=" " className=" bg-white rounded-full p-2 text-gray-800">
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
