import React from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
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
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
