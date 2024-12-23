import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import projectFitanza from "../assets/img/project-fitanza.png";
import projectGSF from "../assets/img/design-posters.png";

export const ProjectsPage = () => {
    const navigate = useNavigate(); 

    const projects = [
        {
            id: 1,
            title: "Fitanza",
            description: "Een sport app gebaseerd op Strava.",
            imgURL: projectFitanza,
        },
        {
            id: 2,
            title: "Marketing dansshow",
            description: "Ontwerpen van posters, flyers en programmaboekjes voor een dansshow.",
            imgURL: projectGSF,
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description of project 3",
            imgURL: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            title: "Project 4",
            description: "Description of project 4",
            imgURL: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            title: "Project 5",
            description: "Description of project 5",
            imgURL: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            title: "Project 6",
            description: "Description of project 6",
            imgURL: "https://via.placeholder.com/150",
        },
        {
            id: 7,
            title: "Project 7",
            description: "Description of project 7",
            imgURL: "https://via.placeholder.com/150",
        },
    ];

    const handleProjectClick = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <section className="projectsPage" id="projectsPage">
            <Container>
                <Row className="mb-5">
                    <Col xs={6} md={12}>
                        <h2 className="section-title text-center">Projecten</h2>
                        <p className="intro-text">
                            Ontdek hier al mijn projecten en het proces dat ik hiervoor afgelegd heb. Deze pagina wordt uiteraard constant aangevuld met mijn nieuwste projecten.
                        </p>
                    </Col>
                </Row>
                <Row className="projecten-wrapper">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectClick(project.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </Row>
            </Container>
        </section>
    );
};
