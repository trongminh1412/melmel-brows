import flowerIcon from '@/public/assets/images/body/flower_icon.svg';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  data: {
    title: string;
    subTitle: string;
    label?:string;
    list: {
      label: string;
    }[];
  };
};
const Solution = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-24 bg-[url(/bgSolution.svg)] bg-no-repeat'
      }
      
    >
      <div className="py-16 px-14 border-8 border-[#e8d2b8] bg-white">
        {props.data.label?(
          <Row>
            <Col xs={24} md={24} lg={24} >   
            <motion.div 
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              exit="hide"
              variants={{
                hide: {
                  opacity: 0,
                  x: -100,
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
            <div className="text-left text-18px font-normal tracking-[0.23em] text-[#767470]">
              {props.data.subTitle}
            </div>
            <div className="text-left text-3xl font-bold  text-[#66491c] my-12 pr-8">{props.data.title}</div>
            </motion.div>
            </Col>
          <Col xs={24} md={24} lg={24}>
          <div className='text-[#4D3511] mb-8 font-normal text-2xl md:block hidden'>{props.data.label}</div>
          <motion.div 
                      initial="hide"
                      whileInView="show"
                      viewport={{ once: true }}
                      exit="hide"
                      variants={{
                        hide: {
                          opacity: 0,
                          x: 100,
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
            <Row gutter={[8, 8]}>             
              {props.data.list.map((item, idx) => {
                return (
                  <Col xs={24} md={12} lg={12} key={idx}>
                   <Row>
                    <Col xs={2} md={2} lg={1}>
                        <div className="tex-left justify-left flex">
                          <Image src={flowerIcon} alt="block" className="w-8" />
                        </div>
                      </Col>
                      <Col xs={22} md={22} lg={23}>
                        <div className="text-left text-2xl font-normal text-[#4d3511]">{item.label}</div>
                      </Col>
                   </Row>
                  </Col>
                );
              })}
            </Row>
            </motion.div>
          </Col>
        </Row>
        ):(
          <Row>
          <Col xs={24} md={24} lg={10}>
            <motion.div 
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              exit="hide"
              variants={{
                hide: {
                  opacity: 0,
                  x: -100,
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
              <div className="text-left text-18px font-normal tracking-[0.23em] text-[#767470]"  >
              {props.data.subTitle}
            </div>
            <div className="text-left text-18px font-bold  text-[#66491c] my-12 pr-8">{props.data.title}</div>
            </motion.div>
            
          </Col>
          <Col xs={24} md={24} lg={14}>
             <motion.div 
                      initial="hide"
                      whileInView="show"
                      viewport={{ once: true }}
                      exit="hide"
                      variants={{
                        hide: {
                          opacity: 0,
                          x: 100,
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
            <Row gutter={[8, 8]}>
              {props.data.list.map((item, idx) => {
                return (
                  <React.Fragment key={idx}>
                   
                    <Col span={2}>
                      <div className="tex-right justify-end flex">
                        <Image src={flowerIcon} alt="block" className="w-10" />
                      </div>
                    </Col>
                    <Col span={22}>
                      <div className="text-left text-18px font-normal text-[#4d3511]">{item.label}</div>
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
            </motion.div>
          </Col>
        </Row>
        )}
      </div>
    </div>
  </div>
);

export { Solution };
