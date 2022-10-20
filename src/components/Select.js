import React from 'react';

const Select = ({ selectTitle = 'Select Title', selectOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] }) => {
    return (
        <div className="grid grid-cols-2 items-center w-3/6">
            <h3>{selectTitle}</h3>
            <select className="select select-bordered select-xs md:select-sm lg:select-sm w-full max-w-xs">
                <option disabled>Select your Choice</option>
                {
                    selectOptions.map(selectOption => <option key={selectOption}>{selectOption}</option>)
                }
            </select>
        </div>
    );
};

export default Select;