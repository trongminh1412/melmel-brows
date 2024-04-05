import { Contact } from '@/components/Contact/contact';
import HomePage from '@/components/MelMelEdu/HomePage';
import FaqsComponent from '@/components/SectionPage1/Faqs/FaqsComponent';
import FeedbackComponents from '@/components/SectionPage1/Feedback/FeedbackComponents';
import { Footer } from '@/components/footer/footer';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { DataContact3 } from '@/utils/config/contact';

const PageEducation = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
   
    <HomePage />
    {/* <Banner data={DataBanner3} />
    <Navbar />
    <Banner data={DataBanner3} />
    <Solution data={DataSolution1} />
    <TabComponent/>
    <Education data={DataEducation1} />
    <Attractiveness data={DataAttractiveness1} />
    <BlockList data={DataBlockList1} dataTable={null} />
    <BlockListImage data={DataBlockImage1} />
    <Contact data={DataContact3} /> */}
    <FeedbackComponents />
    <Contact data={DataContact3} />
    <FaqsComponent />
    <Footer />
  </div>
);

export { PageEducation };
