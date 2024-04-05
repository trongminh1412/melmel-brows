import Image from 'next/image';

import googleIcon from '@/public/assets/images/header/google.png';
import rateIcon from '@/public/assets/images/header/rate.svg';

import style from './banner.module.scss';
import { motion } from "framer-motion";

type Props = {
  data: {
    title: string;
    subTitle: string;
  };
};
const Banner = (props: Props) => (
  <div className="section rounded-xl shadow bg-[url(/banner1.svg)] h-[55vh] bg-no-repeat mb-[8rem] bg-center 475px:bg-[url(/banner1mb.png)] 475px:h-[75vh]">
    <div className="w-full mx-auto mb-[8rem] max-w-screen-xl flex items-center h-full 1280:px-[4rem] 475px:items-start 475px:pt-[10rem]">
      <motion.div
        className={`${style.content}  md:col-6 lg:col-5 mt-5 p-4 text-center md:mt-0  md:text-left `}
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
        <h2 className={style.title}>{props.data.title}</h2>
        <p className={`${style.subtitle} mt-6 mb-8`}>{props.data.subTitle}</p>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className={style.excellent}>Excellent:</span>
            <span className="mx-4">
              <Image src={rateIcon} alt="" width={100} />
            </span>
          </div>
          <span>
            <Image src={googleIcon} alt="" />
          </span>
        </div>
      </motion.div>
      {/* <div className="md:col-5 lg:col-4">
        <Image
          className="w-full"
          src={banner}
          alt="call to action image"
          // width={325}
          height={206}
        />
      </div> */}
    </div>
  </div>
);

export { Banner };
