import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Personal info</h5>
            <p>
              Mobile phone number: 061/259/5029
              <br />
              E-mail: dvasiljevic45@yahoo.com
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook">Facebook</i></a></li>
                <li><a href="#"><i class="fa fa-twitter">Twitter</i></a></li>
                <li><a href="#"><i class="fa fa-google-plus">Google+</i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i>YouTube</a></li>
                <li><a href="#"><i class="fa fa-linkedin-square">LinkedIn</i></a></li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;