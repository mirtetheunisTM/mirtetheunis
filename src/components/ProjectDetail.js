import { useParams, useNavigate } from "react-router-dom"; 
import { Container, Row, Col } from "react-bootstrap";
import projectFitanza from "../assets/img/project-fitanza.png";
import projectFitanza2 from "../assets/img/project-fitanza2.png";
import projectFitanza3 from "../assets/img/project-fitanza3.png";
import projectGSF from "../assets/img/design-posters.png";
import projectGSF2 from "../assets/img/design-posters2.png";
import projectGSF3 from "../assets/img/design-programmaboekje.png";
import projectKasteel from "../assets/img/website-kasteel.png";
import projectKasteel2 from "../assets/img/projectKasteel.png";
import projectKasteel3 from "../assets/img/projectKasteel2.png";
import projectKasteel4 from "../assets/img/projectKasteel3.png";
import projectShoe from "../assets/img/shoe-1.png";
import projectShoe2 from "../assets/img/shoe-2.png";
import projectShoe3 from "../assets/img/shoe-3.png";
import projectAI from "../assets/img/ai-1.jpg";
import projectAI2 from "../assets/img/ai-2.png";
import projectAI3 from "../assets/img/ai-3.png";
import projectGSF4 from "../assets/img/gsf1.png";
import projectGSF5 from "../assets/img/gsf2.png";
import projectGSF6 from "../assets/img/gsf3.png";

