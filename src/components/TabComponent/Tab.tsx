import TitleComponent from '../SectionPage1/Title/Title';
import flowerIcon from '@/public/assets/images/body/flower_icon.svg';
// import required modules
import slide1 from '@/public/assets/images/page1/slider1.png';
import { Tabs } from 'antd';
import { motion } from 'framer-motion';
// Import Swiper React components
import Image from 'next/image';
import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  data: {
    label: string;
    price?: string;
    content: {
      title: string;
      list: { label: string }[];
    };
  }[];
};
const TabComponent = (props: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [key, setKey] = useState('0');

  return (
    <div className="section rounded-xl">
      <div className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem]">
        <TitleComponent title2="Bạn Được Học Những Gì?" />
        <Tabs
          tabBarStyle={{ color: '#94774A' }}
          defaultActiveKey={key}
          animated={true}
          onChange={(val) => {
            console.log(43, val);
            setKey(val);
          }}
        >
          {props.data.map((item, idx) => {
            return (
              <Tabs.TabPane
                key={idx}
                tab={
                  key === `${idx}` ? (
                    <div className="text-24px text-brown-600 font-bold  bg-brown-500 py-[1.5rem] px-[2rem] rounded-[4px]  flex justify-center 1024px:text-18px w-full">
                      {item.label}
                    </div>
                  ) : (
                    <div className="text-24px text-dark-600 font-bold  bg-white py-[1.5rem] px-[2rem] rounded-[4px]  flex justify-center 1024px:text-18px w-full">
                      {item.label}
                    </div>
                  )
                }
                className=" bg-brown-500 p-8"
              >
                <div className="flex justify-between gap-12 475px:flex-col">
                  <motion.div
                    className="w-[45%] 475px:w-full"
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
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={false}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    onSwiper={setThumbsSwiper}

                    >
                      <SwiperSlide>
                        <div className="w-full">
                          <Image src={slide1} alt="" className="w-full" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="w-full">
                          <Image src={slide1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="w-full">
                          <Image src={slide1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="w-full">
                          <Image src={slide1} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </motion.div>

                  <motion.div
                    className="w-[50%] 475px:w-full "
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    exit="hide"
                    variants={{
                      hide: {
                        opacity: 0,
                        x: -300,
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
                    <p className="text-16px text-dark-300 font-normal tracking-wide mb-2">
                      KỸ THUẬT
                    </p>

                    <h2 className="text-7xl text-[#66491C] font-bold mb-4 1024px:text-32px">
                      {item.label}
                    </h2>
                    {item.price && (
                      <div className="mt-2 mb-12">
                        <span className="px-5 py-6 border-[#DACEBD] rounded-lg border-2 text-[#66491C] bg-[#E6DDD0] bold">
                          {item.price}
                        </span>
                      </div>
                    )}
                    <div className="">
                      <p className="text-[#322F2A] text-20px mb-4 1024px:text-16px">
                        {item.content.title}
                      </p>
                      <p className="text-brown-900 text-20px font-medium mb-2 1024px:text-16px">
                        Đây sẽ là phần cuối trong Khóa học:
                      </p>
                      {item.content.list.map((i, index) => {
                        return (
                          <div
                            className="flex items-center gap-4 mb-4"
                            key={index}
                          >
                            <Image src={flowerIcon} alt="" />
                            <p className="text-dark-100 text-18px font-normal 1024px:text-16px">
                              {i.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
