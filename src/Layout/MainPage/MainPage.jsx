import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainPage.module.scss';
import banner_img from '../../assets/image/main-banner.png';
import introduction_img from '../../assets/image/introduction-bg.png';
import Button from '../../components/Button';
import go_img from '../../assets/image/go-icon.png';
import number_img from '../../assets/image/producticon-01.png';
import pd_img_1 from '../../assets/image/best-image-01.png';
import pd_img_2 from '../../assets/image/best-image-02.png';
import pd_img_3 from '../../assets/image/best-image-03.png';
import main_pd_img_1 from '../../assets/image/img-01.png';
import main_pd_img_2 from '../../assets/image/img-02.png';
import main_pd_img_3 from '../../assets/image/img-03.png';
import main_pd_img_4 from '../../assets/image/img-04.png';
import main_pd_img_5 from '../../assets/image/img-05.png';
import brnad_img_1 from '../../assets/image/object-01.png';
import brnad_img_2 from '../../assets/image/object-06.png';
import brnad_img_3 from '../../assets/image/object-07.png';
import brnad_img_4 from '../../assets/image/object-02.png';
import brnad_img_5 from '../../assets/image/object-03.png';
import brnad_img_6 from '../../assets/image/object-04.png';
import brnad_img_7 from '../../assets/image/object-05.png';
import brand_img_8 from '../../assets/image/img.png';
import issue_img from '../../assets/image/news-img-01.png';
import issue_img_1 from '../../assets/image/news-img-03.png';
import issue_img_2 from '../../assets/image/news-img-04.png';
import issue_img_3 from '../../assets/image/news-img-05.png';
import issue_img_4 from '../../assets/image/news-object-04.png';
import issue_img_5 from '../../assets/image/news-object-03.png';
import issue_img_6 from '../../assets/image/news-object-05.png';
import footer_img_1 from '../../assets/image/video-object-05.png';
import footer_img_2 from '../../assets/image/video-object-07.png';
import footer_img_3 from '../../assets/image/video-object-06.png';
import footer_img_4 from '../../assets/image/video-object-04.png';
import footer_img_5 from '../../assets/image/video-object-03.png';
import footer_img_6 from '../../assets/image/video-object-01.png';
import footer_img_7 from '../../assets/image/video-object-09.png';
import footer_img_8 from '../../assets/image/video-object-08.png';
import footer_img from '../../assets/image/video.png';

const cx = classNames.bind(styles);

