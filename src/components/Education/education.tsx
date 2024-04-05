import style from './education.module.scss';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';
import TitleComponent from '../SectionPage1/Title/Title';
import { motion } from 'framer-motion';

type Props = {
  data: {
    title: string;
    image: any;
    noTitle: boolean;
  }[];
};
const Education = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={`relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4 py-24`}
    >
      <TitleComponent title2="Bạn Cũng Được"/>
      <div className={style.element}>
        <Row>
          {props.data.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                {!item.noTitle ? (
                  <Col
                    xs={24}
                    md={24}
                    lg={6}
                    className="flex items-center justify-center p-0"
                  >
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
                        <div className={`${style.block} w-full`}>
                          <div className="tex-center flex justify-center">
                            <Image src={item.image} alt="education" />
                          </div>
                          <span className={style.label}>{item.title}</span>
                        </div>
                         </motion.div>
                    
                  </Col>
                ) : (
                  <Col
                    xs={24}
                    md={24}
                    lg={6}
                    className={idx === 4 ? style.custom_order : ''}
                  >
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
                      }}  >
                      <Image
                        src={item.image}
                        alt="education"
                        className={`size-full`}
                      />
                    </motion.div>
                  </Col>
                )}
              </React.Fragment>
            );
          })}
        </Row>
      </div>
    </div>
  </div>
);

export { Education };