export const ProjectDetail = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const projects = [
        {
            id: 1,
            title: "Rebranding en marketing GSF",
            description: "Verschillende opdrachten voor een klant",
            imgURL: projectGSF4,
            process: [
                "Voor mijn dansschool, GSF Kortenaken, heb ik aan verschillende creatieve en strategische projecten gewerkt die zowel mijn ontwerpvaardigheden als mijn vermogen om in een professionele context te werken benadrukken. Hieronder volgt een overzicht van de belangrijkste onderdelen van dit project:",
                "Website onderhoud - Ik was verantwoordelijk voor het up-to-date houden van de bestaande website, die gebouwd was voordat ik deel uitmaakte van het bestuur van de dansschool. Dit omvatte het aanpassen van content, zoals lesroosters en evenementen, en het implementeren van kleine verbeteringen om de gebruikerservaring te optimaliseren.",
                "Ontwerp nieuw logo - Het oude logo van de dansschool was verouderd en niet duidelijk, waardoor er behoefte was aan een nieuw ontwerp. Ik ontwierp een speelser en jeugdiger logo dat beter aansloot bij de dynamische sfeer van de dansschool. Het was essentieel dat het nieuwe logo de identiteit van de Gezinsbond bleef weerspiegelen, aangezien GSF Kortenaken door hen gesubsidieerd wordt. Het eindresultaat was een fris en herkenbaar logo dat zowel moderniteit als traditie combineert.",
                "Sposordossier - Om potentiële sponsors te overtuigen, ontwierp ik een professioneel en aantrekkelijk sponsordossier. Het document bevatte een overzicht van de waarden en activiteiten van de dansschool en was visueel versterkt met een moderne lay-out. Dit sponsordossier werd specifiek opgesteld om nieuwe samenwerkingen en financiële steun voor de dansschool aan te trekken.",
                "Flyers show 2025 - Voor de aankomende dansshow KEKWIK 2025, met het thema tegengestelden, kreeg ik de opdracht om flyers te ontwerpen. Ik vond het interessant om het thema te vertalen naar vier verschillende ontwerpen, elk representatief voor een van de vier tegengestelde blokken van de show. Naast het ontwerpen van de flyers bedacht ik ook een passende naam voor de show en selecteerde ik de kleuren en fonts die consistent gebruikt zouden worden in de promotionele materialen.",
                "Met dit project combineerde ik creativiteit, oog voor detail en strategisch denken om de visuele communicatie van GSF Kortenaken te verbeteren en de dansschool sterker in de markt te positioneren."
            ],
            images: [
                projectGSF4,
                projectGSF5,
                projectGSF6
            ]
        },
        {
            id: 2,
            title: "Rebranding BSIT",
            description: "Een brand guide voor het nieuwe uiterlijk van Bsit.",
            imgURL: projectFitanza,
            process: [
                "Voor het rebrandingproject van BSIT deed ik diepgaand onderzoek naar de identiteit van BSIT. Ik analyseerde waar de organisatie voor staat, wat hun doelen en waarden zijn, en hoe deze momenteel worden gecommuniceerd. Daarnaast bestudeerde ik de branding van concurrenten om een vergelijking te maken en te bepalen waar BSIT zich kan onderscheiden en verbeteren.",
                "Op basis van deze inzichten begon ik met het herontwerpen van het logo, waarbij ik streefde naar een visuele identiteit die de kernwaarden en missie van BSIT weerspiegelt. Vervolgens selecteerde ik een kleurenpalet en een typografie die het juiste karakter en de gewenste uitstraling benadrukken.",
                "Daarna stelde ik een brand brief op waarin de vernieuwde merkidentiteit werd samengevat, gevolgd door het creëren van een uitgebreide brand guide. Deze brand guide bevatte alle nodige informatie over de branding en liet zien hoe deze toegepast kan worden op verschillende archetypes. Het resultaat was een consistente, professionele en moderne visuele identiteit voor BSIT.",
            ],
            images: [
                projectFitanza,
                projectFitanza2,
                projectFitanza3
            ]
        },
        {
            id: 3,
            title: "Fitanza",
            description: "Een sport app gebaseerd op Strava.",
            imgURL: projectFitanza,
            process: [
                "Voor het vak 'Interface Design' kreeg ik de opdracht om een nieuwe variant van de Strava-app te ontwikkelen. Het doel van dit project was om het bestaande concept van Strava te behouden, maar een app te ontwerpen die zich richt op een totaal andere doelgroep. Hieronder beschrijf ik het proces dat ik heb doorlopen om dit project te realiseren:",
                "Conceptontwikkeling - De eerste stap in dit project bestond uit het onderzoeken van het concept van de Strava-app. Hierbij richtte ik me op het identificeren van de kernfunctionaliteiten van de app en het begrijpen van de noden van een nieuwe, specifieke doelgroep. Vervolgens hield ik creatieve brainstormsessies om een vernieuwend concept te bedenken dat aansluit bij de behoeften van deze doelgroep.",
                "Visual Design - In dit deel stelde ik eerst een moodboard samen om een visuele richting en sfeer voor de app te bepalen. Dit moodboard diende als basis voor de verdere ontwerpkeuzes. Vervolgens bedacht ik een passende naam die de essentie van de app weerspiegelt. Daarna ontwierp ik een logo dat zowel herkenbaar als aantrekkelijk is voor de nieuwe doelgroep. Ten slotte ontwikkelde ik een uitgebreide brand sheet waarin ik de stijlrichtlijnen van de app, zoals kleurenschema, typografie en iconografie, vastlegde.",
                "Prototyping: App-ontwikkeling - Om de app te ontwikkelen, verdiepte ik me eerst in wireframing door enkele schermen van Strava te analyseren en na te bootsen. Hierdoor kreeg ik inzicht in de structuur en opbouw van de app. Daarna definieerde ik de belangrijkste functionaliteiten voor mijn eigen app en stelde ik een flowchart op om de gebruikersstroom in kaart te brengen. Vervolgens ontwikkelde ik de app in verschillende fasen: ik begon met wireframes, ging daarna over naar een low-fidelity prototype, werkte dit uit tot een medium-fidelity prototype, en eindigde met een volledig high-fidelity prototype.",
                "Prototyping: Informatieve website - Naast de app maakte ik ook een ondersteunende informatieve website die alle relevante informatie over de app presenteert. Net als bij de app begon ik met het definiëren van de functionaliteiten en het vastleggen van de content die de website zou bevatten. Daarna ontwierp ik wireframes om de structuur van de website te bepalen. Vervolgens werkte ik ook hier in stappen, van een low-fidelity prototype naar een medium-fidelity prototype, en uiteindelijk naar een high-fidelity prototype.",
                "Met dit proces creëerde ik een volledige productervaring, bestaande uit een innovatieve app en een informatieve website, die beide zorgvuldig zijn ontworpen om mijn doelgroep optimaal te bedienen.",
                "Je kan het volledige proces dat ik doorlopen heb bekijken via deze link: https://www.figma.com/design/XJqDpiUm4QfUXKx51i1yq1/Theunis-Mirte-InterfaceDesign-2024?node-id=96-982&t=T2ub2GGgWSXNZGnR-1"
            ],
            images: [
                projectFitanza,
                projectFitanza2,
                projectFitanza3
            ]
        },
        {
            id: 4,
            title: "Shoe configurator",
            description: "Een bestelsysteem voor een persoonlijke schoen.",
            imgURL: projectShoe,
            process: [
                "Voor de klant SWEAR ontwikkelde ik een innovatieve 3D-schoenconfigurator die gebruikers de mogelijkheid biedt om schoenen in 3D te bekijken, aan te passen met kleuren, materialen en tekst, en deze vervolgens te bestellen.",
                "Het project begon met het bouwen van een API in Node.js, die communiceert met een Mongoose-database en verantwoordelijk is voor het beheren van alle bestellingen. Vervolgens ontwikkelde ik een gebruiksvriendelijke frontend in Vue.js voor orderbeheer, gericht op admins. Hier kunnen beheerders bestellingen bekijken, statussen aanpassen en gegevens beheren.",
                "De kern van het project was de configurator zelf, die ik met Three.js bouwde. Gebruikers kunnen verschillende onderdelen van hun schoen aanpassen, hun naam toevoegen, de schoen in een 3D-weergave ronddraaien en zelfs de presentatie veranderen, bijvoorbeeld door de schoen op een skateboard te tonen. Als extra feature kunnen gebruikers een afbeelding van hun gepersonaliseerde schoen downloaden. Het project combineerde technische complexiteit met een uitzonderlijke gebruikerservaring.",
                "Je kan het project bekijken via: https://swear-frontend.vercel.app/"
            ],
            images: [
                projectShoe,
                projectShoe2,
                projectShoe3
            ]
        },
        {
            id: 5,
            title: "Smart Energy Use AI",
            description: "Een AI systeem dat je aanbelevingen geeft op basis van je energieverbruik.",
            imgURL: projectAI,
            process: [
                "Voor het vak Machine Learning en AI ontwikkelde ik een project dat gericht was op het verminderen van energieverspilling met behulp van kunstmatige intelligentie.",
                "Ik begon met onderzoek naar verschillende AI-methoden en koos een innovatief en relevant onderwerp: het voorspellen van energieverspilling. Vervolgens ontwikkelde ik een AI-model dat, op basis van diverse inputgegevens, kan voorspellen of er sprake is van energieverspilling. Het model biedt gebruikers niet alleen voorspellingen, maar ook LIME-explanations die inzicht geven in welke factoren bijdragen aan het energieverbruik.",
                "Daarnaast geeft het systeem gepersonaliseerde tips om het energieverbruik te verminderen. Dit project combineerde geavanceerde technologie met praktische toepassingen, met als doel gebruikers bewuster en energie-efficiënter te laten leven."
            ],
            images: [
                projectAI,
                projectAI2,
                projectAI3
            ]
        },
        {
            id: 6,
            title: "Openbaar vervoer app",
            description: "Een geïntegreerde en toegangelijke app voor het openbaar vervoer.",
            imgURL: projectFitanza,
            process: [
                "Voor het vak User-Centered Design kreeg ik de opdracht om een app te ontwikkelen die verschillende soorten openbaar vervoer combineert en toegankelijk maakt voor een breed publiek.",
                "Ik begon met het toepassen van diverse UX-methodologieën, zoals desk research, field studies, user interviews, het formuleren van user need statements en het opstellen van customer journeys. Door deze processen door te lopen, kon ik de behoeften en verwachtingen van gebruikers nauwkeurig identificeren.",
                "Met deze inzichten werkte ik concrete ideeën uit, die ik vervolgens omzette in een prototype. Het resultaat was een app-concept dat gebruikers een centrale plaats biedt om onder andere hun routes te plannen en tickets te kopen, met een focus op toegankelijkheid en gebruiksvriendelijkheid."
            ],
            images: [
                projectFitanza,
                projectFitanza2,
                projectFitanza3
            ]
        },
        {
            id: 7,
            title: "3D design",
            description: "Enkele kleine projectjes in Render.",
            imgURL: projectFitanza,
            process: [
                "Tijdens het jaar maakte ik verschillende kleine 3D-projecten om de software Render onder de knie te krijgen. Deze projecten omvatten onder andere het ontwerpen van een karakter, het animeren van een blokje en het creëren van een gedetailleerde koffiekop.",
                "Deze oefeningen gaven me inzicht in de mogelijkheden van 3D-ontwerp en bereidden me voor op mijn eindopdracht: een 3D-model van een foodtruck. Met deze opdrachten ontwikkelde ik mijn vaardigheden in 3D-design en leerde ik creatieve ideeën omzetten in visueel aantrekkelijke ontwerpen."
            ],
            images: [
                projectFitanza,
                projectFitanza2,
                projectFitanza3
            ]
        },
        {
            id: 8,
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
            id: 9,
            title: "Website Château de L'Ardoisière",
            description: 'Een statische website voor een klant.',
            imgURL: projectKasteel,
            process: [
                "In mijn eerste jaar Toegepaste Informatica heb ik voor het vak Webontwikkeling 1 een statische website ontwikkeld. Het doel van dit project was om de basisprincipes van HTML en CSS onder de knie te krijgen en toe te passen in een praktijkgerichte opdracht.",
                "De website werd ontworpen voor een klant en opgebouwd in verschillende fasen, waarbij ik telkens nieuwe vaardigheden en technieken integreerde naarmate de cursus vorderde. Aanvankelijk richtte ik me op eenvoudige HTML-structuren om een solide basis te leggen. Vervolgens implementeerde ik CSS-styling om de lay-out en visuele presentatie van de website te verbeteren.",
                "Gedurende het project leerde ik geavanceerdere concepten, zoals het werken met semantische HTML, het toepassen van responsive design, en het creëren van een functionele interface. Deze iteratieve aanpak zorgde ervoor dat de website niet alleen functioneel, maar ook esthetisch aantrekkelijk werd, ondanks het gebruik van uitsluitend HTML en CSS.",
                "Dit project bood een waardevolle eerste ervaring in webontwikkeling en legde de basis voor meer complexe projecten in mijn latere studies."
            ],
            images: [
                projectKasteel2,
                projectKasteel3,
                projectKasteel4
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