const MainPage = () => {
  return (
    <div>
      <div className={cx('banner')}>
        <img src={banner_img} alt="Banner" className={cx('banner-img')} />
      </div>
      <div className={cx('introduction')}>
        <div className={cx('introduction_content')}>
          <div className={cx('title')}>WHAT HAPPENED!</div>
          <div className={cx('description')}>
            How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be
            trimmed. Take the first step to your brand's success. How to create mobile-optimized videos in minutes.
          </div>
        </div>
        <img src={introduction_img} alt="introduction" className={cx('introduction-img')} />
      </div>
      <div className={cx('best_product')}>
        <div className={cx('content_header')}>
          <div className={cx('title', 'orgage_clor', 'center')}>BEST PRODUCT</div>
          <div className={cx('description', 'orgage_clor', 'center')}>
            How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be
            trimmed. Take the first
          </div>
        </div>
        <div className={cx('best_product_list')}>
          <div className={cx('best_product_item')}>
            <img className={cx('best_product_img')} src={pd_img_1} />
            <div className={cx('item_description')}>
              <span>How to create mobile-optimized</span>
              <img src={go_img} />
            </div>
            <img className={cx('logo_number')} src={number_img} />
          </div>
          <div className={cx('best_product_item')}>
            <img className={cx('best_product_img')} src={pd_img_2} />
            <div className={cx('item_description')}>
              <span>How to create mobile-optimized</span>
              <img src={go_img} />
            </div>
            <img className={cx('logo_number')} src={number_img} />
          </div>
          <div className={cx('best_product_item')}>
            <img className={cx('best_product_img')} src={pd_img_3} />
            <div className={cx('item_description')}>
              <span>How to create mobile-optimized</span>
              <img src={go_img} />
            </div>
            <img className={cx('logo_number')} src={number_img} />
          </div>
        </div>
      </div>
      <div className={cx('main_product')}>
        <div className={cx('main_product_list')}>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_1} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_2} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_3} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_4} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_5} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_1} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_2} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_3} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_4} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_5} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_1} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_2} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_3} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_4} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_5} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_1} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_2} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_3} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_4} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_5} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_1} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_2} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_3} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_4} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
          <div className={cx('main_product_item')}>
            <img src={main_pd_img_5} />
            <span className={cx('main_product_description')}>[what happen] How to create</span>
            <div className={cx('main_product_price')}>
              <span>2,500 won</span>
              <div>
                <span>236</span>
              </div>
            </div>
          </div>
        </div>
        <Button children="SEE MORE" />
      </div>
      <div className={cx('brand')}>
        <div className={cx('content_header')}>
          <div className={cx('title', 'yellow_color', 'center')}>BRAND STORY</div>
          <div className={cx('description', 'yellow_color', 'center')}>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서 다듬을 수
            있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </div>
        </div>
        <img className={cx('brand_img_1')} src={brnad_img_1} />
        <img className={cx('brand_img_2')} src={brnad_img_2} />
        <img className={cx('brand_img_3')} src={brnad_img_3} />
        <img className={cx('brand_img_4')} src={brnad_img_4} />
        <img className={cx('brand_img_5')} src={brnad_img_5} />
        <img className={cx('brand_img_6')} src={brnad_img_6} />
        <img className={cx('brand_img_7')} src={brnad_img_7} />
        <div className={cx('brand_container')}>
          <img src={brand_img_8} />
          <div>
            <span className={cx('brand_container_title')}>WHAT HAPPENED'S BRAND STORY</span>
            <span className={cx('brand_container_descrip')}>
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는
              찾아 창공에 광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도
              피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
              아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
            </span>
            <Button children="SEEMORE" />
          </div>
        </div>
      </div>
      <div className={cx('issue')}>
        <div className={cx('content_header')}>
          <div className={cx('title', 'black_color', 'center')}>HAPPENED'S ISSUE</div>
          <div className={cx('description', 'black_color', 'center')} style={{ marginBottom: '5.5rem' }}>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서 다듬을 수
            있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </div>
          <Button children="SEE MORE" />
        </div>
        <div className={cx('issue_container')}>
          <div className={cx('issue_item_1')}>
            <span>WHPN ISSUE</span>
            <img className={cx('issue_item_img')} src={issue_img} />
          </div>
          <div className={cx('issue_item')}>
            <div className={cx('issue_item_title')}>B BRAND</div>
            <img src={issue_img_1} />
          </div>
          <div className={cx('issue_item')}>
            <div className={cx('issue_item_title')}>C BRAND</div>
            <img src={issue_img_1} />
          </div>
          <div className={cx('issue_item')}>
            <div className={cx('issue_item_title', 'active')}>D BRAND</div>
            <img src={issue_img_2} />
          </div>
          <div className={cx('issue_item')}>
            <div className={cx('issue_item_title')}>E BRAND</div>
            <img src={issue_img_3} />
          </div>
          <img className={cx('issue_img_4')} src={issue_img_4} />
          <img className={cx('issue_img_5')} src={issue_img_5} />
          <img className={cx('issue_img_6')} src={issue_img_6} />
        </div>
      </div>
      <div className={cx('footer_content')}>
        <div className={cx('content_header')}>
          <div className={cx('title', 'black_color', 'center')}>WHAT HAPPENED</div>
          <div className={cx('description', 'black_color', 'center')} style={{ marginBottom: '5.5rem' }}>
            How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be
            trimmed. Take the first
          </div>
          <Button children="SEE MORE" />
          <img className={cx('footer_img_1')} src={footer_img_1} />
          <img className={cx('footer_img_2')} src={footer_img_2} />
          <img className={cx('footer_img_3')} src={footer_img_3} />
          <img className={cx('footer_img_4')} src={footer_img_4} />
          <img className={cx('footer_img_5')} src={footer_img_5} />
          <img className={cx('footer_img_6')} src={footer_img_6} />
          <img className={cx('footer_img_7')} src={footer_img_7} />
          <img className={cx('footer_img_8')} src={footer_img_8} />
          <img className={cx('footer_img')} src={footer_img} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
