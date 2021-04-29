import React from 'react';
// import interior from '../../../images/icons/interior(1).png'
// import plan from '../../../images/icons/plan.png'
// import architectures from '../../../images/icons/architectures(1).png'
// import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useHistory } from 'react-router';
import './Services.css'

// const serviceData = [
//     {
//         name: 'Architecture',
//         img: architectures,
//         range: '$200-350'
// },
// {
//     name: 'Interior-Design',
//     img: interior,
//     range: '$200-500'
// },
// {
//     name: 'Design & Plan',
//     img: plan,
//     range: '$300-600'
// }
// ]
const Services = ({ service }) => {
    const history = useHistory()
    const handleOrder = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
            // <div className="col-md-4 text-center ">
            //     <img style={{ height: '50px' }} src={service.imageURL} alt="" />
            //     <h5 className="mt-3 mb-3">{service.name}</h5>

            //     <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            //     <small className="text-dark"> Range : {service.price} </small>
            //     <br />
            //     <button onClick={() => handleOrder(service._id)} type="button" class="btn btn-dark btn-sm">Book Appointment</button>
            // </div>     

            <div className="col-md-4">
            <div className="card text-center service-card" >
            <img style={{ height: '70px', width: '100px', marginLeft: 'auto', marginRight: 'auto'}} src={service.imageURL} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <h5 className="pe-2">Price: {service.price}</h5>
                        <br />
                        <button onClick={() => handleOrder(service._id)} type="button" class="btn btn-dark btn-sm">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Services;