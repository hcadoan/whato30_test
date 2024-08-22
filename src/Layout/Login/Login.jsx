import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Textfield from '../../components/Textfield/Textfield';
import Button2 from '../../components/Button2';
import naver_icon from '../../assets/image/naver-icon.png';
import kakao_icon from '../../assets/image/kakao-icon.png';
import facebook_icon from '../../assets/image/facebook-icon.png';
import google_icon from '../../assets/image/google-icon.png';

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('title')}>Welcome!</span>
      <div className={cx('line')}></div>
      <Textfield className={cx('mg-16')} placeholder="아이디 (이메일)" />
      <Textfield className={cx('mg-23')} placeholder="비밀번호" />
      <Button2 children="로그인하기" />
      <span className={cx('sns')}>SNS 계정으로 로그인</span>
      <div className={cx('socials')}>
        <img src={naver_icon} />
        <img src={kakao_icon} />
        <img src={facebook_icon} />
        <img src={google_icon} />
      </div>
      <Button2 className={cx('non_active')} children="계정이 없으신가요? 간편가입하기" />
      <div className={cx('link')}>
        <a>아이디(이메일)찾기</a>
        <a>비밀번호 찾기</a>
      </div>
    </div>
  );
};

export default Login;
