import React from "react";
import Faqs from "./Faqs";
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
  return (
    <div>
      <section className="bg-[url(/background3.png)] bg-no-repeat">
        <TitleComponent title1="Câu hỏi thường gặp"/>
        <div className="mx-auto w-[50%] mt-[10rem] bg-white p-12 rounded-3xl border-[1px]">
          {faqPage1.map((item,) => {
            return (
              <div>
                <Faqs
                  key={item.id}
                  content={item.content}
                  header={item.header}
               
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FaqsComponent;
