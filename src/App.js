import logo from './images/onyii.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './layout';
import About from './about';
import Project from './projects';
import Contact from './contact';
import Nav from './nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faGithub, faLinkedinIn)


function App() {
  return (
    <section>
            <header>
                <div className="row">
                    <div className="col" id="dp1">
                        <div className="dp">
                            <img src={logo} alt="profile picture"/>
                        </div>
                        <Nav/>
                        <footer>
                          <p>&copy; Onyii</p>
                        </footer>
                    </div>
                    <div className="col-md-9">
                        <BrowserRouter>
                          <Routes>
                            <Route exact path="/" element = {<Layout />}></Route>
                            <Route path="about" element = {<About />}></Route>
                            <Route path="projects" element = {<Project />}></Route>
                            <Route path="contact" element = {<Contact />}></Route>
                          </Routes>
                        </BrowserRouter>
                    </div>
                    
                </div>
            </header>
        </section>
  );
}

export default App;
