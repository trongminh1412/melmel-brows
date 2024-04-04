import Image from 'next/image';
import Link from 'next/link';

import banner from '@/public/assets/images/banner1.png';

const Banner = () => (
  <div className="section container rounded-xl shadow">
    <div className="row  mx-auto items-center justify-center">
      <div className="md:col-5 lg:col-4">
        <Image
          className="w-full"
          src={banner}
          alt="call to action image"
          // width={325}
          height={206}
        />
      </div>
      <div className="md:col-6 lg:col-5 mt-5 text-center md:mt-0 md:text-left">
        <h2></h2>
        <p className="mt-6"></p>
        <Link className="btn btn-primary mt-4" href={'#'} rel={''}></Link>
      </div>
    </div>
  </div>
);

export { Banner };
