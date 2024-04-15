import arrowbot from "@/public/assets/images/icon/arrowbot.png";
import arrowtop from "@/public/assets/images/icon/arrowtop.png";
import { Collapse } from "antd";
import Image from "next/image";
import { useState } from "react";
import TitleComponent from "../Title/Title";
export const faqPage1 = [
  {
    id: 1,
    header: "Phun mày có bị trổ xanh, trổ đỏ không?",
    content:
      "MelMel Brows cam kết không trổ màu. Lí do trổ màu thường do đi kim quá sâu, mực kém chất lượng,... nhưng tại MelMel Brows, các yếu tố đó hoàn toàn được kiểm soát. Với mực Organic đào thải dần, sau một thời gian sẽ trả lại nền da nguyên thuỷ.",
      
  },
  {
    id: 2,
    header: "Phun mày có bị trổ xanh, trổ đỏ không?",
    content:
      "MelMel Brows cam kết không trổ màu. Lí do trổ màu thường do đi kim quá sâu, mực kém chất lượng,... nhưng tại MelMel Brows, các yếu tố đó hoàn toàn được kiểm soát. Với mực Organic đào thải dần, sau một thời gian sẽ trả lại nền da nguyên thuỷ.",
      
  },
  {
    id: 3,
    header: "Phun mày có bị trổ xanh, trổ đỏ không?",
    content:
      "MelMel Brows cam kết không trổ màu. Lí do trổ màu thường do đi kim quá sâu, mực kém chất lượng,... nhưng tại MelMel Brows, các yếu tố đó hoàn toàn được kiểm soát. Với mực Organic đào thải dần, sau một thời gian sẽ trả lại nền da nguyên thuỷ.",
      
  },
  {
    id: 4,
    header: "Phun mày có bị trổ xanh, trổ đỏ không?",
    content:
      "MelMel Brows cam kết không trổ màu. Lí do trổ màu thường do đi kim quá sâu, mực kém chất lượng,... nhưng tại MelMel Brows, các yếu tố đó hoàn toàn được kiểm soát. Với mực Organic đào thải dần, sau một thời gian sẽ trả lại nền da nguyên thuỷ.",
      
  },
  {
    id: 5,
    header: "Phun mày có bị trổ xanh, trổ đỏ không?",
    content:
      "MelMel Brows cam kết không trổ màu. Lí do trổ màu thường do đi kim quá sâu, mực kém chất lượng,... nhưng tại MelMel Brows, các yếu tố đó hoàn toàn được kiểm soát. Với mực Organic đào thải dần, sau một thời gian sẽ trả lại nền da nguyên thuỷ.",
      
  },
  {
    id: 6,
    header: "Phun mày có bị trổ xanh, trổ đỏ không?",
    content:
      "MelMel Brows cam kết không trổ màu. Lí do trổ màu thường do đi kim quá sâu, mực kém chất lượng,... nhưng tại MelMel Brows, các yếu tố đó hoàn toàn được kiểm soát. Với mực Organic đào thải dần, sau một thời gian sẽ trả lại nền da nguyên thuỷ.",
      
  },
];

const FaqsComponent = () => {
  const { Panel } = Collapse;
  const [isActive, setIsActive] = useState(false)

  return (
    <div >
      <section className="bg-[url(/background3.png)] bg-no-repeat pb-16  475px:px-[2rem]">
        <TitleComponent title1="Câu hỏi thường gặp"/>
        <div className="mx-auto w-[50%] mt-[10rem] bg-white p-12 rounded-3xl border-[1px] 1024px:mt-[7rem] 475px:w-full">
          {faqPage1.map((item,idx) => {
            return (
              <div className="bg-brown-400" key={idx}>
              <div >
                <Collapse
                  bordered={false}
                  defaultActiveKey={"1"}
                  expandIconPosition="end"
                  className="bg-brown-400"
                  onChange={() =>{
                    setIsActive(!isActive)
                  }}
                
                >
                  <Panel
                    className="pb-12 my-12 1024px:pb-6 1024px:my-6"
                    showArrow={false}
                    
                    header={
                      <div className="flex justify-between items-center">
                        <p className="text-24px font-medium text-brown-300 1024px:text-18px">
                          {item.header}
                          
                        </p>
                        <div>
                            {
                                isActive ?    <Image src={arrowtop} alt="" />  : <Image src={arrowbot} alt="" /> 
                            }
                    
                       
                        </div>
                 
                      </div>
                    }
                    key={idx}
                  >
                    <p className="text-20px font-normal text-dark-200 1024px:text-16px">
                   
                      {item.content}
                    </p>
                   
                  </Panel>
                </Collapse>
              </div>
            </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FaqsComponent;
