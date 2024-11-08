import React from 'react';

interface AsideToggleProps {
  onToggle: () => void;
}

const AsideToggle: React.FC<AsideToggleProps> = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="p-2">
      Toggle Aside
    </button>
  );
};

export default AsideToggle;
