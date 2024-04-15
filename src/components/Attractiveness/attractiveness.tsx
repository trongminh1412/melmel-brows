import TitleComponent from '../SectionPage1/Title/Title';
import AttractiveImg from '@/public/assets/images/body/attractive_img.svg';
import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  data: {
    title: string;
    list: {
      title: string;
      subTitle: string;
      icon: any;
    }[];
  };
};
const Attractiveness = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4 py-24 475px:px-[2rem]'
      }
    >
      <TitleComponent title2={props.data.title} />
      <Row className="gap-[2rem]">
        <Col xs={24} md={24} lg={13}>
          <Row gutter={[28, 28]} className="h-full">
            {props.data.list.map((item, idx) => {
              return (
                <Col xs={12} md={12} lg={12} key={idx}>
                  <motion.div
                    className="text-left"
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    exit="hide"
                    variants={{
                      hide: {
                        opacity: 0,
                        y: 100,
                      },
                      show: {
                        opacity: 1,
                        y: 1,
                        transition: {
                          duration: 0.7,
                          bounce: 0.4,
                        },
                      },
                    }}
                  >
                    <div className="tex-left justify-left mb-8 flex 475px:w-[30%]">
                      <Image src={item.icon} alt="attractive" />
                    </div>
                    <div className="text-20px uppercase text-left font-bold text-brown-900 475px:text-14px">
                      {item.title}
                    </div>
                    <div
                      className="text-18px mt-[5px] text-left font-normal text-[#423F3A] 475px:text-14px"
                      dangerouslySetInnerHTML={{ __html: item.subTitle }}
                    />
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs={24} md={24} lg={10}>
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            exit="hide"
            variants={{
              hide: {
                opacity: 0,
                y: 100,
              },
              show: {
                opacity: 1,
                y: 1,
                transition: {
                  duration: 0.7,
                  bounce: 0.4,
                },
              },
            }}
          >
            <Image src={AttractiveImg} alt="attractive" className="w-full" />
          </motion.div>
        </Col>
      </Row>
    </div>
  </div>
);

export { Attractiveness };
