import banner from "@/public/assets/images/edu/banner.png";
import card1 from "@/public/assets/images/edu/card1.png";
import card2 from "@/public/assets/images/edu/card2.png";
import card3 from "@/public/assets/images/edu/card3.png";
import arrw from "@/public/assets/images/icon/arrow-white.png";
import arrowRight from "@/public/assets/images/icon/arwRight.png";
import arrowLeft from "@/public/assets/images/icon/arwLeft.png";
import book from "@/public/assets/images/icon/book.png";
import time from "@/public/assets/images/icon/clock.png";
import grad from "@/public/assets/images/icon/grad.png";
import poly from "@/public/assets/images/icon/poly.png";
import { Carousel } from "antd";
import Image from "next/image";
import Discount from "../SectionPage1/Discount/Discount";
import FaqsComponent from "../SectionPage1/Faqs/FaqsComponent";
import FeedbackComponents from "../SectionPage1/Feedback/FeedbackComponents";
import TitleComponent from "../SectionPage1/Title/Title";
import { Footer } from "../footer/footer";
import Navbar from "../navigation/Navbar";
import bg4 from "@/public/assets/images/edu/background4.png"
import { motion } from "framer-motion";
import bgmb from "@/public/assets/images/edu/bgmb.png"
export const blogEdu = [
  {
    id: 1,
    title: "Khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card1,
  },
  {
    id: 2,
    title: "Khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card2,
  },
  {
    id: 3,
    title: "Khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card1,
  },
  {
    id: 4,
    title: "Khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card1,
  },
  {
    id: 5,
    title: "Khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card1,
  },
];
export const opening = [
  [
    {
      id: 1,
      title: "Học tổng hợp các Nền tảng tất cả kỹ thuật Mày, Môi, Mí",
    },
    {
      id: 2,
      title: "Học Coaching cầm tay chỉ việc 1 kèm 1 với Master",
    },
    {
      id: 3,
      title:
        "Học theo nhóm 10 Học viên/ Khóa từ Cơ bản đến Nâng cao từng Kỹ thuật",
    },
    {
      id: 4,
      title:
        "Học Coaching cầm tay chỉ việc 1 kèm 1 với Grand Master Lư Yến Thanh",
    },
  ],
  [
    {
      id: 5,
      title: "Tương tác trực tiếp cùng chuyên gia",
    },
    {
      id: 6,
      title: "Học không giới hạn số khoá học và kỹ năng",
    },
    {
      id: 7,
      title: "Tham gia cộng đồng phát triển và kết nối chuyên gia",
    },
    {
      id: 8,
      title:
        "Giảng viên là các chuyên gia thực chiến có bằng cấp và đạt giải thưởng trong các Sự kiện danh giá trong nghành Phun xăm thẩm mỹ",
    },
  ],
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section >
        <div className="object-cover aspect-auto">
          <Image src={banner} alt="" />
        </div>
      </section>
      <motion.section className="relative overflow-hidden" initial="hide"
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
                    y: 0,
                    transition: {
                      duration: 1.2,
                      bounce: 0.4,
                    },
                  },
                }}>
        <div className="475px:hidden">
          <Image src={bg4} alt="" />
        </div>
        <div className="hidden 475px:block">
          <Image src={bgmb} alt="" />
        </div>
        <div className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem] absolute top-[20%] left-[50%] translate-x-[-50%]">
          <h2 className="text-center text-32px font-bold text-brown-100 mb-4 1280:text-24px 1024px:text-18px">
          NƠI KIẾN TẠO SỰ NGHIỆP PHUN XĂM THẨM MỸ
          </h2>
          <p className="text-center text-20px text-dark-100 1024px:text-14px">MelMel Brows Academy thành lập từ 2016 bởi Grand Master Lư Yến Thanh đã trở thành một địa chỉ đáng tin cậy đào tạo và dịch vụ phun xăm thẩm mỹ, chủ yếu tập trung vào những đường nét trên gương mặt là Mày – Môi – Mí</p>
        </div>
      </motion.section>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem]">
        <TitleComponent title1="THÔNG TIN KHÓA HỌC" />
        <div>
          <p className="text-center text-20px text-dark-400 mb-6 1024px:text-18px">
            MelMel Brows là đơn vị phun xăm thẩm mỹ thành lập từ 2016 bởi Grand
            Master Lư Yến Thanh. Với thế mạnh về kỹ năng và kinh nghiệm trải dài
            đến tận An Giang, MelMel Brows chuyên xoá sửa và khắc phục ca khó
          </p>
        </div>
      </section>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl relative 1280:px-[4rem] 1024px:mb-[3rem]">
        <h2 className="text-28px text-dark-100 font-bold mb-8 1280:text-24px 475px:text-18px">
          Các khóa học tiêu biểu của MelMel Brow
        </h2>

        <Carousel
          className="justify-between!important gap-[10rem!important]"
          autoplay={true}
          autoplaySpeed={5000}
          rows={1}
          slidesToShow={3}
          slidesToScroll={1}
          infinite={true}
          arrows={true}
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "40"
              },
            },
          ]}
          nextArrow={
            <div className="next-carou">
              <Image alt="next" src={arrowRight} />
            </div>
          }
          prevArrow={
            <div className="next-carou">
              <Image alt="prev" src={arrowLeft} />
            </div>
          }
          dots={true}
          swipeToSlide={true}
          draggable
        >
          {blogEdu.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-dark-500 border ml-auto w-[96%!important]"
              >
                <div>
                  <Image src={item.cover} alt="" />
                </div>
                <div className="p-8">
                  <div>
                    <h2 className="text-24px font-bold text-dark-100 1280:text-20px 1024px:text-18px 475px:text-16px">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={time} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Thời lượng: <strong>{item.time}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={book} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Kỹ thuật dạy: <strong>{item.tech}</strong>{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <Image src={grad} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Bằng cấp: <strong>{item.gradi}</strong>{" "}
                    </p>
                  </div>
                  <div>
                    <button className="flex items-center gap-4 justify-center bg-brown-600 text-white text-18px font-bold w-full rounded-lg h-[48px] 1024px:text-14px">
                      Đăng ký ngay
                      <Image src={arrw} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem] 1024px:mb-[3rem]">
        <h2 className="text-28px text-dark-100 font-bold mb-8 1280:text-24px 475px:text-18px">
          Các khóa 1:1 Nền tảng PXTM (Grand Master + Master)
        </h2>
        <Carousel
          autoplay={true}
          autoplaySpeed={5000}
          rows={1}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={true}
          arrows={true}
          nextArrow={<Image alt="next" src={arrowRight} />}
          prevArrow={<Image alt="prev" src={arrowLeft} />}
          dots={true}
          swipeToSlide={true}
          draggable
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "40"
              },
            },
          ]}
        >
          {blogEdu.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-dark-500 border w-[96%!important]"
              >
                <div>
                  <Image src={item.cover} alt="" />
                </div>
                <div className="p-8">
                  <div>
                    <h2 className="text-24px font-bold text-dark-100 1280:text-20px 1024px:text-18px 475px:text-16px">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={time} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Thời lượng: <strong>{item.time}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={book} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Kỹ thuật dạy: <strong>{item.tech}</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem] 1024px:mb-[3rem]">
        <h2 className="text-28px text-dark-100 font-bold mb-8 1280:text-24px 475px:text-18px">
          Các khóa 1:1 Master class (Grand master Lư Yến Thanh)
        </h2>
        <Carousel
          autoplay={true}
          autoplaySpeed={5000}
          rows={1}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={true}
          arrows={true}
          nextArrow={<Image alt="next" src={arrowRight} />}
          prevArrow={<Image alt="prev" src={arrowLeft} />}
          dots={true}
          swipeToSlide={true}
          dotPosition="bottom"
          draggable
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "40"
              },
            },
          ]}
        >
          {blogEdu.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-dark-500 border w-[96%!important]"
              >
                <div>
                  <Image src={item.cover} alt="" />
                </div>
                <div className="p-8">
                  <div>
                    <h2 className="text-24px font-bold text-dark-100  1280:text-20px  1024px:text-18px 475px:text-16px">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={time} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Thời lượng: <strong>{item.time}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={book} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Kỹ thuật dạy: <strong>{item.tech}</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem] 1024px:mb-[3rem]">
        <h2 className="text-28px text-dark-100 font-bold mb-8 1280:text-24px 475px:text-18px">
          Các khóa 1:1 Master class (Grand master Lư Yến Thanh)
        </h2>

        <Carousel
          autoplay={true}
          autoplaySpeed={5000}
          rows={1}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={true}
          arrows={true}
          nextArrow={<Image alt="next" src={arrowRight} />}
          prevArrow={<Image alt="prev" src={arrowLeft} />}
          dots={true}
          swipeToSlide={true}
          draggable
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "40"
              },
            },
          ]}
        >
          {blogEdu.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-dark-500 border w-[96%!important]"
              >
                <div>
                  <Image src={item.cover} alt="" />
                </div>
                <div className="p-8">
                  <div>
                    <h2 className="text-24px font-bold text-dark-100  1280:text-20px 1024px:text-18px 475px:text-16px">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={time} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Thời lượng: <strong>{item.time}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={book} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Kỹ thuật dạy: <strong>{item.tech}</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl 1280:px-[4rem] 1024px:mb-[3rem]">
        <h2 className="text-28px text-dark-100 font-bold mb-8 1280:text-24px 475px:text-18px">
          Các khóa nền tảng chuyên đề phun xăm thẩm mỹ học nhóm
        </h2>

        <Carousel
          autoplay={true}
          autoplaySpeed={5000}
          rows={1}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={true}
          arrows={true}
          nextArrow={<Image alt="next" src={arrowRight} />}
          prevArrow={<Image alt="prev" src={arrowLeft} />}
          dots={true}
          swipeToSlide={true}
          draggable
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "40"
              },
            },
          ]}
        >
          {blogEdu.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-dark-500 border w-[96%!important]"
              >
                <div>
                  <Image src={item.cover} alt="" />
                </div>
                <div className="p-8">
                  <div>
                    <h2 className="text-24px font-bold text-dark-100 1280:text-20px 1024px:text-18px 475px:text-16px">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={time} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Thời lượng: <strong>{item.time}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={book} alt="" />
                    <p className="text-16px text-gray-1100 1024px:text-14px">
                      Kỹ thuật dạy: <strong>{item.tech}</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>

      <section className="1280:px-[4rem] w-full mx-auto mb-[8rem] max-w-screen-xl  1024px:mb-[3rem]">
      <div>
            <TitleComponent title1="ĐỘI NGŨ GIẢNG VIÊN" />
            <p className="text-center text-20px text-dark-400 mb-[8rem]">
              MelMel Brows tự hào là trung tâm đào tạo có chất lượng đào tạo
              nghề Phun xăm Thẩm mỹ chất lượng nhất hiện nay sở hữu đội ngũ
              Giảng viên có “tâm” và “tầm” trong ngành với hơn 16 năm kinh
              nghiệm trong giảng dạy và đào tạo.
            </p>
          </div>
        <div className="w-full mx-auto mb-[8rem] max-w-screen-xl 475px:hidden">
          
          <div className="flex justify-between gap-4">
            <div className="relative overflow-hidden h-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden 475px:block">
          <Carousel
            autoplay={true}
            autoplaySpeed={5000}
            rows={1}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={true}
            arrows={false}
            nextArrow={<Image alt="next" src={arrowRight} />}
            prevArrow={<Image alt="prev" src={arrowRight} />}
            dots={true}
            swipeToSlide={true}
            centerMode
            centerPadding="40"
            draggable
          >
            <div className="relative overflow-hidden h-full w-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full w-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full w-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full w-full">
              <div>
                <Image src={card3} alt="" />
              </div>
              <div className="absolute bottom-0">
                <Image src={poly} alt="" />
              </div>
              <div className="absolute z-10 bottom-[2%] left-[10%]">
                <h2 className="text-20px text-white font-medium">
                  Lư Yến Thanh
                </h2>
                <p className="text-16px font-normal text-gray-1000">
                  Grand Master
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <div>
        <FeedbackComponents />
      </div>
      <section className="mb-[8rem]">
        <Discount />
      </section>
      <section>
        <FaqsComponent />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
