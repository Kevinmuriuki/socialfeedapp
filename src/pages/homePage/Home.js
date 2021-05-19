import React from 'react';
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/navbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';

import { Row, Col } from 'react-bootstrap';

export default function Home() {
  const style = {
    maxWidth: '100%',
  }
  return (
    <div>
      <Navbar />
      <Row style={style}>
        <Sidebar />
        <Col sm={9}>
          <Row  className="mx-2">
            <Feed/>
            <Rightbar />
          </Row>
        </Col>
      </Row>
      
    </div>
  )
}
