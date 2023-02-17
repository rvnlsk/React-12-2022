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
      
    },
    {
      image: "https://i.ibb.co/FYHxYnW/meeskoerkass.jpg",
      
    },
    {
      image: "https://i.ibb.co/27qw0CV/segadus.jpg",
      
    },
    {
      image: "https://i.ibb.co/GPCt37f/trellid.jpg",
      
    },
    {
      image: "https://i.ibb.co/CKmkJsH/mustkoer.jpg",
      
    },
    {
      image: "https://i.ibb.co/ssNdBJb/skulls.jpg",
      
    },
    {
      image: "https://i.ibb.co/D7c24hZ/amblikuvork.jpg",
      
    },
    {
      image: "https://i.ibb.co/HgQ5nFN/usalipp.jpg",
      
    },
  ];

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
  };
   
return (
  // <div className="App">
  //   <div style={{ textAlign: "left", margin: "20px" }}>
  //     <h2>React Carousel Minimal</h2>
  //     <p>
  //       Easy to use, responsive and customizable carousel component for React
  //       Projects.
  //     </p>
  <div className="App">

    <div className="container">
    <div style={{ textAlign: "center" }}>
        <div style={{ margin: "1" }}>
          <h2>..online exhibition..</h2>
          <p>
            ..click and hold to pause the carousel..
          </p>
        </div>
      
      <div
        style={{
          padding: "0 20px",
          maxWidth: "850px",
          margin: "80px",
          display: "flex",
          justifyContent: "flex-start",
          
        }}

      >
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
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          showNavBtn={true}
          className="carousel"
          // style={{
          //   textAlign: "center",
          //   maxWidth: "850px",
          //   margin: "40px auto",
          // }}
        />
      </div>
    </div>
    </div>
    
  </div>
);
}

export default App;