import '../styles/global.scss';
// import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app';
// const inter = Roboto({
//     weight: '400',
//     subsets: ['latin'], 
//   })
const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <Component {...pageProps} />
  )
  ;
};

export default MyApp;
