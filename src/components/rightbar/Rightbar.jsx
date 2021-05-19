import { Row, Col, Card, Container } from 'react-bootstrap';

export default function Rightbar() {
  const giftImg = {
    width: '40px',
    height: '40px',
    margin: '0',
    padding: '0'
  }

  const rightbarOnline = {
    width: '12px',
    height: '12px',
    top: '-2px',
    right: 0,
  }

  return (
    <Col sm={4} className="mt-4">
      <Row>
        <Col>
          <Row>
            <img className="img-fluid ml-2" src="/statics/gift.png" alt="" style={giftImg}/>
            <Col md={10}>
              <span style={{ fontWeight: 300 }}><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
            </Col>
          </Row>
        </Col>
      </Row> 
      <Card className="shadow mx-0 my-5">
        <Card.Img className="img-fluid" src="/statics/ad.png" alt=""/>
      </Card>
      <Container>
        <h4>Online Friends</h4>
        <Row className="mb-4">
            <div className="position-relative">
              <img className="img-fluid ml-2  rounded-circle " src="/statics/person/1.jpeg" alt="" style={giftImg}/>
              <span className="bg-success rounded-circle position-absolute" style={rightbarOnline}></span>
            </div>
            <Col md={10}>
              <span style={{ fontWeight: 500 }}>Ann Doe</span>
            </Col>
          </Row>
          <Row className="mb-4">
            <div className="position-relative">
              <img className="img-fluid ml-2  rounded-circle " src="/statics/person/3.jpeg" alt="" style={giftImg}/>
              <span className="bg-success rounded-circle position-absolute" style={rightbarOnline}></span>
            </div>
            <Col md={10}>
              <span style={{ fontWeight: 500 }}>Ann Doe</span>
            </Col>
          </Row>
          <Row className="mb-4">
            <div className="position-relative">
              <img className="img-fluid ml-2  rounded-circle " src="/statics/person/2.jpeg" alt="" style={giftImg}/>
              <span className="bg-success rounded-circle position-absolute" style={rightbarOnline}></span>
            </div>
            <Col md={10}>
              <span style={{ fontWeight: 500 }}>Ann Doe</span>
            </Col>
          </Row>
      </Container>
    </Col>
  )
}
