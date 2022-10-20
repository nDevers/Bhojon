import React from 'react';

const Input = ({ inputTitle = 'Input Title', inputType = 'text', inputPlaceHolder = 'Input Placeholder', inputCustomClass = 'input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs' }) => {
    return (
        <div className="grid grid-cols-2 items-center w-3/6">
            <h3>{inputTitle}</h3>
            <input
                type={inputType}
                placeholder={inputPlaceHolder}
                className={inputCustomClass}
            />
        </div>
    );
};

export default Input;