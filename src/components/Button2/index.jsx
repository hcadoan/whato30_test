import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button2.module.scss';

const cx = classNames.bind(styles);

function Button2({ children, className }) {
  const classes = cx('wrapper', {
    [className]: className,
  });
  return <button className={classes}>{children}</button>;
}

export default Button2;
