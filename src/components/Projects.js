import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectFitanza from "../assets/img/project-fitanza.png";
import projectGSF from "../assets/img/design-posters.png";
import arrowIcon from "../assets/img/iconmonstr-arrow-right-circle-thin.svg";

export const Projects = () => {
    const projects = [
        {
            title: 'Fitanza',
            description: 'Een sport app gebaseerd op Strava.',
            imgURL: projectFitanza,
        },
        {
            title: 'Marketing dansshow',
            description: 'Ontwerpen van posters, flyers en programmaboekjes voor een dansshow.',
            imgURL: projectGSF,
        },
        {
            title: 'Project 3',
            description: 'Description of project 3',
            imgURL: 'https://via.placeholder.com/150',
        }
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                            <h2>Projecten</h2>
                            <p>Ontdek hier mijn laatste projecten. Nieuwsgierig naar meer? Bekijk alle projecten en de uitwerking ervan op de projectenpagina.</p>
                            <Row className="project-wrapper">
                                 {projects.map((project, index) => {
                                     return (
                                         <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })}
                            </Row>
                            <button className="btn-primary" onClick={() => console.log('connect')}><span>Ontdek alle projecten<img src={arrowIcon} alt="arrow" className="arrow" /></span></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}