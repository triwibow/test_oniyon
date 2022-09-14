import Carousel from 'react-bootstrap/Carousel';
import family1 from "../../assets/img/family1.jpg";
import family2 from "../../assets/img/family2.jpg";

const CarouselSection = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={family1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={family2}
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSection;