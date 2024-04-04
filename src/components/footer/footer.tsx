import { Col, Row } from 'antd';
import Image from 'next/image';

import { Section } from '@/layout/Section';
import PhoneIcon from '@/public/assets/images/Call.svg';
import LocationIcon from '@/public/assets/images/Location.svg';
import LogoFooter from '@/public/assets/images/logoFooter.svg';
import EmailIcon from '@/public/assets/images/Message.svg';

import { Background } from '../background/Background';
import style from './footer.module.scss';

const Footer = () => (
  <Background className="bg-[#E6DDD0]">
    <Section yPadding={'16'}>
      <Row gutter={[20, 20]}>
        <Col md={24} lg={5}>
          <div className={style.logoFooter}>
            <Image src={LogoFooter} alt="logo-footer" />
          </div>
        </Col>
        <Col md={24} lg={5}>
          <div className={style.titleFooter}>ĐỊA CHỈ</div>
          <div className="flex">
            <div className={style.icon}>
              <Image src={LocationIcon} alt="location" />
            </div>
            <div className={style.subtitleFooter}>
              42 Huỳnh Khương Ninh, Đa Kao, Quận 1, Thành phố Hồ Chí Minh 70000
            </div>
          </div>
          <div className="flex">
            <div className={style.icon}>
              <Image src={PhoneIcon} alt="phone" />
            </div>
            <div className={style.subtitleFooter}>+84 84 662 2228</div>
          </div>
          <div className="flex">
            <div className={style.icon}>
              <Image src={EmailIcon} alt="email" />
            </div>
            <div className={style.subtitleFooter}> melmelbrows@gmail.com</div>
          </div>
        </Col>
        <Col md={24} lg={5}>
          <div className={style.titleFooter}>GIỜ HOẠT ĐỘNG</div>
          <div className={style.subtitleFooter}>Thứ 2: 10:00 AM - 06:00 PM</div>
          <div className={style.subtitleFooter}>Thứ 3: 10:00 AM - 06:00 PM</div>
          <div className={style.subtitleFooter}>Thứ 4: 10:00 AM - 06:00 PM</div>
          <div className={style.subtitleFooter}>Thứ 5: 10:00 AM - 06:00 PM</div>
          <div className={style.subtitleFooter}>Thứ 6: 10:00 AM - 06:00 PM</div>
          <div className={style.subtitleFooter}>Thứ 7: 10:00 AM - 06:00 PM</div>
          <div className={style.subtitleFooter}>
            Chủ nhật: 10:00 AM - 06:00 PM
          </div>
        </Col>
        <Col md={24} lg={4}>
          <div className={style.titleFooter}>LINKS</div>
          <div className={style.subtitleFooter}>Kĩ thuật</div>
          <div className={style.subtitleFooter}>Ưu đãi</div>
          <div className={style.subtitleFooter}>Về chúng tôi</div>
          <div className={style.subtitleFooter}>Q&A</div>
          <div className={style.subtitleFooter}>Đánh giá</div>
        </Col>
        <Col md={24} lg={5}>
          <div className={style.titleFooter}>ĐĂNG KÍ NHẬN THÔNG TIN</div>
          <div className={style.subtitleFooter}>
            Luôn cập nhật những tin tức mới nhất của chúng tôi, nhận các ưu đãi
            độc quyền và hơn thế nữa.
          </div>
          <div className={style.button}>
            <button>
              {' '}
              <span className={style.titleFooter}>Đăng kí ngay</span>
            </button>
          </div>
        </Col>
      </Row>
    </Section>
  </Background>
);

export { Footer };
