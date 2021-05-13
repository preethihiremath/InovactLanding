import React, { useRef, useEffect, useState } from 'react'
import {Banner} from './LandingSections/Banner/Banner';

import About from './LandingSections/About/About';
import Goals from './LandingSections/Goals/Goals';
import Features from './LandingSections/Features/Features';
import Achivements from './LandingSections/Achivement/Achivement';
import Testimonial from './LandingSections/Testimonials/Testimonials'
import Footer from './LandingSections/Footer/Footer';
import { useHistory,Link,RouteComponentProps } from 'react-router-dom';
import logo from './LandingSections/assets/img/logo.png';
import  './LandingSections/Navbar/styles.css';

{/*interface Props{
  onClick: any;
 ReactElement:any;
  toggle:React.MouseEventHandler<HTMLAnchorElement> | undefined
}

interface dim {
    height: number;
    offsetTop: number;
    offsetBottom: number;
}*/}

const getDimensions = (ele: any) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  
  const scrollTo = (ele: any) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
const Landing :React.FC = ({ match ,url}: any) : JSX.Element=> {

    const [visibleSection, setVisibleSection] = useState<Boolean | string>();

    const headerRef = useRef<HTMLElement>(null);
    const homeRef =useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const testimonialRef = useRef(null);
    const contactRef=useRef(null);
    const sectionRefs = [
  
      { section: "home", ref: homeRef },
      { section: "about", ref: aboutRef },
      { section: "service", ref: serviceRef },
      { section: "testimonial", ref: testimonialRef },
      { section: "contact", ref: contactRef },
    ];
  
    useEffect(() => {
      const handleScroll = () => {
        const { height: headerHeight } = getDimensions(headerRef.current);
        const scrollPosition = window.scrollY + headerHeight;
        const selected = sectionRefs.find(({ section, ref }) => {
          const ele = ref.current;
          if (ele) {
            const { offsetBottom, offsetTop } = getDimensions(ele);
            return scrollPosition > offsetTop && scrollPosition < offsetBottom;
          }
        });
  
        if (selected && selected.section !== visibleSection) {
          setVisibleSection(selected.section);
        } else if (!selected && visibleSection) {
          setVisibleSection(undefined);
        }
      };
  
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
       
      };
    }, [visibleSection]);
  
    window.addEventListener('scroll', function () {
      let header: HTMLElement | null;
      header = document.querySelector('header');
      if (header === null) {
        alert('oops');
      } else {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    });
  
    function toggle() {
      let header = document.querySelector('header')!;
      header.classList.toggle('active');
    }
  
    return (
      <div>
          <header className="header" ref={headerRef} id='header' >
              <Link to='/' className='logo'>
                <img src={logo} alt="Logo"/>
                  <span className="logoname" >Inovact</span>
              </Link>
              
              <ul>
  
                <li className="home">
                  <a  
                  className={`header_link ${visibleSection === "home" ? "selected" : ""}`}
                  onClick={() => {
                  scrollTo(homeRef.current);
                  toggle();
                  }}  href='#home'  >
                  Home
                  </a>
                </li>
  
                <li >
                  <a 
                  className={`header_link ${visibleSection === "about" ? "selected" : ""}`}
                  onClick={() => {
                  scrollTo(aboutRef.current);
                  toggle();
                    }} href='#about' >
                  About
                  </a>
                </li>
  
                <li >
                  <a className={`header_link ${visibleSection === "service" ? "selected" : ""}`}
                        onClick={() => {
                          scrollTo(serviceRef.current);
                          toggle();
                        }} href='#service' >
                    Services
                  </a>
                </li>
                <li >
                  <a className={`header_link ${visibleSection === "testimonial" ? "selected" : ""}`}
                        onClick={() => {
                          scrollTo(testimonialRef.current);
                          toggle();
                        }}  href='#testimonial'  >
                    Testimonials
                  </a>
                </li>
                <li >
                  <a 
                  className={`header_link ${visibleSection === "contact" ? "selected" : ""}`}
                  onClick={() => {
                  scrollTo(contactRef.current);
                  toggle();
                  }}  href='#contact' >
                    Contact
                  </a>
                </li>
  
                <li>     
                <Link 
                to={{ pathname: match.url, search: "?login=true" }} 
                onClick={toggle} >Login</Link> 
              </li>
  
                <li>     
                  <Link
                   to="/register"
                  onClick={toggle} >SignUp
                  </Link> 
                </li>
              </ul>
              <div className='toggle' onClick={toggle} />
             
         </header>
  
              <section className='banner' id='home' ref={homeRef}>
              <Banner />
              </section>
  
              <section className='active' id='about' ref={aboutRef} >
              <About />
              <Goals />
              </section>
  
              <section className='achivement' id='service' ref={serviceRef} >
              <Features />  
              <Achivements /> 
              </section>
  
              <section className="testimonial" id='testimonial'  ref={testimonialRef}>
              <Testimonial />
              </section>
  
  
              <section id='contact' ref={contactRef}>
              <Footer />
              </section>
    
      </div>
    );
}

export default Landing;