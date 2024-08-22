import React from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={cx('container')}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
