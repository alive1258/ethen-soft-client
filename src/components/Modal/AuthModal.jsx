"use client";

import { useState } from "react";
import Login from "../UI/Login/Login";
import SignUp from "../shared/SignUp/SignUp";
import { IoCloseCircleOutline } from "react-icons/io5";
import CustomerOTP from "../UI/CustomerOTP/CustomerOTP";
import logo from "../../../public/assets/images/about/eslogo.png";
import Image from "next/image";

const AuthModal = ({ closeModal }) => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const isSignUp = () => setSignUp(!signUp);

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="rounded-xl relative bg-white w-fit">
        <IoCloseCircleOutline
          onClick={closeModal}
          className="absolute right-2 top-2 cursor-pointer"
          size={32}
        />
        <div className="flex rounded-xl">
          <div className="flex flex-col justify-between  p-4 rounded-xl  text-center space-y-3 pt-10">
            <div className="grid place-items-center">
              <Image src={logo} width={60} height={60} alt="logo" />
            </div>
            {signUp ? (
              <CustomerOTP closeModal={closeModal} />
            ) : login ? (
              <Login closeModal={closeModal} />
            ) : (
              <SignUp isSignUp={isSignUp} />
            )}
            <div>
              {login ? (
                <p className="text-center mt-3">
                  <span>Create a new Account?</span> {""}
                  <span
                    onClick={() => setLogin(!login)}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Sing up
                  </span>
                </p>
              ) : (
                <p className="text-center mt-3">
                  <span>Already Have an Account?</span>{" "}
                  <span
                    onClick={() => setLogin(!login)}
                    className="text-info-base hover:underline cursor-pointer"
                  >
                    Log in
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
