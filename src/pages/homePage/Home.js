import React from 'react';
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/navbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';

import { Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Row>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Row>
      
    </div>
  )
}
