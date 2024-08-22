import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children }) {
  return <button className={cx('wrapper')}>{children}</button>;
}

export default Button;
