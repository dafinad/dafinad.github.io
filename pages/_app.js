import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import {useRouter} from 'next/router'
import { AnimatePresence, motion } from 'framer-motion';
import Sound from '../components/Sound';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <AnimatePresence>
    <motion.div key={router.route} className='h-full'>
    <Transition />

    <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
    <Sound />
    <div id="my-modal" />
  
  </Layout>
  );
}

export default MyApp;
