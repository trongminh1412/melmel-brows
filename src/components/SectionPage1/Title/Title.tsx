import line from '@/public/assets/images/icon/line.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TitleComponent = (props: any) => {
  return (
    <div>
      <section className="w-full mx-auto mb-[8rem] max-w-screen-xl 1024px:mb-[4rem]">
        <motion.div
          className="relative"
          initial="hide"
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
                duration: 0.8,
                bounce: 0.7,
              },
            },
          }}
        >
          <h2 className="text-7xl font-bold text-dark-100 text-center 1280:text-42px 1024px:text-32px 475px:text-24px">
            {props.title1}{' '}
          </h2>
          <h2 className="text-7xl font-bold text-dark-100 text-center 1280:text-42px 1024px:text-32px 475px:text-24px">
            {props.title2}
          </h2>
          <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] ">
            <Image src={line} alt="" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TitleComponent;
