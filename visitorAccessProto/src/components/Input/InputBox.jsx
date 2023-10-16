import React from 'react';

const InputBox = ({ type, name, id, label, placeholder }) => {
  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor={id} className=''>
        {label}
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
