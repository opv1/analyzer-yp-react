import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Swiper.css'
import Commit from '../../containers/Commit/Commit'

const Swiper = ({ commits }) => {
  const SampleNextArrow = ({ className, onClick }) => {
    const cls = [className, 'slick-arrow', 'slick-next']

    return <div className={cls.join(' ')} onClick={onClick} />
  }

  const SamplePrevArrow = ({ className, onClick }) => {
    const cls = [className, 'slick-arrow', 'slick-prev']

    return <div className={cls.join(' ')} onClick={onClick} />
  }

  const settings = {
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Slider {...settings}>
      {commits.map((commit, index) => {
        return <Commit key={index + 1}>{commit}</Commit>
      })}
    </Slider>
  )
}

export default Swiper
