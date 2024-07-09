"use client";
import { useState } from 'react';

const Checkbox = ({ index, checkedIndex, onCheckboxChange }) => {
  return (
    <input
      type="checkbox"
      checked={checkedIndex === index}
      onChange={() => onCheckboxChange(index)}
    />
  );
};

const CheckboxList = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheckboxChange = (index) => {
    if (checkedIndex === index) {
      setCheckedIndex(null);  // Uncheck if the same checkbox is clicked again
    } else {
      setCheckedIndex(index);  // Check the new checkbox
    }
  };

  const items = ['Zara', 'Yerima', 'Verisus', 'OML', 'Ogoscit'];

  return (
    <ul className="list-none space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <Checkbox
            index={index}
            checkedIndex={checkedIndex}
            onCheckboxChange={handleCheckboxChange}
          />
          <span className="ml-2">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
