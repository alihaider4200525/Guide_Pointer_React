import { useState } from 'react';
import './Dropdown.css';

function Dropdown({ label, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className="custom-select">

      <div
        className="select-selected"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <i className={`fa fa-chevron-${open ? 'up' : 'down'}`} />
      </div>

      {open && (
        <div className="select-items">
          {options.map((opt, index) => (
            <div
              key={index}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Dropdown
