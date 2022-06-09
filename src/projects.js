import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import logo2 from './images/pace.png';
import logo3 from './images/beaullo.png';
import logo4 from './images/fashion.png';


const Project = () => {
  return (
        <div className='project-container'>
            <h3>My Projects</h3>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={logo2}
      alt="First slide"
    />
    <Carousel.Caption>
    <a href="https://vchuks.github.io/pacepharmacare.github.io/"><h4>Click to view</h4></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Second slide"
    />
    <Carousel.Caption>
    <a href="https://vchuks.github.io/beaullo/"><h4>Click to view</h4></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo4}
      alt="Third slide"
    />
    <Carousel.Caption>
    <a href="https://vchuks.github.io/myfashionsite/"><h4>Click to view</h4></a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default Project
