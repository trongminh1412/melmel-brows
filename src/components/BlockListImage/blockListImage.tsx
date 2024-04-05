/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-duplicate-props */
import { Col, Row } from 'antd';
import Image from 'next/image';

import style from './blockListImage.module.scss';
import TitleComponent from '../SectionPage1/Title/Title';
import { motion } from 'framer-motion';

type Props = {
  data: {
    title: string;
    list: { image: any; full: boolean }[];
    disableMb?: boolean;
  };
};
const BlockListImage = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4 py-24'
      }
    >
      <TitleComponent title2="NHỮNG HÌNH ẢNH HOẠT ĐỘNG TẠI MELMEL BROWS"/>

      <div className="mb-12 flex justify-center text-[20px] font-[400] leading-[30px] text-[#423F3A]">
        <span className="text-center"> {props.data.title}</span>
      </div>
      <Row gutter={[28, 28]}>
        {props.data.list.map((item, idx) => {
          return (
            <Col
              xs={item.full ? 24 : 12}
              md={item.full ? 24 : 12}
              lg={item.full ? 12 : 6}
              key={idx}
              className={
                idx === 3
                  ? style.custom_order3
                  : idx === 4
                    ? style.custom_order4
                    : ''
              }
            >
              <motion.div
               initial="hide"
               whileInView="show"
               viewport={{ once: true }}
               exit="hide"
               variants={{
                 hide: {
                   opacity: 0,
                   scaleX: -2,
                 },
                 show: {
                   opacity: 1,
                   scaleX: 1,
                   transition: {
                     duration: 0.7,
                     bounce: 0.4,
                   },
                 },
               }}  
              >
                <Image src={item.image} alt="picture" className="w-full" />
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </div>
  </div>
);

export { BlockListImage };
