import Image from "next/image";
// Import Swiper React components

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
type Props={
    img:any
     rate:any
      avatar:any
    customerName:string
    location:string
     quote:any
      description:string
}
const Feedback = (props: Props) => {
  return (
      <motion.div className="w-[32%] p-8 shadow-md rounded-[12px] bg-white mb-6" initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      exit="hide"
      variants={{
        hide: {
          opacity: 0,
          y: 200,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: .8,
            bounce: 0.4,
          },
        },
      }}>
       <div>
       <div className="mb-[3rem]">
          <Image src={props.img} alt="" />
        </div>
        <div className="mb-[2rem]">
          <Image src={props.rate} alt="" />
        </div>
        <div className="flex justify-between items-center mb-6" >
          <div className="flex items-center gap-6">
            <div>
              <Image src={props.avatar} alt="" />
            </div>
            <div>
              <h2 className="text-24px text-dark-100 font-medium 1024px:text-18px">{props.customerName}</h2>
              <p className="text-18px text-dark-200 font-normal 1024px:text-16px">{props.location}</p>
            </div>
          </div>
          <div>
            <Image src={props.quote} alt="" />
          </div>
        </div>
        <div>
          <p className="text-18px text-dark-200 font-normal 1024px:text-16px">{props.description}</p>
        </div>
       </div>
      </motion.div>
  );
};

export default Feedback;
