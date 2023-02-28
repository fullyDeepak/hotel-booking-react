import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const NextPrevButton = (props) => {
  return (
    <button
      className={`bg-white z-100 p-3 rounded-full ${
        props.next ? 'rotate-180' : ''
      } ${
        props.disabled ? 'hidden' : 'inline-block'
      } shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] active:translate-y-[1px] hover:bg-gray-50`}>
      <FaChevronLeft size={10} />
    </button>
  );
};

export default NextPrevButton;
