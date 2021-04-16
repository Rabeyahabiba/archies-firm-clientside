import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    const eventData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    };
    const url = `http://localhost:6030/addService`;
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
    <div>
      <h1> Add Product </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4> Service Name</h4>
        <input name="name" defaultValue="Enter Name" ref={register} />
        <br />
        <h4> Price </h4>
        <input name="price" defaultValue="Enter Price" ref={register} />
        <br />
        <h4> Add Photo </h4>
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;