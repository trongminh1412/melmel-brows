import { Col, Row } from 'antd';
import Image from 'next/image';

import AttractiveImg from '@/public/assets/images/body/attractive_img.svg';

import TitleComponent from '../SectionPage1/Title/Title';

type Props = {
  data: {
    title:string;
    list:{
      title: string;
      subTitle: string;
      icon: any;
    }[];
  }
};
const Attractiveness = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4 py-24'
      }
    >
      <TitleComponent title2={props.data.title}/>
      <Row>
        <Col xs={24} md={24} lg={15}>
          <Row gutter={[28, 28]} className='h-full'>
            {props.data.list.map((item, idx) => {
              return (
                <Col xs={12} md={12} lg={12} key={idx}>
                  <div className="text-left">
                    <div className="tex-left justify-left mb-8 flex">
                      <Image src={item.icon} alt="attractive" />
                    </div>
                    <div className="text-3xl text-left font-bold text-[#423F3A]">{item.title}</div>
                    <div
                      className="text-2xl text-left font-normal text-[#423F3A]"
                      dangerouslySetInnerHTML={{ __html: item.subTitle }}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs={24} md={24} lg={9}>
          <div>
            <Image src={AttractiveImg} alt="attractive" className="w-full" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export { Attractiveness };
