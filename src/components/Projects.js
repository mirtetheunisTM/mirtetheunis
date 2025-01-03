import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useNavigate } from "react-router-dom"; 
import projectFitanza from "../assets/img/project-fitanza.png";
import projectGSF from "../assets/img/design-posters.png";
import projectKasteel from "../assets/img/website-kasteel.png";
import arrowIcon from "../assets/img/iconmonstr-arrow-right-circle-thin.svg";

export const Projects = () => {
    const navigate = useNavigate();

    const goToPage = () => {
        navigate("/projects");
    };

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
            title: "Website Château de L'Ardoisière",
            description: 'Een statische website voor een klant.',
            imgURL: projectKasteel,
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
                            <button className="btn-primary" onClick={goToPage}><span>Ontdek alle projecten<img src={arrowIcon} alt="arrow" className="arrow" /></span></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}