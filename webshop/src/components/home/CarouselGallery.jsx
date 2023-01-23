import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/237/500/200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>Must koerake</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/137/500/200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Testing out</h3>
          <p>Tunnel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/337/500/200"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Viljapold
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGallery;