import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';


const PikadayPicker = ({ value, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    const picker = new Pikaday({
      field: ref.current,
      onSelect: onChange,
    });


    return () => picker.destroy();
  }, [onChange]);


  return <input type="text" ref={ref} value={value} readOnly />;
};

export default PikadayPicker;
