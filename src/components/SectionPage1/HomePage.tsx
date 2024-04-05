import rec from "@/public/assets/images/icon/rec.png";
import image1 from "@/public/assets/images/page1/image1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleComponent from "./Title/Title";
// Import Swiper React components
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import avatar from "@/public/assets/images/icon/avatar.png";
import quote from "@/public/assets/images/icon/quote.png";
import rate from "@/public/assets/images/icon/rate.png";
import bg1 from "@/public/assets/images/page1/bg2.png";
import bg2 from "@/public/assets/images/page1/bg3.png";
import card1 from "@/public/assets/images/page1/card1.png";
import card2 from "@/public/assets/images/page1/card2.png";
import card3 from "@/public/assets/images/page1/card3.png";
import card4 from "@/public/assets/images/page1/card4.png";
import card5 from "@/public/assets/images/page1/card5.png";
import card6 from "@/public/assets/images/page1/card6.png";
import Discount from "./Discount/Discount";
import FaqsComponent from "./Faqs/FaqsComponent";
import FeedbackComponents from "./Feedback/FeedbackComponents";
import TabComponent from "./TabComponent/Tab";
export const contentPage1 = [
  {
    img: rec,
    title: "Phục vụ mọi lứa tuổi",
  },
  {
    img: rec,
    title: "Công nghệ hiện đại, hạn chế đau rát, khó chịu",
  },
  {
    img: rec,
    title: "Sản phẩm đẹp, bền màu lên đến 3 năm",
  },
  {
    img: rec,
    title: "Không trổ xanh, trổ đỏ",
  },
  {
    img: rec,
    title: "Mực Organic đạt chuẩn Châu Âu",
  },
  {
    img: rec,
    title: "Chính sách Bảo Hành dài hạn",
  },
  {
    img: rec,
    title: "Phục vụ mọi lứa tuổi",
  },
];

export const customerPage1 = [
  {
    id: 1,
    img: card1,
    rate: rate,
    avatar: avatar,
    customerName: "Mai Phương Thảo",
    location: "Tp.Hồ Chí Minh",
    quote: quote,
    description:
      "Mỗi lần về Việt Nam, tôi đều phải ghé tới MelMel để xâm chân mày. chất lượng và cách các bạn làm dịch vụ cho mình rất chuyên nghiệp. mình mong sao MelMel Brows có chi nhánh",
  },
  {
    id: 2,
    img: card2,
    rate: rate,
    avatar: avatar,
    quote: quote,
    customerName: "Mai Phương Thảo",
    location: "Tp.Hồ Chí Minh",
    description:
      "Mỗi lần về Việt Nam, tôi đều phải ghé tới MelMel để xâm chân mày. chất lượng và cách các bạn làm dịch vụ cho mình rất chuyên nghiệp. mình mong sao MelMel Brows có chi nhánh",
  },
  {
    id: 3,
    img: card3,
    rate: rate,
    avatar: avatar,
    quote: quote,
    customerName: "Mai Phương Thảo",
    location: "Tp.Hồ Chí Minh",
    description:
      "Mỗi lần về Việt Nam, tôi đều phải ghé tới MelMel để xâm chân mày. chất lượng và cách các bạn làm dịch vụ cho mình rất chuyên nghiệp. mình mong sao MelMel Brows có chi nhánh",
  },
  {
    id: 4,
    img: card4,
    rate: rate,
    avatar: avatar,
    quote: quote,
    customerName: "Mai Phương Thảo",
    location: "Tp.Hồ Chí Minh",
    description:
      "Mỗi lần về Việt Nam, tôi đều phải ghé tới MelMel để xâm chân mày. chất lượng và cách các bạn làm dịch vụ cho mình rất chuyên nghiệp. mình mong sao MelMel Brows có chi nhánh",
  },
  {
    id: 5,
    img: card5,
    rate: rate,
    avatar: avatar,
    quote: quote,
    customerName: "Mai Phương Thảo",
    location: "Tp.Hồ Chí Minh",
    description:
      "Mỗi lần về Việt Nam, tôi đều phải ghé tới MelMel để xâm chân mày. chất lượng và cách các bạn làm dịch vụ cho mình rất chuyên nghiệp. mình mong sao MelMel Brows có chi nhánh",
  },
  {
    id: 6,
    img: card6,
    rate: rate,
    avatar: avatar,
    quote: quote,
    customerName: "Mai Phương Thảo",
    location: "Tp.Hồ Chí Minh",
    description:
      "Mỗi lần về Việt Nam, tôi đều phải ghé tới MelMel để xâm chân mày. chất lượng và cách các bạn làm dịch vụ cho mình rất chuyên nghiệp. mình mong sao MelMel Brows có chi nhánh",
  },

];

const HomePage1 = () => {
  return (
    <div>
      <section className="w-full mx-auto mb-16 max-w-screen-xl">
        <TitleComponent
          title1="Phun Mày - Giải pháp"
          title2="Làm đẹp của nàng hiện đại"
        />
        <div className="text-center">
          <Image src={image1} alt="" />
        </div>
      </section>
      <section className="w-full mx-auto mb-16 max-w-screen-xl">
        <TitleComponent title1="Các Kĩ Thuật Phun Xăm" title2="" />
        <div>
            <TabComponent />
        </div>
      </section>
      <section className="w-full mx-auto mb-32 max-w-screen-xl">
        <div>
          {" "}
          <TitleComponent
            title1="Kinh nghiệm - Uy tín - Chất lượng"
            title2=""
          />
        </div>
        <div className="mb-14">
          <p className="text-center text-20px font-normal text-dark-200">
            MelMel Brows là đơn vị phun xăm thẩm mỹ thành lập từ 2016 bởi Grand
            Master Lư Yến Thanh. Với thế mạnh về kỹ năng và kinh nghiệm trải dài
            đến tận An Giang, MelMel Brows chuyên xoá sửa và khắc phục ca khó
          </p>
        </div>

        <div>
          <Swiper
            // pagination={
            //     <Image src={pagina} alt="" />
            // }
            pagination={true}
            loop
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-between gap-4">
                <div className="w-[40%]">
                  <Image src={bg1} alt="" />
                </div>
                <div className="w-[40%]">
                  <Image src={bg2} alt="" />
                </div>
                <div className="w-[42%]">
                  {contentPage1.map((i, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-[1rem] mb-4"
                      >
                        <Image src={i.img} alt="" />
                        <h2 className="text-20px font-normal text-dark-100">
                          {i.title}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between gap-4">
                <div className="w-[40%]">
                  <Image src={bg1} alt="" />
                </div>
                <div className="w-[40%]">
                  <Image src={bg2} alt="" />
                </div>
                <div className="w-[42%]">
                  {contentPage1.map((i, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-[1rem] mb-4"
                      >
                        <Image src={i.img} alt="" />
                        <h2 className="text-20px font-normal text-dark-100">
                          {i.title}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div>
        <FeedbackComponents />
      </div>
       
      <section className="mb-16">
        <Discount />
      </section>
          <section>
            <FaqsComponent />
          </section>
      

    </div>
  );
};

export default HomePage1;