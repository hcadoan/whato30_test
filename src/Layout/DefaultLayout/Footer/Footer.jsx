import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import naver_icon from '../../../assets/image/naver-icon.png';
import facebook_icon from '../../../assets/image/facebook-icon.png';
import google_icon from '../../../assets/image/google-icon.png';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('top')}>
        <div className={cx('left')}>
          <span className={cx('title')}>what happened</span>
          <span className={cx('content')}>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
          <span className={cx('content')}>[공지] 29CM 강남 스토어 영업 종료</span>
          <span className={cx('content')}>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
          <span className={cx('content')}>[공지] iOS 10 이하 버전 지원 중단 안내</span>
          <span className={cx('content')}>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
        </div>
        <div className={cx('right')}>
          <div>
            <span className={cx('title')}>about us</span>
            <span className={cx('content')}>회사 소개</span>
            <span className={cx('content')}>인재 채용</span>
            <span className={cx('content')}>상시 할인 혜택</span>
          </div>
          <div>
            <span className={cx('title')}>my order</span>
            <span className={cx('content')}>내 주문</span>
            <span className={cx('content')}>주문 배송</span>
            <span className={cx('content')}>취소 / 교환 / 반품 내역</span>
            <span className={cx('content')}>상품 리뷰 내역</span>
            <span className={cx('content')}>증빙 서류 발급</span>
          </div>
          <div>
            <span className={cx('title')}>my account</span>
            <span className={cx('content')}>회원 정보 수정</span>
            <span className={cx('content')}>회원 등급</span>
            <span className={cx('content')}>마일리지 현황</span>
            <span className={cx('content')}>쿠폰</span>
          </div>
          <div>
            <span className={cx('title')}>help</span>
            <span className={cx('content')}>1 : 1 상담 내역</span>
            <span className={cx('content')}>상품 Q & A 내역</span>
            <span className={cx('content')}>공지 사항</span>
            <span className={cx('content')}>자주하는 질문</span>
            <span className={cx('content')}>고객의 소리</span>
          </div>
        </div>
      </div>
      <div className={cx('end')}>
        <span className={cx('end_content')}>
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ
          test0101@what happened.co.kr 서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스 이용약관 l
          개인정보처리방침
        </span>
        <div className={cx('end_socials')}>
          <img src={naver_icon} />
          <img src={facebook_icon} />
          <img src={google_icon} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
