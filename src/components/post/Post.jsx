import { Card, Row, Col } from 'react-bootstrap';
import { Users } from '../../dummyData'

export default function Post(posts) {
  console.log(posts)
  const style =  {
    fontWeight: 500,
    fontSize: '.8em'
  }

  const small =  {
    fontWeight: 400,
    fontSize: '.7em',
    color: '#757579'
  }

  const imgStyle = {
    width: '40px',
    height: '40px',
    cursor: 'pointer'
  }

  const pointer = {
    cursor: 'pointer'
  }

  const coverImg = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  }

  const user = Users.filter(u => u.id === posts.post.userId)[0];

  return (
    <>
      <Card className="shadow mb-5">
        <Row className="mx-2 mt-4">
          <Col className="d-flex align-items-center">
            <Card.Img style={pointer} className="rounded-circle" src={user.profilePicture} style={imgStyle}/>
            <span className="ml-2" style={style}>{user.username}</span>
            <span className="ml-2" style={small}>{posts.post.date}</span>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <span style={pointer}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </span>
          </Col>
        </Row>
        <Card.Body>
          <Card.Text>{posts.post?.desc}</Card.Text>
          <Card.Img className="img-fluid" src={posts.post.photo} style={coverImg}/>
          <Row className="mx-2 mt-4">
            <Col className="d-flex align-items-center">
              <Card.Img className="rounded-circle mr-2" src="/statics/like.png" style={imgStyle}/>
              <Card.Img className="rounded-circle" src="/statics/heart.png" style={imgStyle}/>
              <div>
                <span className="ml-2" style={small}><span>{posts.post.like}</span> people liked it</span>
              </div>
            </Col>
            <Col className="d-flex justify-content-end align-items-center"  style={pointer}><span>{posts.post.comment}</span> comments</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
