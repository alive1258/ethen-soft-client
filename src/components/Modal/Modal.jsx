"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      modal.showModal = () => {
        modal.style.display = "block";
      };
      modal.close = () => {
        modal.style.display = "none";
      };

      if (modal.style.display !== "block") {
        modal.showModal();
      }
    }

    return () => {
      if (modal) modal.close();
    };
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <div
      ref={modalRef}
      onClose={onHide}
      className=" fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-[501]"
      role="dialog"
      aria-modal="true"
    >
      <span
        onClick={onHide}
        className="text-red-500 justify-end text-2xl hidden cursor-pointer"
      >
        <IoCloseSharp />
      </span>
      <div className="flex justify-center items-center h-screen w-full">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
