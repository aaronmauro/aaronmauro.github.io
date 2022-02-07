import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="address">
              <p className="contact-wrapper__text">Address</p>
              <a href="https://brocku.ca/humanities/digital-humanities/">
                <strong>
                  <p>Centre for Digital Humanities</p>
                </strong>
              </a>
              <a href="https://brocku.ca/">
                <strong>
                  <p>Brock University</p>
                </strong>
              </a>
              <p>1812 Sir Isaac Brock Way</p>
              <p>St. Catharines, ON</p>
              <p>L2S 3A1 Canada</p>
            </div>
            <br />
            <br />
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : ''}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
