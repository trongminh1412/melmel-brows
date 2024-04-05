import { Footer } from '@/components/footer/footer';
import HomePage1 from '@/components/SectionPage1/HomePage';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
   
    <HomePage1 />
    {/* <Banner data={DataBanner3} />
    <Solution data={DataSolution1} />
    <Education data={DataEducation1} />
    <Attractiveness data={DataAttractiveness1} />
    <BlockList data={DataBlockList1} />
    <BlockListImage data={DataBlockImage1} />
    <Contact data={DataContact3} /> */}
    <Footer />
  </div>
);

export { Base };
