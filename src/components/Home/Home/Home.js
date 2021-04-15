import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';

import Header from '../Header/Header';

import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
          <Projects></Projects>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>
            
        </div>
    );
};

export default Home;