import React from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Textfield from '../../components/Textfield/Textfield';
import Button2 from '../../components/Button2';

const cx = classNames.bind(styles);

const Register = () => {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('title')}>JOIN US</span>
      <div className={cx('line')}></div>
      <span className={cx('label')}>아이디(이메일) *</span>
      <Textfield className={cx('mg-30')} placeholder="example@email.com" />
      <span className={cx('label')}>비밀번호 *</span>
      <Textfield className={cx('mg-30')} placeholder="영문, 숫자, 특수문자를 포함한 8~12자리" />
      <span className={cx('label')}>비밀번호 확인 *</span>
      <Textfield className={cx('mg-30')} />
      <span className={cx('label')}>주소</span>
      <Textfield className={cx('mg-30')} />
      <Textfield className={cx('mg-30')} placeholder="추가 주소" />
      <span className={cx('label')}>연락처</span>
      <Textfield className={cx('mg-42')} />
      <div className={cx('line')}></div>

      <div className={cx('check')}>
        <div className={cx('mg-15')}>
          <input type="checkbox" id="customRadio" />
          <span>이용약관 및 개인정보 처리 방침에 동의합니다. (필수)</span>
        </div>
        <div>
          <input type="checkbox" id="customRadio" />
          <span>광고 및 메일 수신에 동의합니다. (선택)</span>
        </div>
      </div>
      <Button2 children="로그인하기" />
    </div>
  );
};

export default Register;
