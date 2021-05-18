import "./topbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Navbar sticky="top" bg="primary" expand="md" className="justify-content-end">
      <Container>
        <Navbar.Brand href="#home">SocialApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mx-md-auto mb-2 mb-lg-0  d-flex align-items-center">
            <div className="searchbar">
              <span className="serchIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </span>
              <input
                placeholder="Search for friend, post or video"
                className="searchInput"
              />
            </div>
            <Nav.Link className="mx-md-5" href="#home">Homepsge</Nav.Link>
            <Nav.Link href="#link">Timeline</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex mx-md-auto mb-2 mb-lg-0">
          <div className="col-2 topbarIconItem">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </span>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="col-2 topbarIconItem">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
            </span>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="col-2 topbarIconItem">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff" ><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </span>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="col-4">
            <img src="/statics/person/1.jpeg" alt="" className="topbarImg"/>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}
