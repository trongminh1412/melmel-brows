import Image from 'next/image';

import banner from '@/public/assets/images/header/banner1.svg';
import googleIcon from '@/public/assets/images/header/google.png';
import rateIcon from '@/public/assets/images/header/rate.svg';

import style from './banner.module.scss';

type Props = {
  data: {
    title: string;
    subTitle: string;
  };
};
const Banner = (props: Props) => (
  <div className="section rounded-xl shadow">
    <div className="row relative mx-auto items-center">
      <div
        className={`${style.content}  md:col-6 lg:col-5 mt-5 p-4 text-center md:mt-0  md:text-left`}
      >
        <h2 className={style.title}>{props.data.title}</h2>
        <p className={`${style.subtitle} mt-6`}>{props.data.subTitle}</p>
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
      </div>
      <div className="md:col-5 lg:col-4">
        <Image
          className="w-full"
          src={banner}
          alt="call to action image"
          // width={325}
          height={206}
        />
      </div>
    </div>
  </div>
);

export { Banner };
