import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../assets/image/logo.png';
import routers from '../../../../config/routers';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('wrapper')}>
      <Link to={routers.mainpage}>
        <img className={cx('logo')} src={logo}></img>
      </Link>
      <ul className={cx('navbar')}>
        <li className={cx('navbar_item')}>
          <a>INTRODUCTION</a>
        </li>
        <li className={cx('navbar_item')}>
          <a>SOLUTION</a>
        </li>
        <li className={cx('navbar_item')}>
          <a>RATEPLAN</a>
        </li>
        <li className={cx('navbar_item', 'separator')}></li>
        <li className={cx('navbar_item')}>
          <Link to={routers.login}>LOGIN</Link>
        </li>
        <li className={cx('navbar_item')}>
          <Link to={routers.register}>APPLY FOR FREE USE</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
