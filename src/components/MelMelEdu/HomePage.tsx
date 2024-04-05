import Image from "next/image";
import banner from "@/public/assets/images/edu/banner.png";
import card1 from "@/public/assets/images/edu/card1.png";
import card2 from "@/public/assets/images/edu/card2.png";
import card3 from "@/public/assets/images/edu/card3.png";
import arrw from "@/public/assets/images/icon/arrow-white.png";
import arrowRight from "@/public/assets/images/icon/arwRight.png";
import book from "@/public/assets/images/icon/book.png";
import time from "@/public/assets/images/icon/clock.png";
import grad from "@/public/assets/images/icon/grad.png";
import poly from "@/public/assets/images/icon/poly.png";
import { Carousel } from "antd";
import Discount from "../SectionPage1/Discount/Discount";
import FaqsComponent from "../SectionPage1/Faqs/FaqsComponent";
import Feedback from "../SectionPage1/Feedback/Feedback";
import { customerPage1 } from "../SectionPage1/HomePage";
import TitleComponent from "../SectionPage1/Title/Title";
import { Footer } from "../footer/footer";
import Navbar from "../navigation/Navbar";
export const blogEdu = [
  {
    id: 1,
    title: "khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card1,
  },
  {
    id: 2,
    title: "khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card2,
  },
  {
    id: 3,
    title: "khóa tổng hợp nền tảng phun xăm thẩm mỹ",
    time: "15 buổi",
    tech: "Phun xăm chuyên sâu",
    gradi: "M-REMOVAL MelMel Brows",
    cover: card1,
  },
  {
    id: 4,
    title: "khóa tổng hợp nền tảng phun xăm thẩm mỹ",
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
      <section className="mb-16">
        <div className="object-cover aspect-auto">
          <Image src={banner} alt="" />
        </div>
      </section>
      <section className="w-full mx-auto mb-16 max-w-screen-xl ">
        <TitleComponent title1="THÔNG TIN KHÓA HỌC" />
        <div>
          <p className="text-center text-20px text-dark-400 mb-6">``
            MelMel Brows là đơn vị phun xăm thẩm mỹ thành lập từ 2016 bởi Grand
            Master Lư Yến Thanh. Với thế mạnh về kỹ năng và kinh nghiệm trải dài
            đến tận An Giang, MelMel Brows chuyên xoá sửa và khắc phục ca khó
          </p>
        </div>
        <div></div>
      </section>
      <section className="w-full mx-auto mb-16 max-w-screen-xl ">
        <div>
            <div>
                <h2>Các khóa học tiêu biểu của MelMel Brow</h2>
            </div>
            
        </div>
      <Carousel
      className="justify-between!important gap-[10rem!important]"
      autoplay={true}
      autoplaySpeed={5000}
      rows={1}
      slidesToShow={3}
      slidesToScroll={1}
      infinite={true}
      arrows={true}
      nextArrow={<Image alt="next" src={arrowRight} />}
      prevArrow={<Image alt="prev" src={arrowRight} />}
      dots={true}
      swipeToSlide={true}
      draggable
    >
        {blogEdu.map((item, idx) =>{
            return(
                <div key={idx} className="border-dark-500 border ml-auto w-[96%!important]">
                    <div>
                        <Image src={item.cover} alt=""/>
                    </div>
                   <div className="p-8">
                   <div>
                        <h2 className="text-24px font-bold text-dark-100">{item.title}</h2>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={time} alt="" />
                        <p className="text-16px text-gray-1100">Thời lượng: <strong>{item.time}</strong></p>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={book} alt="" />
                        <p className="text-16px text-gray-1100">Kỹ thuật dạy: <strong>{item.tech}</strong> </p>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        <Image src={grad} alt="" />
                        <p className="text-16px text-gray-1100">Bằng cấp: <strong>{item.gradi}</strong> </p>
                    </div>
                    <div>
                        <button className="flex items-center gap-4 justify-center bg-brown-600 text-white text-18px font-bold w-full rounded-lg h-[48px]">Đăng ký ngay 

                            <Image src={arrw} alt="" />
                        </button>
                    </div>
                   </div>
                </div>
            )
        })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-16 max-w-screen-xl ">
        <div>
            <div>
                <h2>Các khóa học tiêu biểu của MelMel Brow</h2>
            </div>
            
        </div>
      <Carousel
      autoplay={true}
      autoplaySpeed={5000}
      rows={1}
      slidesToShow={3}
      slidesToScroll={1}
      infinite={true}
      arrows={true}
      nextArrow={<Image alt="next" src={arrowRight} />}
      prevArrow={<Image alt="prev" src={arrowRight} />}
      dots={true}
      swipeToSlide={true}
      draggable
    >
        {blogEdu.map((item, idx) =>{
            return(
                <div key={idx} className="border-dark-500 border ">
                    <div>
                        <Image src={item.cover} alt=""/>
                    </div>
                   <div className="p-8">
                   <div>
                        <h2 className="text-24px font-bold text-dark-100">{item.title}</h2>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={time} alt="" />
                        <p className="text-16px text-gray-1100">Thời lượng: <strong>{item.time}</strong></p>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={book} alt="" />
                        <p className="text-16px text-gray-1100">Kỹ thuật dạy: <strong>{item.tech}</strong> </p>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        <Image src={grad} alt="" />
                        <p className="text-16px text-gray-1100">Bằng cấp: <strong>{item.gradi}</strong> </p>
                    </div>
                    <div>
                        <button className="flex items-center gap-4 justify-center bg-brown-600 text-white text-18px font-bold w-full rounded-lg h-[48px]">Đăng ký ngay 

                            <Image src={arrw} alt="" />
                        </button>
                    </div>
                   </div>
                </div>
            )
        })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-16 max-w-screen-xl ">
        <div>
            <div>
                <h2>Các khóa học tiêu biểu của MelMel Brow</h2>
            </div>
            
        </div>
      <Carousel
      autoplay={true}
      autoplaySpeed={5000}
      rows={1}
      slidesToShow={3}
      slidesToScroll={1}
      infinite={true}
      arrows={true}
      nextArrow={<Image alt="next" src={arrowRight} />}
      prevArrow={<Image alt="prev" src={arrowRight} />}
      dots={true}
      
      swipeToSlide={true}
      dotPosition="bottom"
      draggable
    >
        {blogEdu.map((item, idx) =>{
            return(
                <div key={idx} className="border-dark-500 border">
                    <div>
                        <Image src={item.cover} alt=""/>
                    </div>
                   <div className="p-8">
                   <div>
                        <h2 className="text-24px font-bold text-dark-100">{item.title}</h2>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={time} alt="" />
                        <p className="text-16px text-gray-1100">Thời lượng: <strong>{item.time}</strong></p>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={book} alt="" />
                        <p className="text-16px text-gray-1100">Kỹ thuật dạy: <strong>{item.tech}</strong> </p>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        <Image src={grad} alt="" />
                        <p className="text-16px text-gray-1100">Bằng cấp: <strong>{item.gradi}</strong> </p>
                    </div>
                    <div>
                        <button className="flex items-center gap-4 justify-center bg-brown-600 text-white text-18px font-bold w-full rounded-lg h-[48px]">Đăng ký ngay 

                            <Image src={arrw} alt="" />
                        </button>
                    </div>
                   </div>
                </div>
            )
        })}
        </Carousel>
      </section>
      <section className="w-full mx-auto mb-16 max-w-screen-xl ">
        <div>
            <div>
                <h2>Các khóa học tiêu biểu của MelMel Brow</h2>
            </div>
            
        </div>
      <Carousel
      autoplay={true}
      autoplaySpeed={5000}
      rows={1}
      slidesToShow={3}
      slidesToScroll={1}
      infinite={true}
      arrows={true}
      nextArrow={<Image alt="next" src={arrowRight} />}
      prevArrow={<Image alt="prev" src={arrowRight} />}
      dots={true}
      swipeToSlide={true}
      draggable
    >
        {blogEdu.map((item, idx) =>{
            return(
                <div key={idx} className="border-dark-500 border">
                    <div>
                        <Image src={item.cover} alt=""/>
                    </div>
                   <div className="p-8">
                   <div>
                        <h2 className="text-24px font-bold text-dark-100">{item.title}</h2>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={time} alt="" />
                        <p className="text-16px text-gray-1100">Thời lượng: <strong>{item.time}</strong></p>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={book} alt="" />
                        <p className="text-16px text-gray-1100">Kỹ thuật dạy: <strong>{item.tech}</strong> </p>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        <Image src={grad} alt="" />
                        <p className="text-16px text-gray-1100">Bằng cấp: <strong>{item.gradi}</strong> </p>
                    </div>
                    <div>
                        <button className="flex items-center gap-4 justify-center bg-brown-600 text-white text-18px font-bold w-full rounded-lg h-[48px]">Đăng ký ngay 

                            <Image src={arrw} alt="" />
                        </button>
                    </div>
                   </div>
                </div>
            )
        })}
        </Carousel>
      </section>
      
      <section className="">
        <div className="w-full mx-auto mb-16 max-w-screen-xl pb-60">
          <div>
            <TitleComponent title1="ĐỘI NGŨ GIẢNG VIÊN" />
            <p className="text-center text-20px text-dark-400 mb-16">
              MelMel Brows tự hào là trung tâm đào tạo có chất lượng đào tạo
              nghề Phun xăm Thẩm mỹ chất lượng nhất hiện nay sở hữu đội ngũ
              Giảng viên có “tâm” và “tầm” trong ngành với hơn 16 năm kinh
              nghiệm trong giảng dạy và đào tạo.
            </p>
          </div>
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
      </section>
      <section className="w-[95%] mx-auto mb-32 ">
        <TitleComponent title1="CẢM NHẬN CỦA HỌC VIÊN" />
        <div className="flex justify-between gap-4 flex-wrap">
          {customerPage1.map((item, idx) => {
            return (
              <Feedback
                key={idx}
                img={item.img}
                rate={item.rate}
                avatar={item.avatar}
                customerName={item.customerName}
                location={item.location}
                quote={item.quote}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      <section className="mb-16">
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
