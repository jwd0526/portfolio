import React, { useEffect } from "react";
import "./Modal.css"; // Ensure you have a corresponding CSS file for styling
import left from "../../../images/leftButton.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onPrevious: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  onPrevious,
  onNext,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <img className="nav-button" src={left} alt="left" onClick={onPrevious} />

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>

      <img
        className="nav-button"
        style={{ rotate: "180deg" }}
        src={left}
        alt="right"
        onClick={onNext}
      />
    </div>
  );
};

export default Modal;
