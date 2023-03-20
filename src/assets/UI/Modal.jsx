import { useState } from "react";

import "./Modal.css";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
    props.setError(null);
  };
  return (
    <>
      {!showModal ? (
        ""
      ) : (
        <div className="overlay" onClick={closeModalHandler}>
          <div className="modal">
            Invalid Input
            <div className="modal-content">{props.error}</div>
            <button className="close" onClick={closeModalHandler}>
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
