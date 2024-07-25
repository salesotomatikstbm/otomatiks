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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="instructors section-padding-btm">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 pe-5">
            <div className="section-heading">
              <h2 className="mb-40">Our Valuable Partners</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12">
            <Slider {...settings}>
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="text-center">
                  <img
                    src="https://otomatiks.com/wp-content/uploads/2023/08/17.png"
                    alt={`Slide ${index + 1}`}
                    className="img-fluid mx-auto"
                    style={{ height: 'auto' }}
                  />
                  <h4 className="mt-2 text-break fs-6 fs-md-5">CBSC School Name</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
