import { Banner } from '@/components/Banner/banner';
import HomePage1 from '@/components/SectionPage1/HomePage';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navigation/Navbar';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Banner />
    <HomePage1 />
    <Footer />
  </div>
);

export { Base };
