import Link from 'next/link';
import {RiGithubLine, RiLinkedinLine, RiMicrosoftLine} from 'react-icons/ri';

const Socials = () => {
  return (
  < div className='flex items-center gap-x-5 text-lg'>

  <Link href={'https://github.com/dafinad'} className='hover:text-accent transition-all duration 300'>
  <RiGithubLine />
  </Link>

  <Link href={'https://uk.linkedin.com/in/dafina-dz'} className='hover:text-accent transition-all duration 300'>
  <RiLinkedinLine />
  </Link>

  <Link href={'https://learn.microsoft.com/en-us/users/dafinadz/'} className='hover:text-accent transition-all duration 300'>
  <RiMicrosoftLine />

  </Link>
  
  </div>
  
  );
};

export default Socials;
