import React from 'react';
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
// import swal from 'sweetalert';
// import emailjs from 'emailjs-com';
const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    // const onSubmit = data => {
    //     const loading = toast.loading('Please wait...!');
    //     emailjs.send('gmail', 'service_c91cvuq', data, 'user_gzTJCOm9tUE7eLTkHHKYv')
    //         .then((res) => {
    //             toast.dismiss(loading);
    //             if (res.text === "OK") {
    //                 reset();
    //                 return swal("Thank you!", "Your message was sent successfully.", "success");
    //             }
    //             swal("Sorry!", "Something went wrong. Please try again later", "error");
    //         }, (err) => {
    //             toast.dismiss(loading);
    //             swal("Sorry!", "Something went wrong. Please try again later", "error")
    //         });
    // };
    
         

    return (
    //     <section className="contact my-5 py-5">
    //     <div className="container">
    //         <div className="section-header text-center text-white mb-5">
    //              <h5 className="text-primary">Contact</h5>
    //              <h1>Always  connect with us</h1>
    //         </div>
    //         <div className="col-md-9 mx-auto">
    //             <form action="">
    //                 <div className="form-group">
    //                     <input type="text" className="form-control" placeholder="Email Address *"/>
    //                 </div>
    //                 <div className="form-group">
    //                     <input type="text" className="form-control" placeholder="Subject *"/>
    //                 </div>
    //                 <div className="form-group">
    //                     <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
    //                 </div>
    //                 <div className="form-group text-center">
    //                     <button type="button" className="btn btn-primary"> Submit </button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // </section>

     <section id="contact" className="contact-section">
            <Fade bottom duration={2500} distance="40px">
                <Container>
                    <div className="text-center">
                        <h1>contact us</h1>
                        <h4>We'd love to hear from you!</h4>
                    </div>
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <form>
                        <Row className="input-container">
                            <Col xs={12}>
                                <div className="styled-input wide">
                                    <input type="text" {...register("name", { required: true })} required />
                                    <label>Name</label>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="styled-input">
                                    <input type="text" {...register("email", { required: true })} required />
                                    <label>Email</label>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="styled-input" style={{ float: "right" }}>
                                    <input type="text" {...register("phone", { required: true })} required />
                                    <label>Phone Number</label>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="styled-input wide">
                                    <textarea {...register("message", { required: true })} required />
                                    <label>Message</label>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <button className="btn-lrg submit-btn btn-main">Send Message</button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </Fade>
        </section>
    );
};

export default Contact;