import React, { useEffect, useState } from 'react';
import './assets/css/styles.css';
import './assets/css/media-queries.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', sub: '', msg: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 100,
        duration: 500,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (e) => {
    e.preventDefault();
    let nameError = "";
    let emailError = "";
    let isValid = true;

    if (formData.name === "") {
      nameError = "Name is required";
      isValid = false;
    }

    if (formData.email === "") {
      emailError = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        emailError = "Invalid email address";
        isValid = false;
      }
    }

    setErrors({ name: nameError, email: emailError });

    if (isValid) {
      alert("form submitted.");
      // Optional: clear form
      setFormData({ name: '', email: '', sub: '', msg: '' });
    }
  };

  return (
    <>
      <div className="section-top">  
        <div className="bg"> 
          <header>
            <div className="container">
              <nav>
                <div className="logo">Mu$icO</div>
                {!menuOpen && <i className="fas fa-bars hamburger" onClick={toggleMenu}></i>}
                {menuOpen && <i className="fas fa-times close" onClick={closeMenu} style={{ transform: 'translateY(0)' }}></i>}
                
                <ul className="nav-list" style={menuOpen ? { transform: 'translateY(0)' } : {}}>
                  <li><a href="#am" onClick={(e) => handleScroll(e, '#am')}>About Me</a></li>
                  <li><a href="#wp" onClick={(e) => handleScroll(e, '#wp')}>Working Process</a></li>
                  <li><a href="#qf" onClick={(e) => handleScroll(e, '#qf')}>Qualifications </a></li>
                  <li><a href="#mw" onClick={(e) => handleScroll(e, '#mw')}>My Work</a></li>
                  <li><a href="#fb" onClick={(e) => handleScroll(e, '#fb')}>Feedback</a></li>
                  <li><a href="#cn" onClick={(e) => handleScroll(e, '#cn')}>contact</a></li>
                </ul>
              </nav>

              <span id="heading">
                <img src="/images/heading.png" data-aos="fade-up" alt="Heading" />
                <br /> #music   #user   experience   #Creative Direction
              </span>
            </div>
          </header>
        </div>
      </div> 

      <main>
        <h1 style={{ textAlign: 'center' }} data-aos="fade-up">About Me</h1>
          
        <section className="section1" id="am">
          <div className="mypic">
            <img src="/images/sec1.png" data-aos="fade-up" alt="About Me" />
          </div>
          <div className="aboutme" data-aos="fade-up">
            <h3>Hi, I'M Paul Lapkin and Experience Crafter from CANADA.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p><br />
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <button type="button" data-aos="fade-up"><a href="#cn" onClick={(e) => handleScroll(e, '#cn')}>Hire Me !</a></button>
          </div>
        </section>

        <section id="wp">
          <div className="hs2" style={{ textAlign: 'center' }}>
            <h1 data-aos="fade-up">My Working Process</h1>
            <h4 data-aos="fade-up">Hi, I'M Paul Lapkin, Experience Craft from CANADA.</h4>
          </div>  
          <div className="section2">
            <div className="div1" data-aos="fade-up">
              <ul>
                <li><i className="fa-solid fa-desktop fa-2xl"></i></li>
                <li>DESIGN</li>
              </ul>
            </div>
            <div className="div2" data-aos="fade-up">
              <ul>
                <li><i className="fa-solid fa-code fa-2xl"></i></li>
                <li>DEVELOPMENT</li>
              </ul>
            </div>
            <div className="div3" data-aos="fade-up">
              <ul>
                <li><i className="fa-solid fa-check-to-slot fa-2xl"></i></li>
                <li>TESTING</li>
              </ul>
            </div>
            <div className="div4" data-aos="fade-up">
              <ul>
                <li><i className="fa-solid fa-plane-up fa-2xl"></i></li>
                <li>LAUNCH</li>
              </ul>
            </div>
          </div>  
        </section>

        <section className="section3" id="qf">
          <div className="bg2">
            <div className="cl1" data-aos="fade-up">
              <div className="p1">
                <h2>WORK EXPERIENCE</h2><br />
                <h4>Mad Max Design</h4>
                <h6>OCT 2023 - JUNE 2014</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <hr />
              <div className="p2">
                <h4>Mad Max Design</h4>
                <h6>OCT 2023 - JUNE 2014</h6>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className="cl2" data-aos="fade-up">
              <div className="p1">
                <h2>EDUCATION</h2><br />
                <h4>Mad Max Design</h4>
                <h6>OCT 2023 - JUNE 2014</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <hr />
              <div className="p2">
                <h4>Crazy Design</h4>
                <h6>OCT 2023 - JUNE 2014</h6>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>  
          </div>
        </section>
      
        <section id="mw">
          <h1 style={{ textAlign: 'center', fontSize: '2rem' }} data-aos="fade-up">My Latest Work</h1>
          <h5 style={{ textAlign: 'center' }} data-aos="fade-up">Hi, I'M Paul Lapkin, Experience crafter from canada.</h5>
          <div className="section4">
            <div className="image" data-aos="fade-up"></div>
            <div className="image" data-aos="fade-up"></div>
            <div className="image" data-aos="fade-up"></div>
            <div className="image" data-aos="fade-up"></div>
            <div className="image" data-aos="fade-up"></div>
            <div className="image" data-aos="fade-up"></div>
            <div className="image" data-aos="fade-up"></div>
          </div>
        </section>

        <section className="section5" id="fb">
          <div className="aboutme" data-aos="fade-up">
            <p>
              <span style={{ fontSize: '10em' }}>"</span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <img src="/images/signature.png" style={{ height: '10em', transform: 'rotate(-20deg)' }} data-aos="fade-up" alt="Signature" />
            <h5>Raag S.S. Yadav.</h5>
            <h6>Creative Designs</h6> 
          </div>
          
          <div className="mypic" data-aos="fade-up">
            <img src="/images/sec3.jpg" alt="Feedback" />
          </div>
        </section>

        <section className="section6" id="cn" data-aos="fade-up">
          <form id="myForm" onSubmit={validateForm}>
            <div className="cl1">
              <h1 data-aos="fade-up">LEAVE A MESSAGE</h1>
              
              <label htmlFor="name"></label>
              <input type="text" name="name" id="name" placeholder="name" value={formData.name} onChange={handleInputChange} required /><br />
              <span id="nameError" className="error" style={{ color: 'red' }}>{errors.name}</span><br />
              
              <label htmlFor="email"></label>
              <input type="text" name="email" id="email" placeholder="email ID" value={formData.email} onChange={handleInputChange} required /><br />
              <span id="emailError" className="error" style={{ color: 'red' }}>{errors.email}</span><br />
              
              <input type="text" name="sub" placeholder="subject" value={formData.sub} onChange={handleInputChange} /><br />
              
              <textarea name="msg" placeholder="message" rows="6" value={formData.msg} onChange={handleInputChange}></textarea>
              
              <input className="button" type="submit" style={{ width: '40%', float: 'right', color: 'white' }} value="Hire Me !" />
            </div>  
          </form>
          <div className="cl2">
            <div className="addr">
              <h2>ADDRESS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="phone">
              <h2>PHONE</h2>
              +880 999 345 8765<br />
              +880 999 345 8765
            </div>
            <div className="web">
              <h2>WEB</h2>
              Mail : raaagiy071@gmail.com<br />
              website : <a href="https://mypersonalportfolio1.000webhostapp.com/index.html"> www.MyPortfolio.com</a>
            </div>
          </div>  
        </section>
      </main>

      <footer style={{ textAlign: 'center' }}>
        copyright by @Ragini S.S. Yadav.<br />
        All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
