import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';

import flowerIcon from '@/public/assets/images/body/flower_icon.svg';

import style from './solution.module.scss';

type Props = {
  data: {
    title: string;
    subTitle: string;
    list: {
      label: string;
    }[];
  };
};
const Solution = (props: Props) => (
  <div className="section rounded-xl shadow">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-6'
      }
    >
      <div className={style.block}>
        <Row>
          <Col xs={24} md={24} lg={10}>
            <div className={style.subTitle}>{props.data.subTitle}</div>
            <div className={style.title}>{props.data.title}</div>
          </Col>
          <Col xs={24} md={24} lg={14}>
            <Row gutter={[8, 8]}>
              {props.data.list.map((item, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <Col span={2}>
                      <div className="tex-left justify-left flex">
                        <Image src={flowerIcon} alt="block" className="w-10" />
                      </div>
                    </Col>
                    <Col span={22}>
                      <div className={style.label}>{item.label}</div>
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export { Solution };
