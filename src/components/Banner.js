import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import portret from "../assets/img/cartoon portret.png";
import arrowIcon from "../assets/img/iconmonstr-arrow-down-circle-thin.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["UI Designer", "Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1 className="tagline">Mirte Theunis</h1>
                    <p></p><span className="wrap">{text}<span style={{ visibility: "hidden" }}>{toRotate[loopNum % toRotate.length]}</span></span><p></p>
                    <button className="ontdekmeer" onClick={() => console.log('connect')}><span>Ontdek meer <img src={arrowIcon} alt="arrow" className="arrow" /></span></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="img-container">
                    <img src={portret} alt="Cartoon portret" className="img-portret"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}