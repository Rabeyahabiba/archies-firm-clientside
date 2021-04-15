import React from 'react';
import interior from '../../../images/icons/interior(1).png'
import plan from '../../../images/icons/plan.png'
import architectures from '../../../images/icons/architectures(1).png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Architecture',
        img: architectures,
        range: '$200-350'
},
{
    name: 'Interior-Design',
    img: interior,
    range: '$200-500'
},
{
    name: 'Design & Plan',
    img: plan,
    range: '$300-600'
}
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 className="text-secondary">OUR SERVICES</h5>
                <h2>WHAT WE'RE OFFERING</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;