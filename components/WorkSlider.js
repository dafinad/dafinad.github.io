// data
export const WorkSlides = {
  slides: [
    {
      images: [
        {
          title: 'Calendar Events',
          path: '/CalendarEvent.jpg',
          category: 'Web Development',
          github: "https://github.com/dafinad/web-dev-projects/tree/main/Calendar%20Event"
        },
        {
          title: 'Power BI: Prime & Netflix Analysis',
          path: '/Netflix-Prime.png',
          category: 'power bi',
          github: "https://github.com/dafinad/PowerBI/tree/main/Netflix-Prime"
        },
        {
          title: 'Scroll Reveal Effects',
          path: '/coffee.jpg',
          category: 'Web Development',
          github: "https://github.com/dafinad/web-dev-projects/tree/main/Scroll%20Reveal%20Effects"
        },
      
        {
          title: 'To-Do List',
          path: '/todo.jpg',
          category: 'Web Development',
          github: "https://github.com/dafinad"
        },
      ],
    },
    {
      images: [
        {
          title: 'AI, ML, DL, NLP Projects',
          path: '/AI.jpg',
          category: 'machine learning',
          github: "https://github.com/dafinad/AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-/tree/main"
        },
        {
          title: '',
          path: '/P1.jpg',
          category: 'power bi',
          github: "https://github.com/dafinad"
        },
        {
          title: '',
          path: '/P1.jpg',
          category: 'power bi',
          github: "https://github.com/dafinad"
        },
        {
          title: '',
          path: '/P1.jpg',
          category: 'machine learning',
          github: "https://github.com/dafinad"
        },
      ],
    },
  ]
};

// Swiper modules


import { Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import required modules
import { Pagination, Scrollbar} from 'swiper';
//icons
import {BsArrowRight} from 'react-icons/bs';
import Link from 'next/link';
//bulb

//image
import Image from 'next/image';

const WorkSlider = () => {
 
  return (
   
  <Swiper
    spaceBetween={10}
    
    pagination={{
      clickable: true,
    
    }}
 
   
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
      {WorkSlides.slides.map((slide, index) => {
        return (
        <SwiperSlide key={index}>
           <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'
              key={index}>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/*images*/}
                  <Image src={image.path} width={500} height={300} alt='' />
                  {/*overlay gradient*/}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
                  to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                   <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                   <div className='flex flex-col items-center gap-y-2 text-[13px] tracking-[0.2em]'>
    
                      {/* title part */}
                      <div className='translate-y-[500%] group-hover:translate-y-0
                                    transition-all duration-300 delay-150'>
                        {image.title}
                      </div>
                      
                      {/* View Code */}
                      <div className='flex items-center gap-x-2 translate-y-[500%] group-hover:translate-y-0
                  transition-all duration-300 delay-150'>
                      <div>View Code</div>
                     
                      {/* icon */}
                      <Link href={image.github}>
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0
                                      transition-all duration-300 delay-200'>
                          <BsArrowRight />
                        </div>
                      </Link>
                      </div>
                      


                      </div>
                    </div>
                </div>
              </div>
              );
            })}
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


export default WorkSlider;
