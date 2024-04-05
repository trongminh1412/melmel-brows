import { Attractiveness } from '@/components/Attractiveness/attractiveness';
import { Banner } from '@/components/Banner/banner';
import { BlockList } from '@/components/BlockList/blockList';
import { BlockListImage } from '@/components/BlockListImage/blockListImage';
import { Contact } from '@/components/Contact/contact';
import { Education } from '@/components/Education/education';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navigation/Navbar';
import { Solution } from '@/components/Solution/solution';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { DataAttractiveness1 } from '@/utils/config/attractiven';
import { DataBanner3 } from '@/utils/config/banner';
import { DataBlockImage1 } from '@/utils/config/blockImage';
import { DataBlockList1 } from '@/utils/config/blockList';
import { DataContact3 } from '@/utils/config/contact';
import { DataEducation1 } from '@/utils/config/education';
import { DataSolution1 } from '@/utils/config/solution';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Banner data={DataBanner3} />
    <Solution data={DataSolution1} />
    <Education data={DataEducation1} />
    <Attractiveness data={DataAttractiveness1} />
    <BlockList data={DataBlockList1} />
    <BlockListImage data={DataBlockImage1} />
    <Contact data={DataContact3} />
    <Footer />
  </div>
);

export { Base };
