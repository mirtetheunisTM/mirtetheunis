import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import metric1 from "../assets/img/metrix-uidesign.svg";
import metric2 from "../assets/img/metrix-development.svg";
import metric3 from "../assets/img/metrix-ux.svg";
import metric4 from "../assets/img/metrix-design.svg";
import arrowIcon from "../assets/img/iconmonstr-arrow-right-circle-thin.svg"
import arrowLeft from "../assets/img/chevron-left.svg";
import arrowRight from "../assets/img/chevron-right.svg";

export const Skills = () => {
  const [activeLink, setActiveLink] = useState('home');
  const updateActiveLink = (value) => {
    setActiveLink(value);
  }

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const navigate = useNavigate();

      /* const customLeftArrow = (
        <button className="carousel-arrow carousel-arrow-left">
          <img src={arrowLeft} alt="Left Arrow" />
        </button>
      );
    
      const customRightArrow = (
        <button className="carousel-arrow carousel-arrow-right">
          <img src={arrowRight} alt="Right Arrow" />
        </button>
      ); */

      const goToPage = () => {
        navigate("/aboutme");
        updateActiveLink("overmij");
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} arrows={true} /*customLeftArrow={customLeftArrow} customRightArrow={customRightArrow}*/ className="skill-slider">
                            <div className="item">
                                <img src={metric1} alt="html" /> 
                                <h5>UI Design</h5>
                            </div>      
                            <div className="item">  
                                <img src={metric2} alt="css" />
                                <h5>Front-End Development</h5>
                            </div>
                            <div className="item">
                                <img src={metric4} alt="sass" />
                                <h5>Algemeen design: flyers, affiches...</h5>
                            </div>
                            <div className="item">
                                <img src={metric4} alt="bootstrap" />
                                <h5>Samenwerking en communicatie</h5>
                            </div>
                            <div className="item">
                                <img src={metric3} alt="js" />
                                <h5>UX methoden</h5>
                            </div>
                            <div className="item">
                                <img src={metric3} alt="react" />
                                <h5>Brand Identity</h5>
                            </div>
                            </Carousel>
                            <button className="learnMore" onClick={goToPage}><span>Leer meer over mij<img src={arrowIcon} alt="arrow" className="arrow" /></span></button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
           
      )
}