import React from 'react';

const SimpleEMail = (props) => {
  const { fieldLabel, fieldLabelFor, fieldPlaceholder } = props;
  return (
    <div className="col-span-6 sm:col-span-4">
      <label htmlFor={fieldLabelFor} className="block text-md py-2 font-semibold text-gray-700">{fieldLabel}</label>
      <input type="text" name={fieldLabelFor} id={fieldLabelFor} autoComplete="email" placeholder={fieldPlaceholder} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow p-2 sm:text-sm border-gray-300 rounded-md" />
    </div>
  );
};

export default SimpleEMail;
