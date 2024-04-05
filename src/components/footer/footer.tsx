import { Background } from '../background/Background';
import { Section } from '@/layout/Section';
import PhoneIcon from '@/public/assets/images/footer/Call.svg';
import LocationIcon from '@/public/assets/images/footer/Location.svg';
import EmailIcon from '@/public/assets/images/footer/Message.svg';
import LogoFooter from '@/public/assets/images/footer/logoFooter.svg';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <>
  <Background className="bg-[#E6DDD0]">
    <Section>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={24} lg={5}>
          <div className='md:text-center md:justify-center md:flex sm:flex sm:justify-center'>
           <Link href={"/"}>
           <Image src={LogoFooter} alt="logo-footer" />
           </Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={5}>
          <div className="text-[18px] font-bold leading-[26px] text-left text-[#66491c] mb-8">ĐỊA CHỈ</div>
          <Row>
            <Col span={2}>
              <div className="tex-left justify-left mb-8 flex">
                <Image src={LocationIcon} alt="location" />
              </div>
            </Col>
            <Col span={22}>
             <div className='text-[16px] font-normal leading-[26px] text-left text-[#453113]'> 42 Huỳnh Khương Ninh, Đa Kao, Quận 1, Thành phố Hồ Chí Minh 70000</div>
            </Col>
            <Col span={2}>
              <div className="tex-left justify-left mb-8 flex">
                <Image src={PhoneIcon} alt="location" />
              </div>
            </Col>
            <Col span={22}>
             <div className='text-[16px] font-normal leading-[26px] text-left text-[#453113]'>+84 84 662 2228</div>
            </Col>
            <Col span={2}>
              <div className="tex-left justify-left mb-8 flex">
                <Image src={EmailIcon} alt="location" />
              </div>
            </Col>
            <Col span={22}>
             <div className='text-[16px] font-normal leading-[26px] text-left text-[#453113]'>melmelbrows@gmail.com</div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={5}>
          <div className='text-[18px] font-bold leading-[26px] text-left text-[#66491c] mb-8'>GIỜ HOẠT ĐỘNG</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Thứ 2: 10:00 AM - 06:00 PM</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Thứ 3: 10:00 AM - 06:00 PM</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Thứ 4: 10:00 AM - 06:00 PM</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Thứ 5: 10:00 AM - 06:00 PM</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Thứ 6: 10:00 AM - 06:00 PM</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Thứ 7: 10:00 AM - 06:00 PM</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>
            Chủ nhật: 10:00 AM - 06:00 PM
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={4}>
          <div className='text-[18px] font-bold leading-[26px] text-left text-[#66491c] mb-8'>LINKS</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Kĩ thuật</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Ưu đãi</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Về chúng tôi</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Q&A</div>
          <div className='text-[16px] font-normal leading-[24.32px] text-left text-[#453113] mb-[1rem]'>Đánh giá</div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={5}>
          <div className='text-[18px] font-bold leading-[26px] text-left text-[#66491c] mb-8'>ĐĂNG KÍ NHẬN THÔNG TIN</div>
          <div className='text-[16px] font-normal leading-[26px] text-left text-[#453113]'>
            Luôn cập nhật những tin tức mới nhất của chúng tôi, nhận các ưu đãi
            độc quyền và hơn thế nữa.
          </div>
          <div className="bg-[#ffffff] border rounded-[8px] p-[10px] mt-10">
            <button className='w-full'>
              <span className='text-[18px] font-bold leading-[26px] text-left text-[#66491c]'>Đăng kí ngay</span>
            </button>
          </div>
        </Col>
      </Row>
    </Section>
  </Background>
  <section>
    <div className='text-center text-[18px] font-normal text-[#272B2F] leading-[28.08px] p-10'>© Melmel Brows 2023. Website built by LINK.</div>
  </section>
  </>
);

export { Footer };
