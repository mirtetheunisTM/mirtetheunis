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
            process: [
                "Het project begon met het onderzoeken van de doelgroep en het maken van wireframes.",
                "Vervolgens werden er prototypes gemaakt en getest met gebruikers.",
                "De uiteindelijke applicatie is ontwikkeld in React Native en omvat features zoals challenges, statistieken en een sociale feed."
            ],
            images: [
                "https://via.placeholder.com/300x200",
                "https://via.placeholder.com/300x200",
                "https://via.placeholder.com/300x200"
            ]
        },
        {
            id: 2,
            title: "Affiche en flyers dansshow",
            description: "Ontwerpen van posters, flyers en programmaboekjes voor een dansshow.",
            imgURL: projectGSF,
            process: [
                "Het project begon met het onderzoeken van de doelgroep en het maken van wireframes.",
                "Vervolgens werden er prototypes gemaakt en getest met gebruikers.",
                "De uiteindelijke applicatie is ontwikkeld in React Native en omvat features zoals challenges, statistieken en een sociale feed."
            ],
            images: [
                "https://via.placeholder.com/300x200",
                "https://via.placeholder.com/300x200",
                "https://via.placeholder.com/300x200"
            ]
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description of project 3",
            imgURL: "https://via.placeholder.com/150",
            process: [
                "Het project begon met het onderzoeken van de doelgroep en het maken van wireframes.",
                "Vervolgens werden er prototypes gemaakt en getest met gebruikers.",
                "De uiteindelijke applicatie is ontwikkeld in React Native en omvat features zoals challenges, statistieken en een sociale feed."
            ],
            images: [
                "https://via.placeholder.com/300x200",
                "https://via.placeholder.com/300x200",
                "https://via.placeholder.com/300x200"
            ]
        },
    ];

    const project = projects.find((p) => p.id === parseInt(id)); // Find project by ID

    if (!project) {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Project not found</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <section className="project-detail">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title text-center">{project.title}</h2>
                        <p className="section-description">{project.description}</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 className="process-title">Proces</h3>
                        {project.process.map((step, index) => (
                            <p key={index} className="process-step">{step}</p>
                        ))}
                    </Col>
                </Row>

                <Row>
                    {project.images.map((imgURL, index) => (
                        <Col sm={12} md={6} lg={4} key={index} className="project-image">
                            <img src={imgURL} alt={`Project image ${index + 1}`} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

