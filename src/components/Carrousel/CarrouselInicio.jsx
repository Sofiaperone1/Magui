import React from 'react';
import Carousel from 'react-multi-carousel';
import CustomDot from "./CustomDot"
import { CustomLeftArrow, CustomRightArrow} from "./CustomArrows"; // Importa tus flechas personalizadas
import 'react-multi-carousel/lib/styles.css'; // Asegúrate de importar los estilos del carrusel
import CI1 from "../../Imgs/carrouselInicio/CI1.jpg"
import CI2 from "../../Imgs/carrouselInicio/CI2.jpg"
import CI3 from "../../Imgs/carrouselInicio/CI3.jpg"
import CI4 from "../../Imgs/carrouselInicio/CI4.jpg"
import CI5 from "../../Imgs/carrouselInicio/CI5.jpg"
import CI6 from "../../Imgs/carrouselInicio/CI6.jpg"


// Definición del componente WithStyles, este es solo un ejemplo, asegúrate de ajustarlo a tu caso
const WithStyles = ({ description, headline, image }) => (
  <div className="CarrIn" style={{display:"flex", justifyContent:"center"}}>
    <img src={image} alt={headline} style={{ width: '100%', height: 'auto' }} />
  </div>
);

// Definición de la propiedad responsive
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const DemoCarouselInicio = (props) => (
  <Carousel
  additionalTransfrom={0}
    arrows
    centerMode={false}
    draggable
    focusOnSelect={false}
    infinite
    minimumTouchDrag={80}
    pauseOnHover={false}
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={responsive}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={true}
    sliderClass=""
    slidesToSlide={1}
    autoPlay={props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="transform 800ms ease-in-out"
    containerClass="carousel-container"
    swipeable
    customDot={<CustomDot />} 
    customLeftArrow={<CustomLeftArrow />} // Flecha izquierda personalizada
    customRightArrow={<CustomRightArrow />} // Flecha derecha personalizada
   
  >
    <WithStyles
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image={CI1}
    />
    <WithStyles
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image={CI2}
    />
    <WithStyles
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image={CI3}
    />
    <WithStyles
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image={CI4}
    />
    <WithStyles
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image={CI5}
    />
    <WithStyles
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image={CI6}
    />
  </Carousel>
);

export default DemoCarouselInicio;