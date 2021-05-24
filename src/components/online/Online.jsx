import { Row, Col } from 'react-bootstrap';

export default function Online({user}) {
  const procImg = {
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
      <Row className="mb-4">
      <div className="position-relative">
        <img className="img-fluid ml-2  rounded-circle " src={user.profilePicture} alt="" style={procImg}/>
        <span className="bg-success rounded-circle position-absolute" style={rightbarOnline}></span>
      </div>
      <Col md={10}>
        <span style={{ fontWeight: 500 }}>{user.username} </span>
      </Col>
    </Row>
  )
}
