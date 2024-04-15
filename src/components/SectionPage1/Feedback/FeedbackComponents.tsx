import { Swiper, SwiperSlide } from "swiper/react";
import { customerPage1 } from '../HomePage';
import TitleComponent from '../Title/Title';
import Feedback from './Feedback';
// Import Swiper React components
import { Pagination } from "swiper/modules";
import Image from "next/image"
import "swiper/css";
import "swiper/css/pagination";
const FeedbackComponents = () => {
  return (
    <div>
        <section className="w-[95%] mx-auto mb-32 ">
        <TitleComponent title1="Khách hàng nói gì" />
        <div className="flex justify-between gap-4 flex-wrap  475px:hidden">
          {customerPage1.map((item, idx) => {
           
            return (
              <div className="bg-brown-400" key={idx}>
              <Feedback               
                  img={item.img}
                  rate={item.rate}
                  avatar={item.avatar}
                  customerName={item.customerName}
                  location={item.location}
                  quote={item.quote}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
        <div className="hidden 475px:block">
        <Swiper
            pagination={true}
            loop
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
          
              475: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
          {customerPage1.map((item,  idx) =>{
            return(

              <SwiperSlide  key={idx}>
              <div className="w-[32%] p-8 shadow-md rounded-[12px] bg-white mb-6 475px:w-full">
                <div>
                <div className="mb-[3rem]">
                    <Image src={item.img} alt="" />
                  </div>
                  <div className="mb-[2rem]">
                    <Image src={item.rate} alt="" />
                  </div>
                  <div className="flex justify-between items-center mb-6" >
                    <div className="flex items-center gap-6">
                      <div>
                        <Image src={item.avatar} alt="" />
                      </div>
                      <div>
                        <h2 className="text-24px text-dark-100 font-medium 1024px:text-18px">{item.customerName}</h2>
                        <p className="text-18px text-dark-200 font-normal 1024px:text-16px">{item.location}</p>
                      </div>
                    </div>
                    <div>
                      <Image src={item.quote} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="text-18px text-dark-200 font-normal 1024px:text-16px">{item.description}</p>
                  </div>
                </div>
                  <div>
                  
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          </Swiper>
        </div>
        
      </section>
    </div>
  )
}

export default FeedbackComponents


