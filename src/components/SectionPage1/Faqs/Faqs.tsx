import arrowbot from "@/public/assets/images/icon/arrowbot.png";
import arrowtop from "@/public/assets/images/icon/arrowtop.png";
import { Collapse } from "antd";
import Image from "next/image";
import { useState } from "react";



const Faqs = (props: any) => {
    const [isActive, setIsActive] = useState(false)

  const { Panel } = Collapse;
  return (
    <div className="bg-brown-400" key={props.key}>
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
                  {props.header}
                  
                </p>
                <div>
                    {
                        isActive ?    <Image src={arrowtop} alt="" />  : <Image src={arrowbot} alt="" /> 
                    }
            
               
                </div>
         
              </div>
            }
            key={props.key}
          >
            <p className="text-20px font-normal text-dark-200 1024px:text-16px">
           
              {props.content}
            </p>
           
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Faqs;
