import { NavLink } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="w-full h-52 bg-white">
      <div className=" w-4/6 mx-auto flex flex-col py-12 items-center">
        <p className=" text-gray-800">
          We are working on the Blog. Stay connected!.
        </p>
        <NavLink to="/" className="mt-4 text-secondary underline">
          Return to Home Page
        </NavLink>
      </div>
    </div>
  );
};
