import React from 'react';

const SimpleInput = (props) => {
  const { fieldLabel, fieldLabelFor } = props;
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={fieldLabelFor} className="block text-md py-2 font-semibold text-gray-700">{fieldLabel}</label>
      <input type="text" name={fieldLabelFor} id={fieldLabelFor} autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow p-2 sm:text-sm border-gray-300 rounded-md" />
    </div>
  );
};

export default SimpleInput;
