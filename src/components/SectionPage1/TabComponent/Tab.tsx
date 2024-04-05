import { Tabs } from "antd";
import { useState } from "react";
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
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const TabComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();

  return (
    <div>
      <div className="card-container">
        <Tabs defaultActiveKey="1" animated={true}>
          <Tabs.TabPane tab="Sợi Melstrokes" key="1" className=" bg-brown-500 p-8" >
            <div className="flex justify-between gap-12">
                <div className="w-[45%]">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <Image src={slide1} alt="" />
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
                      <Image src={slide1} alt="" />
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

                </div>
                
              <div className="w-[50%]">
                <p className="text-16px text-dark-300 font-normal tracking-wide mb-2">PHUN MÀY</p>
                <h2 className="text-7xl text-dark-100 font-bold mb-4">Sợi Melstrokes</h2>
                <div>
                  <p className="text-dark-100 text-20px mb-2">Dành cho vẻ đẹp tự nhiên </p>
                  <p className="text-dark-100 text-20px mb-4">
Kỹ thuật tạo sợi với cấu trúc mềm mại, uyển chuyển như lông mày tự nhiên. Giữ nét sợi và đẹp bền sau bong</p>
        <p className="text-dark-100 text-20px font-medium">Lợi ích</p>
        <div className="flex items-center gap-4 mb-4">
          <Image src={checkbox} alt="" />
          <p className="text-dark-100 text-18px font-normal ">Khắc phục chân mày thưa, nhạt, không rõ dáng, không cân đối</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Image src={checkbox} alt="" />
          <p className="text-dark-100 text-18px font-normal">Tạo sợi với cấu trúc mềm mại, uyển chuyển, tự nhiên</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Image src={checkbox} alt="" />
          <p className="text-dark-100 text-18px font-normal">Tạo dáng chân mày hài hòa, tôn lên đường nét khuôn mặt</p>
        </div>
        <p className="text-dark-100 text-20px font-medium">Ứng dụng</p>
        <div className="flex items-center gap-4 mb-4">
          <Image src={checkbox} alt="" />
          <p className="text-dark-100 text-18px font-normal">Người có lông mày thưa, nhạt, không rõ dáng</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Image src={checkbox} alt="" />
          <p className="text-dark-100 text-18px font-normal">Nhiều loại da (trừ da sẹo lồi, da bị bào mòn do mỹ phẩm, lỗ chân lông to)</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Image src={checkbox} alt="" />
          <p className="text-dark-100 text-18px font-normal">Có thể tùy chỉnh nhiều kiểu dáng lông mày khác nhau</p>
        </div>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab=" Ombre" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Shadow Brows" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
          <Tabs.TabPane tab="Điêu Khắc" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
