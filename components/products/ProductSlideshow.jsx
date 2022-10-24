import React from 'react'
import { Slide } from 'react-slideshow-image'
import styles from './ProductSlideshow.module.css';

export const ProductSlideshow = ({ product }) => {

    // const slideImages = [
    //     {
    //       url: 'images/slide_2.jpg',
    //       caption: 'Slide 1'
    //     },
    //   ];

    const slideImages = product.images.map((image) => {
        return {
            url: `/products/${image}`,
            caption: 'Slide 1'
        }
    });

    return (
        <div className="slide-container">
            <Slide
                easing='ease'
                duration={5000}
                indicators
            >
                {slideImages.map((slideImage, index) => (
                    <div className={ styles['each-slide']} key={index}>
                        <div style={{ backgroundImage: `url(${slideImage.url})`, backgroundSize: 'cover',  }}>
                            {/* <span>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
