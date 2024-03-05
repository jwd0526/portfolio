// Modal.tsx
import React from "react";
import "./Modal.css"; // Ensure you have a corresponding CSS file for styling

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
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="nav-button" onClick={onPrevious}>
        Previous
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-navigation"></div>
        {children}
      </div>
      <button className="nav-button" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Modal;
