import React from "react";
import Image from "next/image";

const Feedback = (props: any) => {
  return (
      <div key={props.key} className="w-[32%] p-8 shadow-md rounded-[12px] bg-white mb-6">
        <div className="mb-[3rem]">
          <Image src={props.img} alt="" />
        </div>
        <div className="mb-[2rem]">
          <Image src={props.rate} alt="" />
        </div>
        <div className="flex justify-between items-center mb-6" >
          <div className="flex items-center gap-6">
            <div>
              <Image src={props.avatar} alt="" />
            </div>
            <div>
              <h2 className="text-24px text-dark-100 font-medium">{props.customerName}</h2>
              <p className="text-18px text-dark-200 font-normal">{props.location}</p>
            </div>
          </div>
          <div>
            <Image src={props.quote} alt="" />
          </div>
        </div>
        <div>
          <p className="text-18px text-dark-200 font-normal">{props.description}</p>
        </div>
      </div>
  );
};

export default Feedback;
