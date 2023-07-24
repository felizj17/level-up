import { useEffect, useRef } from 'react';
import '../css/modal.css';
export default function Modal({handleClose}) {
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = event => {
      if (!ref.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return (
    <div className='modal-outer'>
      <div className='custom-modal' ref={ref}>
        <h3>
         Take a screenshot of your results to take to your local empowerment center
        </h3>
        <div className='modal-buttons'>
          <button className='modal-btn cancel-btn' onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
