import { Col, Input, Row, Select } from "antd";
import Image from "next/image";

import BgContact from "@/public/assets/images/body/bg-contact.png";
import product_ic from "@/public/assets/images/body/product_ic.svg";
import profile_ic from "@/public/assets/images/body/profile_ic.svg";
import rec from "@/public/assets/images/icon/rec.png";
import { motion } from "framer-motion";
import style from "./contact.module.scss";
const {TextArea} = Input

type Props = {
  dataContact1?: {
    title: string
    span_title: string;
    li: {
      title: string;
    }[];
  };
  data: {
    title: string;
    subTitle: string;
    span_title: string;
  } | null;
};
const Contact = (props: Props) => (
  
  <div className="section rounded-2xl  mb-[8rem] 1280:px-[4rem]">
    <div
      className={`${style.BgContact} relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-6`}
    >
      <div className="hidden lg:block">
        <Image src={BgContact} alt="" />
      </div>

      <div className={`${style.form_content}`}>
        <Row className="items-center px-[4rem] 1024px:px-[2rem]">
          <Col xs={24} md={24} lg={12} >
            {props.dataContact1 && (
              <div className="">
                <div className={`${style.title} mb-3 text-center text-brown-300 text-7xl`}>
                  {props.dataContact1?.title}
                </div>
                <div>
                  <p className="text-20px font-bold text-dark-100 mb-4 1024px:text-16px">    {props.dataContact1?.span_title}</p>
                </div>
                {props.dataContact1.li.map((item, idx) => {
                  return (
                    <div key={idx} className="flex items-center gap-4 mb-6">
                      <div>
                        <Image src={rec} alt="" />
                      </div>
                      <p className="text-20px font-normal text-dark-100 1024px:text-16px">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </Col>
          {props.data && (
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
                  dangerouslySetInnerHTML={{
                    __html: props.data?.subTitle || "",
                  }}
                />
              </div>
            </Col>
          )}

          <Col xs={24} md={24} lg={12} >
            <motion.div
              className="rounded-[12px] border border-solid  bg-white p-[40px]"
              style={{
                boxShadow: "0px 8px 35px 0px rgba(0, 0, 0, 0.08)",
              }}
              initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                exit="hide"
                variants={{
                  hide: {
                    opacity: 0,
                    x: 300,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      bounce: 0.4,
                    },
                  },
                }} 
            >
              <div className={`${style.form_heading} text-center`}>
               {props.data ? " Form Đăng ký" : "Form liên hệ online"}
              </div>
              <Row gutter={[12, 12]}>
                <Col xs={24} md={24} lg={12} className="mb-6">
                  <div className="layout-form__label">Họ</div>
                  <Input
                    title="Họ"
                    placeholder="Họ của bạn"
                    prefix={<Image src={profile_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={12} className="mb-6">
                  <div className="layout-form__label">Tên</div>
                  <Input
                    title="Tên"
                    placeholder="Tên của bạn"
                    prefix={<Image src={profile_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={12} className="mb-6">
                  <div className="layout-form__label">Số điện thoại</div>
                  <Input
                    title="Số điện thoại"
                    placeholder="Số điện thoại"
                    prefix={<Image src={product_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                <Col xs={24} md={24} lg={12} className="mb-6">
                  <div className="layout-form__label">Email</div>
                  <Input
                    title="Email"
                    placeholder="Email"
                    prefix={<Image src={product_ic} alt="" />}
                    className="input__text-md"
                  />
                </Col>
                {
                  props.dataContact1 ? <>
                  <Col xs={24} md={24} lg={24}>
                  <div className="layout-form__label">
                    Khóa học bạn quan tâm
                  </div>
                  <TextArea rows={3} placeholder="Nội dung liên hệ" />
                </Col>
                  </> : 
                  <>
                  <Col xs={24} md={24} lg={24}>
                  <div className="layout-form__label">
                    Khóa học bạn quan tâm
                  </div>
                  <Select
                    placeholder="Khóa học bạn quan tâm"
                    options={[]}
                    className="input__select-md"
                    style={{ width: "100%" }}
                  />
                </Col>
                  </>
                }
              </Row>
              <div className="mt-14 flex w-full  items-center justify-center text-center lg:block lg:w-auto">
                <button
                  type="button"
                  className="bold me-2 w-full rounded-3xl border border-gray-200 bg-[#E6DDD0] px-5 py-2.5 text-3xl font-medium text-[#66491C] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 h-[48px]"
                >
                  Gửi thông tin
                </button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export { Contact };
