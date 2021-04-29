import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { UserContext } from '../../../App';



const AddService = () => {
  const { register, handleSubmit } = useForm();

  const [imageURL, setImageURL] = useState(null);
 
  const onSubmit = data => {
    const eventData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    };
    const url = `https://fathomless-gorge-61136.herokuapp.com/addService`;
    // console.log(eventData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)

    })
      .then(res => console.log('server side response'))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '2cbf656ef067a875593467e3a8e92081');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="container-fluid">
       <div className="row">
     <Sidebar />
     <div className="col-md-6 p-4">
      <h1> Add Service </h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <h4> Service Name</h4>
        <input name="name" defaultValue="Enter Name" ref={register} />
        </div>
        <div className="mb-3">
        <h4> Price </h4>
        <input name="price" defaultValue="Enter Price" ref={register} />
        </div>
        <div className="mb-3">
        <h4> Add Photo </h4>
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        </div>
        <input type="submit" />
      </form>
      </div>
      </div>
    </div>

// <div className="container-fluid">
// <div className="row">
//     <Sidebar />
//     <div className="col-md-10 p-4">
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-3">
//                 <label className="form-label">Service Name</label>
//                 <input type="text" ref={register} className="form-control" name="serviceName" placeholder="Service Name" />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Price</label>
//                 <input type="number" ref={register} className="form-control" name="servicePrice" placeholder="Service Price" />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Upload image:</label>
//                 <input type="file" onChange={handleImageUpload} className="form-control" placeholder="Image" />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Description</label>
//                 <textarea type="text" ref={register} className="form-control" name="serviceDescription" placeholder="Service Description..." rows="3" ></textarea>
//             </div>
//             <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//                 <button type="submit" className="btn btn-lg btn-primary">Add Service</button>
//             </div>
//         </form>
//     </div>
// </div>
// </div>
  );
};

export default AddService;