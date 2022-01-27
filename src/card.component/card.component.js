import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col,Row , Button, Image} from 'react-bootstrap'
import './card.component.css'
const Card = () => {
    let cardImage = "asserts/images/adobestock.jpeg"
    let cardTitle = "Camping in Western Australia";
    let cardText = "The Australian West coast is a camper’s heaven. Endless miles of desert roads leading to secret beaches, vast canyons and crystal clear rivers, and the very few people you are likely to meet on your journey will be some of the most easy-going characters you’ll find anywhere in the world."
    let buttonContent = "Read More";
    return (
        <div className = "Card">
            <Container>
                <Row>
                    <Col xs = {4} id = "description">
                        <div className = "card-title">
                            {cardTitle}
                        </div>
                        <div className = "card-text">
                            {cardText}
                        </div>
                        <Button className = "read-more-button">
                            {buttonContent}
                        </Button>
                    </Col>
                    <Col xs = {8} id = "photo">
                        <img src={cardImage} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Card;
