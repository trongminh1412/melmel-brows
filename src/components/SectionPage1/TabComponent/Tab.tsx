import { Tabs } from "antd";
import React, { useState } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import checkbox from "@/public/assets/images/icon/Checkbox.png";
import slide1 from "@/public/assets/images/page1/slider1.png";
import slide2 from "@/public/assets/images/page1/slider2.png";
import slide3 from "@/public/assets/images/page1/slider3.png";
import slide4 from "@/public/assets/images/page1/slider4.png";
import { motion } from "framer-motion";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

type Props={
  data:{
    label:string,
    subLabel:string,
    content:{
      title:string,
      subTitle:string,
      list:{
        title:string
        dataList:{label:string}[]
      }[],
    }
  }[]
}

const TabComponent = (props:Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [key, setKey] = useState("1")
  console.log(key);
  
  return (
    <div>
      <div className="card-container">
        <Tabs   
          tabBarStyle={{color: "#94774A"}} 
          defaultActiveKey={key} 
          animated={true} 
          onChange={(val) => { setKey(val)}}
        >
          {props.data.map((item,idx)=>{
            return(
              <Tabs.TabPane 
                  tab={
                    key === `${idx}` ?     
                    <div className="text-24px text-brown-600 font-bold  bg-brown-500 py-[1.5rem] px-[2rem] rounded-[4px] w-[28rem] flex justify-center 1024px:text-18px">
                   {item.label}
                    </div>:     
                    <div className="text-24px text-dark-600 font-bold  bg-white py-[1.5rem] px-[2rem] rounded-[4px] w-[28rem] flex justify-center 1024px:text-18px">
                     {item.label}
                    </div>          
                  }
                  key={idx}
                  className="bg-brown-500 p-8"
            >
               <div className="flex justify-between gap-12 475px:flex-col">
              <motion.div className="w-[45%] 475px:w-full" initial="hide"
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
                }} >
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={false}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
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

                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image src={slide2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={slide2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={slide3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={slide4} alt="" />
                  </SwiperSlide>
                </Swiper>
              </motion.div>

              <motion.div className="w-[50%] 475px:w-full " initial="hide"
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
                }}>
                <p className="text-16px text-dark-300 font-normal tracking-wide mb-2">
                  {item.subLabel}
                </p>
                <h2 className="text-7xl text-dark-100 font-bold mb-4 1024px:text-32px">
                  {item.label}
                </h2>
                <div className="">
                  <p className="text-dark-100 text-20px mb-2 1024px:text-16px">
                   {item.content.title}
                  </p>
                  <p className="text-dark-100 text-20px mb-4 1024px:text-16px">
                    {item.content.subTitle}
                  </p>
                  {item.content.list.map((i,index)=>{
                    return(
                      <React.Fragment key={index}>
                          <p className="text-dark-100 text-20px font-medium mb-2 1024px:text-16px">{i.title}</p>
                          {i.dataList.map((e,keys)=>{
                            return(
                              <div className="flex items-center gap-4 mb-4" key={keys}>
                                <Image src={checkbox} alt="" />
                                <p className="text-dark-100 text-18px font-normal 1024px:text-16px">
                                 {e.label}
                                </p>
                              </div>
                            )
                          })}
                          <div className="line">

                          </div>
                      </React.Fragment>
                    )
                  })}
                </div>
              </motion.div>
            </div>
            </Tabs.TabPane>
            )
          })}          
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
