import { Attractiveness } from '@/components/Attractiveness/attractiveness';
import { Banner } from '@/components/Banner/banner';
import { BlockList } from '@/components/BlockList/blockList';
import { BlockListImage } from '@/components/BlockListImage/blockListImage';
import { Contact } from '@/components/Contact/contact';
import { Education } from '@/components/Education/education';
import FaqsComponent from '@/components/SectionPage1/Faqs/FaqsComponent';
import FeedbackComponents from '@/components/SectionPage1/Feedback/FeedbackComponents';
import { Solution } from '@/components/Solution/solution';
import TabComponent from '@/components/TabComponent/Tab';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navigation/Navbar';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import {  DataAttractiveness2 } from '@/utils/config/attractiven';
import { DataBanner4 } from '@/utils/config/banner';
import { DataBlockImage1 } from '@/utils/config/blockImage';
import {  DataBlockList2 } from '@/utils/config/blockList';
import { DataContact3 } from '@/utils/config/contact';
import {  DataEducation2 } from '@/utils/config/education';
import {  DataSolution2 } from '@/utils/config/solution';

const PageEducation2 = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Banner data={DataBanner4} />
    <Solution data={DataSolution2} />
    <TabComponent/>
    <Education data={DataEducation2} />
    <Attractiveness data={DataAttractiveness2} />
    <BlockList data={DataBlockList2} dataTable={null} />
    <BlockListImage data={DataBlockImage1} />
    <FeedbackComponents />
    <Contact data={DataContact3} />
    <FaqsComponent />
    <Footer />
  </div>
);

export { PageEducation2 };
