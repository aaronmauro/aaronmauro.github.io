import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import TextLoop from 'react-text-loop';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero; //add subtitle to populate from mock data

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return (
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || ''} <span className="text-color-main">{name || ''}</span>
              <br />
              <span>I'm a <TextLoop interval={2000}>
                  <span className="text-color-main">  developer.</span>
                  <span className="text-color-main">  teacher.</span>
                  <span className="text-color-main">  researcher.</span>
                </TextLoop>
              </span>
              {/*{subtitle || ''} takes data from mock, imported above*/}         
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || ''}
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
  );
};

export default Header;