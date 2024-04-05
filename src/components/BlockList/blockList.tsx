import { Col, Row } from 'antd';
import Image from 'next/image';

import flowerIcon from '@/public/assets/images/body/flower_icon.svg';

import style from './blockList.module.scss';

type Props = {
  data: { label: string }[][];
};
const BlockList = (props: Props) => (
  <div className="section rounded-xl shadow">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-6'
      }
    >
      <Row gutter={[28, 28]}>
        {props.data.map((item, idx) => {
          return (
            <Col xs={24} md={24} lg={12} key={idx}>
              <div className="h-full rounded-lg border-2 border-solid border-[#E7E1D9] bg-[#FDFAF6] p-[25px]">
                {item.map((i, index) => {
                  return (
                    <Row className={style.title} key={index}>
                      <Col span={2}>
                        <div className="tex-left justify-left mb-8 flex">
                          <Image
                            src={flowerIcon}
                            alt="block"
                            className="w-10"
                          />
                        </div>
                      </Col>
                      <Col span={22}>{i.label}</Col>
                    </Row>
                  );
                })}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>

    <div></div>
  </div>
);

export { BlockList };
