import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  const carouselContainerStyle = {
    width: '100%',
    maxHeight: '60vh', // Adjust this to control the maximum height of the carousel
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const carouselImageStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        stopOnHover={true}
      >
        <div>
          <div style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1276824031/photo/family-diwali-celebrate-stock-photo.jpg?s=2048x2048&w=is&k=20&c=vknVoiKcyk5fGwqcg0jVr8JZhxYjSkMjsQvM9MTKHpQ=)' }}>
            <img src="https://media.istockphoto.com/id/1276824031/photo/family-diwali-celebrate-stock-photo.jpg?s=2048x2048&w=is&k=20&c=vknVoiKcyk5fGwqcg0jVr8JZhxYjSkMjsQvM9MTKHpQ=" alt="Image 1" style={carouselImageStyle} />
          </div>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D)' }}>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="Image 2" style={carouselImageStyle} />
          </div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <div style={{ backgroundImage: 'url(https://media.istockphoto.com/id/494347616/photo/enjoying-time-together.jpg?s=612x612&w=0&k=20&c=YdHV58yhwJWkb0qh9uke833Ba0gk-trE6eMY1HX91ww=)' }}>
            <img src="https://media.istockphoto.com/id/494347616/photo/enjoying-time-together.jpg?s=612x612&w=0&k=20&c=YdHV58yhwJWkb0qh9uke833Ba0gk-trE6eMY1HX91ww=" alt="Image 3" style={carouselImageStyle} />
          </div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
