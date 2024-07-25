import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const YourComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="instructors section-padding-btm">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 pe-5">
            <div className="section-heading">
              <h2 className='mb-40'>Our Valuable Partners</h2>
            </div>  
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12">
            <Slider {...settings}>
              <div>
                <img src="https://otomatiks.com/wp-content/uploads/2023/08/14.png" alt="Slide 1" />
                <h3>CBSC School Name</h3> 
              </div>
              <div>
                <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
                <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
              <div>
              <img src="https://otomatiks.com/wp-content/uploads/2023/08/17.png" alt="Slide 2" />
              <h3>CBSC School Name</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
