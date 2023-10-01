import React from "react";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmation</h2>
        <p>Employee has been successfully created!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;