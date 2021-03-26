import React from 'react';

const SimpleDescription = (props) => {
  const { fieldLabel, fieldLabelFor, fieldPlaceholder, inputValue, inputValueController } = props;
  return (
    <div>
      <label htmlFor={fieldLabelFor} className="block text-md py-2 font-semibold text-gray-700">
        {fieldLabel}
      </label>
      <div className="mt-1">
        <textarea value={inputValue} onChange={(event) => inputValueController(event.target.value)} id={fieldLabelFor} name={fieldLabelFor} rows={3} className="shadow focus:ring-green-500 focus:border-green-500 mt-1 p-2 block w-full sm:text-sm border-gray-300 rounded-md" placeholder={fieldPlaceholder} />
      </div>
    </div>
  );
};

export default SimpleDescription;
