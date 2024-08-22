import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarousel';

import Img1 from '../../assets/images/d1.jpg';
import Img2 from '../../assets/images/d2.jpg';
import Img3 from '../../assets/images/d3.jpg';
import Img4 from '../../assets/images/d4.png';
import './Caro.css';

function Caro() {
  return (
    <Carousel className='carousel_head'>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage src={Img1} text="Second slide" />
      
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Img2} text="Third slide" />
      
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Img3} text="Fourth slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Img4} text="Fifth slide" />
     
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;
