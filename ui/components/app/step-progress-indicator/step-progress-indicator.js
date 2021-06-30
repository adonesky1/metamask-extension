import React from 'react';
import classnames from 'classnames';

export default function ProgressBar({ stage = 0 }) {
  return (
    <div className="container">
      <ul className="progressbar">
        <li
          className={classnames({
            active: stage >= 1,
            complete: stage >= 1,
          })}
        >
          Create password
        </li>
        <li
          className={classnames({
            active: stage >= 2,
            complete: stage >=3 
          })}
        >
          Secure wallet
        </li>
        <li
          className={classnames({
            active: stage >= 4,
            complete: stage >= 5,
          })}
        >
          Confirm seed phrase
        </li>
      </ul>
    </div>
  );
}
