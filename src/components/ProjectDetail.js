import { useParams, useNavigate } from "react-router-dom"; 
import { Container, Row, Col } from "react-bootstrap";
import projectFitanza from "../assets/img/project-fitanza.png";
import projectFitanza2 from "../assets/img/project-fitanza2.png";
import projectFitanza3 from "../assets/img/project-fitanza3.png";
import projectGSF from "../assets/img/design-posters.png";
import projectGSF2 from "../assets/img/design-posters2.png";
import projectGSF3 from "../assets/img/design-programmaboekje.png";

export const ProjectDetail = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const projects = [
        {
            id: 1,
            title: "Fitanza",
            description: "Een sport app gebaseerd op Strava.",
            imgURL: projectFitanza,
            process: [
                "Voor het vak 'Interface Design' kreeg ik de opdracht om een nieuwe variant van de Strava-app te ontwikkelen. Het doel van dit project was om het bestaande concept van Strava te behouden, maar een app te ontwerpen die zich richt op een totaal andere doelgroep. Hieronder beschrijf ik het proces dat ik heb doorlopen om dit project te realiseren:",
                "Conceptontwikkeling - De eerste stap in dit project bestond uit het onderzoeken van het concept van de Strava-app. Hierbij richtte ik me op het identificeren van de kernfunctionaliteiten van de app en het begrijpen van de noden van een nieuwe, specifieke doelgroep. Vervolgens hield ik creatieve brainstormsessies om een vernieuwend concept te bedenken dat aansluit bij de behoeften van deze doelgroep.",
                "Visual Design - In dit deel stelde ik eerst een moodboard samen om een visuele richting en sfeer voor de app te bepalen. Dit moodboard diende als basis voor de verdere ontwerpkeuzes. Vervolgens bedacht ik een passende naam die de essentie van de app weerspiegelt. Daarna ontwierp ik een logo dat zowel herkenbaar als aantrekkelijk is voor de nieuwe doelgroep. Ten slotte ontwikkelde ik een uitgebreide brand sheet waarin ik de stijlrichtlijnen van de app, zoals kleurenschema, typografie en iconografie, vastlegde.",
                "Prototyping: App-ontwikkeling - Om de app te ontwikkelen, verdiepte ik me eerst in wireframing door enkele schermen van Strava te analyseren en na te bootsen. Hierdoor kreeg ik inzicht in de structuur en opbouw van de app. Daarna definieerde ik de belangrijkste functionaliteiten voor mijn eigen app en stelde ik een flowchart op om de gebruikersstroom in kaart te brengen. Vervolgens ontwikkelde ik de app in verschillende fasen: ik begon met wireframes, ging daarna over naar een low-fidelity prototype, werkte dit uit tot een medium-fidelity prototype, en eindigde met een volledig high-fidelity prototype.",
                "Prototyping: Informatieve website - Naast de app maakte ik ook een ondersteunende informatieve website die alle relevante informatie over de app presenteert. Net als bij de app begon ik met het definiëren van de functionaliteiten en het vastleggen van de content die de website zou bevatten. Daarna ontwierp ik wireframes om de structuur van de website te bepalen. Vervolgens werkte ik ook hier in stappen, van een low-fidelity prototype naar een medium-fidelity prototype, en uiteindelijk naar een high-fidelity prototype.",
                "Met dit proces creëerde ik een volledige productervaring, bestaande uit een innovatieve app en een informatieve website, die beide zorgvuldig zijn ontworpen om mijn doelgroep optimaal te bedienen."
            ],
            images: [
                projectFitanza,
                projectFitanza2,
                projectFitanza3
            ]
        },
        {
            id: 2,
            title: "Marketing dansshow",
            description: "Ontwerpen van posters, flyers en programmaboekjes voor een dansshow.",
            imgURL: projectGSF,
            process: [
                "Voor de marketing van een dansshow kreeg ik de taak om visuele en promotionele elementen te ontwikkelen die aansluiten bij het thema en de verhaallijn van de show. Hieronder beschrijf ik de stappen die ik heb doorlopen om dit project tot een succesvol einde te brengen:",
                "De eerste stap was het ontwerpen of selecteren van een logo dat perfect aansluit bij het thema van de dansshow. Ik analyseerde de sfeer en boodschap van de show om een visueel element te creëren dat zowel de essentie als de stijl ervan weerspiegelt.",
                "Daarna bedacht ik een titel voor de show die nauw verbonden is met de verhaallijn. De titel moest krachtig, uitnodigend en betekenisvol zijn, en het publiek nieuwsgierig maken naar wat de show te bieden heeft.",
                "In overleg definieerde ik een kleurenpalet dat consistent zou worden gebruikt in alle visuele ontwerpen. Deze kleuren moesten niet alleen aantrekkelijk zijn, maar ook bijdragen aan de sfeer en het thema van de show.",
                "Vervolgens ontwierp ik een affiche dat als belangrijkste promotioneel materiaal diende. Hierbij zorgde ik ervoor dat het ontwerp niet alleen visueel aantrekkelijk was, maar ook alle essentiële informatie over de show duidelijk communiceerde.",
                "Daarnaast creëerde ik een flyer die zowel informatief als uitnodigend was. De flyer werd ontworpen om een breed publiek aan te spreken en bevatte beknopte, maar overtuigende informatie over de dansshow.",
                "Ten slotte ontwierp ik een programmaboekje dat tijdens de show werd uitgedeeld. Dit boekje gaf het publiek een overzicht van de verhaallijn, de dansers en het creatieve team, en versterkte de professionele uitstraling van de show.",
                "Met deze stappen heb ik een samenhangende en aantrekkelijke marketingcampagne gerealiseerd, die zowel de identiteit van de dansshow als de interesse van het publiek succesvol weerspiegelt."
            ],
            images: [
                projectGSF,
                projectGSF3,
                projectGSF2
            ]        },
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
                    {project.images.map((imgURL, index) => (
                        <Col sm={12} md={6} lg={4} key={index} className="project-image">
                            <img src={imgURL} alt={`Project image ${index + 1}`} />
                        </Col>
                    ))}
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
                    <Col>
                        <button variant="secondary" onClick={() => navigate(-1)} className="back-button">
                            ←   Terug
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

