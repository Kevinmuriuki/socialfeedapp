import { Row, Col, Card, Container } from 'react-bootstrap';
import Online from '../online/Online';
import { Users } from '../../dummyData'

export default function Rightbar() {
  const giftImg = {
    width: '40px',
    height: '40px',
    margin: '0',
    padding: '0'
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
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))} 
      </Container>
    </Col>
  )
}
