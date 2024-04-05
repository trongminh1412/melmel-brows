import { Col, Input, Row, Select } from 'antd';
import Image from 'next/image';

import BgContact from '@/public/assets/images/body/bg-contact.png';
import product_ic from '@/public/assets/images/body/product_ic.svg';
import profile_ic from '@/public/assets/images/body/profile_ic.svg';

import style from './contact.module.scss';

type Props = {
  data: {
    title: string;
    subTitle: string;
    span_title: string;
  } | null;
};
const Contact = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={`${style.BgContact} relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-24`}
    >
      <div className="hidden lg:block">
        <Image src={BgContact} alt="" />
      </div>

      <div className={`${style.form_content}`}>
        <Row>
          <Col xs={24} md={24} lg={12}>
            <div className="p-5">
              <div className={`${style.title} mb-3 text-center`}>
                {props.data?.title}
              </div>
              <div
                className={`${style.subtitle} mb-3 border  border-solid border-[#CEC0AA] bg-[#FFFFFF] px-[8px] py-[12px]`}
              >
                {props.data?.span_title}
              </div>
              <span
                className={style.subtitle}
                dangerouslySetInnerHTML={{ __html: props.data?.subTitle || '' }}
              />
            </div>
          </Col>
          <Col xs={24} md={24} lg={12}>
            <div
              className="rounded-[12px] border border-solid  bg-white p-[40px]"
              style={{
                boxShadow: '0px 8px 35px 0px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className={`${style.form_heading} text-center`}>
                Form Đăng ký
              </div>
              <Row gutter={[12, 12]}>
                <Col xs={24} md={24} lg={12}>
                  <div className="layout-form__label">Họ</div>
                  <Input
                    title="Họ"
                    placeholder="Họ của bạn"
                    prefix={<Image src={profile_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <div className="layout-form__label">Tên</div>
                  <Input
                    title="Tên"
                    placeholder="Tên của bạn"
                    prefix={<Image src={profile_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <div className="layout-form__label">Số điện thoại</div>
                  <Input
                    title="Số điện thoại"
                    placeholder="Số điện thoại"
                    prefix={<Image src={product_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <div className="layout-form__label">Email</div>
                  <Input
                    title="Email"
                    placeholder="Email"
                    prefix={<Image src={product_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={24}>
                  <div className="layout-form__label">
                    Khóa học bạn quan tâm
                  </div>
                  <Select
                    placeholder="Khóa học bạn quan tâm"
                    options={[]}
                    className="input__select-md"
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
              <div className="mt-5 flex w-full  items-center justify-center text-center lg:block lg:w-auto">
                <button
                  type="button"
                  className="bold me-2 w-full rounded-lg border border-gray-200 bg-[#E6DDD0] px-5 py-2.5 text-3xl font-medium text-[#66491C] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                >
                  Gửi thông tin
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export { Contact };
