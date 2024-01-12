import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledButton = styled.button`
margin: 10px;
background-color: black;
border-radius: 0.5rem;
color: white;
&:hover {
  background-color: blue;
}
`;

const AcheivedModal = forwardRef(function AcheivedModal(
  {foodName, onSet}, 
  ref
){
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open:()=>{
        dialog.current.showModal();
      },
      close: ()=>{
        dialog.current.close();
      }
    };
  });

  return createPortal(
    <dialog style={{
      'width': '400px',
      'height': '200px',
      'display': 'flex',
      'flexDirection': 'column',
      'border': '2px solid #ddd',
      'borderRadius': '5%'
    }} ref={dialog}>
      <h2>Congratulations!</h2>
      <p>Eat {foodName} with no worries!</p>
      <form method="dialog">
        <StyledButton onClick={onSet}>Close</StyledButton>
      </form>
    </dialog>, document.getElementById('modal')
  );
});

export default AcheivedModal;