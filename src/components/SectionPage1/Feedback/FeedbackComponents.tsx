import { customerPage1 } from '../HomePage';
import TitleComponent from '../Title/Title';
import Feedback from './Feedback';

const FeedbackComponents = () => {
  return (
    <div>
        <section className="w-[95%] mx-auto mb-32 ">
        <TitleComponent title1="Khách hàng nói gì" />
        <div className="flex justify-between gap-4 flex-wrap">
          {customerPage1.map((item, idx) => {
           
            return (
            <Feedback
                key={idx}
                img={item.img}
                rate={item.rate}
                avatar={item.avatar}
                customerName={item.customerName}
                location={item.location}
                quote={item.quote}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default FeedbackComponents