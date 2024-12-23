import { Container, Row, Col } from "react-bootstrap";

export const AboutMe = () => {
    return (
        <section id="overmij" className="over-mij">
          <Container>
            <Row className="intro-section mb-5">
              <Col xs={6} md={12}>
                <h2 className="section-title text-center">Over Mij</h2>
                <p>
                  Hallo! Mijn naam is [Jouw Naam] en ik ben een gedreven webontwikkelaar met een passie voor UI/UX design. Ik heb ervaring in het ontwikkelen van websites en applicaties die zowel functioneel als esthetisch aantrekkelijk zijn. Mijn doel is om gebruiksvriendelijke digitale ervaringen te creëren die de interactie van gebruikers verbeteren.
                </p>
              </Col>
            </Row>
    
            <Row className="education-section mb-5">
              <Col xs={12}>
                <h3 className="section-subtitle text-center">Opleidingen</h3>
                <div className="content-box">
                  <ul className="education-list">
                    <li>Bachelor Digital Experience Design, Thomas More, 2024-heden</li>
                    <li>Master Informatiemanagement, KULeuven, 2022-2024</li>
                    <li>Bachelor Toegepaste Informatica, UCLL, 2019-2022</li>
                    <li>Middelbaar diploma: Wetenschappen-Wiskunde, Sint-Martinusscholen Herk-de-Stad, 2013-2019</li>
                  </ul>
                </div>
              </Col>
            </Row>
    
            <Row className="work-experience-section mb-5">
              <Col xs={12}>
                <h3 className="section-subtitle text-center">Werkervaring</h3>
                <div className="content-box">
                  <ul className="work-experience-list">
                    <li><strong>Front-end Developer</strong> bij [Bedrijf], [Jaar - Jaar]</li>
                    <li><strong>UI/UX Designer</strong> bij [Bedrijf], [Jaar - Jaar]</li>
                  </ul>
                </div>
              </Col>
            </Row>
    
            <Row className="skills-section mb-5">
              <Col xs={12}>
                <h3 className="section-subtitle text-center">Vaardigheden</h3>
                <div className="content-box">
                  <ul className="skills-list">
                    <li><strong>HTML, CSS, JavaScript</strong></li>
                    <li><strong>React, Node.js</strong></li>
                    <li><strong>UI/UX Design</strong></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    };
