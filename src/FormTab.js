import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const computeIconProps = (status) => {
  if (status === 'available') return { icon: 'dot-circle' };
  if (status === 'unavailable') return { icon: 'circle', size: 'xs' };
  if (status === 'complete') return { icon: 'check-circle' };
  if (status === 'invalid') return { icon: 'exclamation-circle' };
  return null;
};

function FormTab({ name, status, isActive, onClick }) {
  const formTabClassName = `tab ${status} ${isActive ? 'active' : '' }`.trim();
  const iconProps = computeIconProps(status);
  return (
    <div className={formTabClassName} onClick={onClick}>
      <div className="vertical-line" />
      <div className="tab-icon">
        {Boolean(iconProps) && (
          <FontAwesomeIcon className="fa-icon" {...iconProps} />
        )}
        <div className="arrow-box">{name}</div>
      </div>
    </div>
  );
}

export default FormTab;
