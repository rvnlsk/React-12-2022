import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: "https://i.ibb.co/r4vxTnT/roosadpallid.jpg",
      caption: ""
    },
    {
      image: "https://i.ibb.co/whj8zT7/tunnelis.jpg",
      
    },
    {
      image: "https://i.ibb.co/XS8m70t/koerkail.jpg",
      
    },
    {
      image: "https://i.ibb.co/gFyCHBD/sadam.jpg",
      
    },
    {
      image: "https://i.ibb.co/4WVS4KP/sara.jpg",
      
    },
    {
      image: "https://i.ibb.co/C78zbWG/linnud.jpg",
      
    },
    {
      image: "https://i.ibb.co/KVDWbNm/pumpkin.jpg",
      
    },
    {
      image: "https://i.ibb.co/YhyLCCz/binbin.jpg",
      
    },
    {
      image: "https://i.ibb.co/PDV77H1/groundhog.jpg",
      
    },
    {
      image: "https://i.ibb.co/Nt4F97q/hussle.jpg",
      
    }
  ];

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "left" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          textAlign: "center",
          padding: "0 20px",
          maxWidth: "850px",
          marginLeft: "-30px",
          marginRight: "1500px"
        }}>
          <div className="carousel-container">
          <div className="carousel-wrapper">
          <Carousel
            data={data}
            time={17000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="30px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;