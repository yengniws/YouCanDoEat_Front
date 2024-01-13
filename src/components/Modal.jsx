import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";
//import '../css/modal.css';

const Modal =  forwardRef(function Modal({children}, ref){
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      }
    };
  });

  return  createPortal(
    <dialog ref={dialog} className="result-modal">
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
});

export default Modal;