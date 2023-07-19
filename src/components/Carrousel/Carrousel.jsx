import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import carru1 from "../../Imgs/carru1.jpg"
import carru2 from "../../Imgs/carru2.jpg"
import carru3 from "../../Imgs/carru3.jpg"
import carru4 from "../../Imgs/carru4.jpg"
import carru5 from "../../Imgs/carru5.jpg"

class DemoCarousel extends React.Component {
  // Optional event handlers
  onChange = (index, item) => {
    // Handle carousel change event
  };

  onClickItem = (index, item) => {
    // Handle click on carousel item event
  };

  onClickThumb = (index, item) => {
    // Handle click on carousel thumbnail event
  };

  render() {
    return (
      <Carousel showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
        <div>
          <img src={carru1} alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={carru2} alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={carru3} alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={carru4} alt="Image 4" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={carru5} alt="Image 5" />
          <p className="legend">Legend 5</p>
        </div>
      
      </Carousel>
    );
  }
}

export default DemoCarousel;
