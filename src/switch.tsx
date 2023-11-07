import { useState, useLayoutEffect } from 'react';

import './switch.style.scss';

interface ISwitch {
  value: boolean;
  offLabel: string;
  onLabel: string;
  onChange: (res: boolean) => void;
  disabled?: boolean;
}

const Switch = ({ value, offLabel, onLabel, onChange, disabled }: ISwitch) => {
  const [on, setOn] = useState(false);

  useLayoutEffect(() => {
    if (typeof value !== 'undefined') {
      setOn(value);
    }
  }, [value]);

  return (
    <div className="switch-container">
      {offLabel && (
        <div className={`switch-off${!on ? ' checked' : ''}`}>{offLabel}</div>
      )}
      <SwitchBody
        disabled={disabled || false}
        value={on}
        onChange={(res: boolean) => {
          setOn(res);
          onChange(res);
        }}
      />
      {onLabel && (
        <div className={`switch-on${on && !disabled ? ' checked' : ''}`}>
          {onLabel}
        </div>
      )}
    </div>
  );
};

export default Switch;

const SwitchBody = ({
  value,
  disabled,
  onChange,
}: Pick<ISwitch, 'value' | 'disabled' | 'onChange'>) => (
  <div
    className={`switch-wrapper${value ? ' switch-wrapper-on' : ''}${
      disabled ? ' switch-wrapper-disabled' : ''
    }`}
    role="none"
    onClick={() => {
      onChange(!value);
    }}
  >
    <div className="switch-head">
      <div className="switch-disabled-x">X</div>
    </div>
    <div className="switch-bar" />
  </div>
);
