"use client";

// Modal Compound Component

import useDetectOutsideClick from "@/hooks/custom/use-detect-outside-click";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

// UI Components

const Overlay = () => {
  return (
    <div
      className="
        fixed inset-0 w-full h-screen 
        bg-(--backdrop-color)
        backdrop-blur-sm
        z-900
        transition-all duration-500
      "
    />
  );
};

const StyledModal = ({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      ref={ref}
      className="
        fixed top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        bg-grey-0
rounded-(--border-radius-lg)        
shadow-(--shadow-lg)
        px-16 py-12
        transition-all duration-500
        z-1000
        
      "
    >
      {children}
    </div>
  );
};

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="
        absolute top-5 right-7
        p-1
rounded-(--border-radius-sm)      
  translate-x-3
        transition-all duration-200
hover:bg-grey-100      "
    >
      <RxCross2
        className="
          w-6 h-6
text-grey-500        "
      />
    </button>
  );
};

// Logical Components

type ModalType = {
  openName: string;
  setOpenName: (name: string) => void;
  close: () => void;
  open: (name: string) => void;
};

const ModalContext = createContext<ModalType | null>(null);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a Modal");
  }
  return context;
};

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [openName, setOpenName] = useState<string>("");
  const close = () => setOpenName("");
  const open = setOpenName;
  const value = { openName, setOpenName, close, open };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const ModalOpen = ({
  children,
  opens: opensWindowName,
}: {
  children: React.JSX.Element;
  opens: string;
}) => {
  const { open } = useModal();
  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const ModalWindow = ({
  children,
  name: windowName,
}: {
  children: React.JSX.Element;
  name: string;
}) => {
  const { openName, close } = useModal();
  const { ref } = useDetectOutsideClick<HTMLDivElement>({
    action: close,
    listenCapture: false,
  });

  if (windowName !== openName) return null;

  return createPortal(
    <>
      <Overlay />
      <StyledModal ref={ref}>
        <CloseButton onClick={close} />
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </>,
    document.body
  );
};

export { Modal, ModalOpen, ModalWindow };
