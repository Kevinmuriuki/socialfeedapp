import React from 'react';
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/navbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';

import { Container, Row } from 'react-bootstrap';

export default function Home() {
  const style = {
    margin: "0 auto",
    width: '100%',
  }
  return (
    <div style={style}>
      <Navbar />
      <Row>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Row>
      
    </div>
  )
}
