import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import architecture from '../../../images/monument.jpg'
const HeaderMain = () => {
    return (
    //     <main style ={{height:'600px'}} className= "row d-flex align-items-center">
    //     <div className="col-md-4 offset-md-1">
    //         <p style={{color: 'black'}}> WE PROMISE TO BUILD</p>
    //        <h1 style={{color: 'black'}}> THE NEW <br/> FUTURE OF <br/> ARCHITECTURE</h1>
    //        <p className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas optio voluptate ad voluptas deleniti eos accusamus possimus autem aut praesentium fugiat voluptates laborum, deserunt corrupti. Aut enim facere animi optio eligendi voluptas minima nisi tempora, tempore ex fugiat in labore quos. Nihil eius veniam totam voluptatibus sed, voluptatem alias?</p>
    //        <button className="btn btn-dark"> LEARN MORE</button>
    //     </div>
    //  {/* <div className="col-md-6">
    //    <img src={architecture} alt="" className="img-fluid"/>
    //  </div> */}
    // </main>
 <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={4} className="p-md-5 order-2 order-md-1">
                    <Fade left duration={2000} distance="40px">
                    <p style={{color: 'white'}}> WE PROMISE TO BUILD</p>
                        <h1 style={{color: 'white'}}> THE NEW <br/> FUTURE OF <br/> ARCHITECTURE</h1>
                        <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas optio voluptate ad voluptas deleniti eos accusamus possimus autem aut praesentium fugiat voluptates laborum, deserunt corrupti. Aut enim facere animi optio eligendi voluptas minima nisi tempora, tempore ex fugiat in labore quos. Nihil eius veniam totam voluptatibus sed, voluptatem alias?</p>
                        <Button
                            className="btn-main"
                            href="#services">
                            Get Started
                        </Button>
                    </Fade>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src={architecture} fluid />
                    </Fade>
                </Col>
            </Row>
        </Container>

    );
};

export default HeaderMain;