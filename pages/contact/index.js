//components
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles"
import Form from '../../components/Form';

//framer motion
import { motion} from  'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  
  return <div className='h-full bg-primary/30'>
   
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center
    justify-center h-full'>

        {/*text & form*/}
        <div className='flex flex-col w-full max-w-[700px] '>
        {/*text*/}
        <motion.h2 
        
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 text-center mb-12'>
           Let&apos;s <span className='text-accent'>Connect</span>
        </motion.h2>
        
       
         
      {/*Form*/}
      <Form />
      <Bulb />
      <Circles />
      
      </div>
    </div>
    
  </div>;
 
};

export default Contact;
