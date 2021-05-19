import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'

export default function Share() {
  const style = {
    fontSize: '.6em',
    fontWeight: '500'
  }


  const shareInput = {
    border: 'none',
    width: '80%',
    outline: 'none'
  }

  return (
    <div className="mt-4">
      <Card className="shadow">
        <Row className="mt-4 mb-2 mx-2 d-flef align-items-center">
          <Card.Img variant="top" src="/statics/person/1.jpeg" className="ml-4 rounded-circle img-fluid" style={{ width: '50px', height: '50px'}}  />
          <Card.Text className="col-8" >
            <input type="text" placeholder="Whats in your mind Kevin?" className="outline-none" style={shareInput} />
          </Card.Text>
        </Row>
        <hr className="w-80 mx-4"/>
        <Card.Body>
          <Row className="mx-2 mb-4 d-flef justify-content-center align-items-center">
            <Col>
              <span className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="tomato"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z"/></svg>
              </span>
              <Card.Text style={style}>Photo or Video</Card.Text>
            </Col>
            <Col>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="blue"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/></svg>
                </span>
              <Card.Text style={style}>Tag</Card.Text>
            </Col>
            <Col>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="green"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <Card.Text  style={style}>Location</Card.Text>
            </Col>
            <Col>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="goldenrod"><g><rect fill="none" height="24" width="24"/></g><g><g/><path d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M8.5,8 C9.33,8,10,8.67,10,9.5S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M12,18c-2.28,0-4.22-1.66-5-4h10C16.22,16.34,14.28,18,12,18z M15.5,11c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8S17,8.67,17,9.5S16.33,11,15.5,11z"/></g></svg>
                </span>
              <Card.Text style={style}>Feelings</Card.Text>
            </Col>
            <Col>
              <Button className="btn-success">Share</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
