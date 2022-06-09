import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
        
        <form id="form_contact">
            <h4>Contact me</h4>
              <div className='row'>
                  <div className='col'>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-phone" />
                    </p>
                    
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </p>

                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-address-book" />
                    </p>
                    
                    <p>
                      <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                    </p>

                    <p>
                      <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </p>

                    <p>
                      <FontAwesomeIcon icon="fa-brands fa-github" />
                    </p>
                  </div>
                  <div className='col-md-11'>
                    <p>+234-7033378359</p>
                    <p>vchuks4all@yahoo.com</p>
                    <p>No 10 Kajola Street Shomolu Bariga, Lagos State</p>
                    <p><a href="https://linkedin.com/in/vivian-onyinye-chuks">My connections</a></p>
                    <p><a href="https://twitter.com/Chuksviva">@Chuksviva</a></p>
                    <p><a href="https://github.com/Vchuks">My repositories</a></p>
                  </div>
              </div>
            
            
        </form>
  )
}

export default Contact


