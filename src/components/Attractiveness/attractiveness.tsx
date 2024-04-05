import { Col, Row } from 'antd';
import Image from 'next/image';

import AttractiveImg from '@/public/assets/images/body/attractive_img.svg';

import style from './attractiveness.module.scss';

type Props = {
  data: {
    title: string;
    subTitle: string;
    icon: any;
  }[];
};
const Attractiveness = (props: Props) => (
  <div className="section rounded-xl shadow">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-6'
      }
    >
      <Row>
        <Col xs={24} md={24} lg={15}>
          <Row gutter={[28, 28]}>
            {props.data.map((item, idx) => {
              return (
                <Col xs={12} md={12} lg={12} key={idx}>
                  <div className="text-left">
                    <div className="tex-left justify-left mb-8 flex">
                      <Image src={item.icon} alt="attractive" />
                    </div>
                    <div className={style.title}>{item.title}</div>
                    <div
                      className={style.subTitle}
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
