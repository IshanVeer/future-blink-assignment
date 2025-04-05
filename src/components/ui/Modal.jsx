import React from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const Modal = ({ onClose }) => {
  return createPortal(
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <div className={css.closeButtonContainer}>
          <button onClick={onClose} className={css.closeButton}>
            <img
              className={css.closeButtonImage}
              src="/icons/cancel.svg"
              alt="close"
            />
          </button>
        </div>
        <div>Modal</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
