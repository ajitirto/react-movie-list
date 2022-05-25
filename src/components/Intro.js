import { Col, Container, Row, Button } from "react-bootstrap";


const Intro = () => {
    return (
        <div className="Intro">
            <Container className="text-white text-center d-flex justify-content-center align-itemss-center">
                <Row>
                    <Col>
                        <div className="title"> Nonton Gratis</div>
                        <div className="title"> Gak Pake Karcis</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="dark"> Lihar Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Intro