import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    const [services, setServices]= useState([]);
    useEffect(() => {
          fetch ('http://localhost:6030/services')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="services-container mt-5">
            <div className="text-center">
            <h5 className="text-secondary">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
               services.map(service => <Services service={service} key={service.name}></Services >)
            }
            </div>
            </div>
            </div>
          <Projects></Projects>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>
            
        </div>
    );
};

export default Home;