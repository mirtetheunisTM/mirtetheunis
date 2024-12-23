import { useParams } from "react-router-dom"; // For reading URL params
import { Container, Row, Col } from "react-bootstrap";
import projectFitanza from "../assets/img/project-fitanza.png";
import projectGSF from "../assets/img/design-posters.png";

export const ProjectDetail = () => {
    const { id } = useParams(); // Get project ID from URL

    const projects = [
        {
            id: 1,
            title: "Fitanza",
            description: "Een sport app gebaseerd op Strava.",
            imgURL: projectFitanza,
        },
        {
            id: 2,
            title: "Affiche en flyers dansshow",
            description: "Ontwerpen van posters, flyers en programmaboekjes voor een dansshow.",
            imgURL: projectGSF,
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description of project 3",
            imgURL: "https://via.placeholder.com/150",
        },
    ];

    const project = projects.find((p) => p.id === parseInt(id)); // Find project by ID

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="section-title">{project.title}</h2>
                    <img src={project.imgURL} alt={project.title} className="project-detail-img" />
                    <p className="project-description">{project.description}</p>
                </Col>
            </Row>
        </Container>
    );
};
