import React from 'react';
import Rating from './rating';
import Carousel from 'react-multi-carousel';
import { Typography,Box } from "@material-ui/core";

import "react-multi-carousel/lib/styles.css";
import useStyles from './styles.js';
import data from './testimonial-data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, 
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, 
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const Testimonails: React.FC =()=>{
  const styles=useStyles();
    return(
        <section >
     
        <Box className={styles.testimonials} >
        <Box className={styles.webTitle} >Testimonials</Box>
           <Carousel
          additionalTransfrom={0}
          arrows={false}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
           >
             {data.map((item) => (
               <Box className={styles.reviewCard} key={`testimonial--key${item.id}`}>
                 <Typography className={styles.description}>{item.description}</Typography>
                   <div className={styles.ratings} >
                   <Rating rating={item.review} />
                   </div>
                   <h4 className={styles.name}>
                     {item.name}
                   </h4>
               </Box>
             ))}
         </Carousel>
    </Box>
    
       </section>
    );
}

export default Testimonails;
