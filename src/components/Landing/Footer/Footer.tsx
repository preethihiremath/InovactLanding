import React from 'react';
import './styles.css';
const Footer: React.FC =()=>{
    return(
        <section className='contact ' >
        <div className='content'>
          <div className='contact-heading'>
            <h3>Contact Us</h3>
          </div>
            <div className='contactForm'>
              <form>
                <div className='row100'>
                  <div className='inputBx50'>
                    <input type='text' name='' placeholder='Full Name' />
                  </div>
                  <div className='inputBx50'>
                    <input type='text' name='' placeholder='Email Address' />
                  </div>
                </div>
                <div className='row100'>
                  <div className='inputBx100'>
                    <textarea placeholder='message'></textarea>
                  </div>
                </div>
                <div className='row100'>
                  <div className='inputBx100'>
                    <input type='submit' value='send' />
                  </div>
                </div>
              </form>
            </div>

            <div className=" social col-12 col-sm-6 align-self-center">
              <div className="text-center" >
    
                  <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className=" fa fa-facebook fa-lg"></i></a>
                  <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className=" fa fa-linkedin  fa-lg"></i></a>
                  <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className=" fa fa-twitter  fa-lg"></i></a>
                  <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className=" fa fa-youtube  fa-lg"></i></a>
                  <a className="btn btn-social-icon btn-envelope" href="mailto:"><i className=" fa fa-envelope  fa-lg"></i></a>
              </div>
          </div>

          <div className="row justify-content-center">             
                  <div className="col-auto copywrite">
                      <p>© Copyright 2021 Inovact</p>
                  </div>
          </div>
        
        </div>
      </section>
    );
}

export default Footer;
