import flowerIcon from '@/public/assets/images/body/flower_icon.svg';
import { Col, Row, Table } from 'antd';
import Image from 'next/image';
import TitleComponent from '../SectionPage1/Title/Title';
import { motion } from 'framer-motion';

type Props = {
  data: {
    title: string;
    list: {
        label: string;
    }[][];
  };
  dataTable: {
    columns: any[];
    dataSource: any[];
  } | null;
};

const BlockList = (props: Props) => (
  <div className="section rounded-xl">
    <div
      className={
        'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4 py-24'
      }
    >
      <TitleComponent title2={props.data.title}/>
      <Row gutter={[28, 28]}>
        {props.data.list.map((item, idx) => {
          return (
            <Col xs={24} md={24} lg={12} key={idx}>
              <motion.div className="h-full rounded-lg border-2 border-solid border-[#E7E1D9] bg-[#FDFAF6] p-[25px]"
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  exit="hide"
                  variants={{
                    hide: {
                      opacity: 0,
                      y: 100,
                    },
                    show: {
                      opacity: 1,
                      y: 1,
                      transition: {
                        duration: 0.7,
                        bounce: 0.4,
                      },
                    },
                  }}              
              >
                {item.map((i, index) => {
                  return (
                    <Row className="text-3xl text-left font-bold text-[#423F3A] mb-12" key={index}>
                      <Col span={2}>
                        <div className="tex-left justify-left mb-8 flex">
                          <Image
                            src={flowerIcon}
                            alt="block"
                          />
                        </div>
                      </Col>
                      <Col span={22}>{i.label}</Col>
                    </Row>
                  );
                })}
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </div>

    {!!props.dataTable && (
      <div
        className={
          'relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4 py-6'
        }
      >
        <div className="text-[#66491C] font-bold text-4xl mb-8">
          LỊCH HỌC THÁNG 04.2024
        </div>
        <Table
          columns={props.dataTable?.columns}
          dataSource={props.dataTable?.dataSource}
          pagination={false}
          bordered
          style={{ width: '100%', overflowX:"auto" }}
          rowClassName="text-center text-[#423f3a] font-normal"
        />
      </div>
    )}
  </div>
);

export { BlockList };
