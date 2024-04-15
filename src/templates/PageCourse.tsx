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
import { DataAttractiveness1 } from '@/utils/config/attractiven';
import { DataBanner3 } from '@/utils/config/banner';
import { DataBlockImage1 } from '@/utils/config/blockImage';
import { DataBlockList1 } from '@/utils/config/blockList';
import { DataContact3 } from '@/utils/config/contact';
import { DataEducation1 } from '@/utils/config/education';
import { DataSolution1 } from '@/utils/config/solution';
import { DataTab3 } from '@/utils/config/tab';

const PageCourse = () => (
  <div className="text-gray-600 antialiased overflow-hidden">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Banner data={DataBanner3} />
    <Solution data={DataSolution1} />
    <TabComponent data={DataTab3}/>
    <Education data={DataEducation1} />
    <Attractiveness data={DataAttractiveness1} />
    <BlockList data={DataBlockList1} dataTable={null} />
    <BlockListImage data={DataBlockImage1} />
    <FeedbackComponents />
    <Contact data={DataContact3} />
    <FaqsComponent />
    <Footer />
  </div>
);

export { PageCourse };
