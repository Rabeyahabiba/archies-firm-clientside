import React from 'react';
// import interior from '../../../images/icons/interior(1).png'
// import plan from '../../../images/icons/plan.png'
// import architectures from '../../../images/icons/architectures(1).png'
// import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useHistory } from 'react-router';


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
            <div className="col-md-4 text-center">
                <img style={{ height: '50px' }} src={service.imageURL} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>

                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                <small className="text-dark"> Range : {service.price} </small>
                <br />
                <button onClick={() => handleOrder(service._id)} type="button" class="btn btn-dark btn-sm">Book Appointment</button>
            </div>     
    );
};

export default Services;