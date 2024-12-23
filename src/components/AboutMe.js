import { Container, Row, Col } from "react-bootstrap";

export const AboutMe = () => {
    return (
        <section id="overmij" className="over-mij">
          <Container>
            <Row className="intro-section mb-5">
              <Col xs={6} md={12}>
                <h2 className="section-title text-center">Over Mij</h2>
                <p>
                Hallo, ik ben Mirte Theunis! Mijn reis begon met een informaticaopleiding, waar ik de basisprincipes van technologie en programmeren heb geleerd. Maar al snel ontdekte ik mijn passie voor design. De manier waarop vorm en functie samenkomen om iets moois en bruikbaars te creëren, fascineerde me enorm. Daarom besloot ik mijn kennis verder uit te breiden en me te verdiepen in het ontwerp van digitale ervaringen.
                Naast mijn opleiding, ben ik ook een gepassioneerde danser en houd ik ervan om creatief bezig te zijn in mijn vrije tijd. Of het nu gaat om dansen, ontwerpen of het ontwikkelen van nieuwe projecten, ik ben altijd op zoek naar manieren om mijn creativiteit en technische vaardigheden te combineren.
                </p>
              </Col>
            </Row>
    
            <Row className="education-section mb-5">
              <Col xs={12}>
                <h3 className="section-subtitle text-center">Opleidingen</h3>
                <div className="content-box">
                  <ul className="education-list">
                    <li>
                      <Row>
                        <Col xs={6}>
                          <h4>Bachelor Digital Experience Design (Verkort traject)</h4>
                        </Col>
                        <Col xs={1} className="separator">
                          <div className="vertical-line"></div>
                        </Col>
                        <Col xs={5}>
                          <p>Thomas More, 2024-heden</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col xs={6}>
                          <h4>Master Informatiemanagement</h4>
                        </Col>
                        <Col xs={1} className="separator">
                          <div className="vertical-line"></div>
                        </Col>
                        <Col xs={5}>
                          <p>KULeuven, 2022-2024</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col xs={6}>
                          <h4>Bachelor Toegepaste Informatica</h4>
                        </Col>
                        <Col xs={1} className="separator">
                          <div className="vertical-line"></div>
                        </Col>
                        <Col xs={5}>
                          <p>UCLL, 2019-2022</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col xs={6}>
                          <h4>Middelbaar diploma: Wetenschappen-Wiskunde</h4>
                        </Col>
                        <Col xs={1} className="separator">
                          <div className="vertical-line"></div>
                        </Col>
                        <Col xs={5}>
                          <p>Sint-Martinusscholen Herk-de-Stad, 2013-2019</p>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
    
            <Row className="work-experience-section mb-5">
              <Col xs={12}>
                <h3 className="section-subtitle text-center">Werkervaring</h3>
                <div className="content-box">
                  <ul className="work-experience-list">
                    <li>
                        <h4>Dansleerkracht</h4>
                        <h5>GSF Kortenaken, 2021-heden</h5>
                        <h5>Dansclub Optimi Zichem, 2019-2020</h5>
                        <p>Ik geef dansles voor alle leeftijden, van 3 jaar tot 18+. Zowel hiphop als modern zijn mijn specialiteiten. 
                            Daarnaast ben ik ook medeverantwoordelijke voor de sociale media, het organiseren van externe activiteiten (zoals danskampen) en het ontwerp van marketing materiaal.</p>
                    </li>
                    <li>
                        <h4>Business Analyst</h4>
                        <h5>Step Up Consultancy, 2022 (Stage)</h5>
                        <p>Ik heb een stage gedaan bij Step Up Consultancy. Hoewel ik binnen mijn stage niet echt heb geprogrammeerd, heb ik er wel veel bijgeleerd over analyse. 
                            Ik moest er onder andere mijn inzicht goed kunnen inzetten om zo de juiste conclusies te trekken. Ik heb meegewerkt aan verschillende projecten voor verschillende klanten.
                        </p>
                    </li>
                    <li>
                        <h4>Vice-Praeses, Eerstejaarswerking & Multimedia</h4>
                        <h5>Studentenvereniging Diana, 2020-2022</h5>
                        <p>Als Vice-Praeses was ik verantwoordelijk om heel de vereniging in goede banen te leiden. Als eerstejaarswerking stond 
                            ik in om eerstejaars een warm welkom te geven en activiteiten voor hen te organiseren. Daarnaast heb ik ook een heleboel banners gemaakt en was ik verantwoordelijk voor de Instagram.
                        </p>
                    </li>
                    <li>
                        <h4>Animator</h4>
                        <h5>Speelboerderij RAVOT, zomervakanties 2021-2022</h5>
                        <p>Twee zomervakanties op rij ben ik gaan helpen op de Speelboerderij als animator voor de zomerkampen. Ik heb hiervoor activiteiten verzonnen en toezicht gehouden op een grote groep kinderen.
                            Daarnaast ben ik ook af en toe gaan helpen op verjaardagsfeestjes of gaan opdienen op de openspeeldagen.
                        </p>
                    </li>
                    <li>
                        <h4>Winkelbediende (Studentenjob)</h4>
                        <h5>Blokker Diest, 2017-2020</h5>
                        <p>In mijn eerste jaren dat ik ging werken heb ik in de Blokker. Hier deed ik verschillende dingen, zoals de kassa bedienen, klanten verder helpen met vragen en de winkel aanvullen.
                        </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
    
            <Row className="skills-section mb-5">
              <Col xs={12}>
                <h3 className="section-subtitle text-center">Vaardigheden</h3>
                <div className="content-box">
                  <ul className="skills-list">
                    <li><strong>UI Design</strong> - <span>80%</span></li>
                    <li><strong>UX Methoden</strong> - <span>70%</span></li>
                    <li><strong>Illustrator</strong> - <span>65%</span> </li>
                    <li><strong>Figma</strong> - <span>80%</span></li>
                    <li><strong>Algemeen design (flyers, affiches)</strong> - <span>90%</span></li>
                    <li><strong>HTML</strong> - <span>85%</span> </li>
                    <li><strong>CSS</strong> - <span>80%</span> </li>
                    <li><strong>React, Node.js</strong> - <span>65%</span></li>
                    <li><strong>JavaScript</strong> - <span>65%</span></li>
                    <li><strong>Python</strong> - <span>50%</span></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    };
