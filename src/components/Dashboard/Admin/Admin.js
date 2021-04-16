import React from 'react';
import { useHistory } from 'react-router';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Admin = () => {  
    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
                
            </div>
           
            <div className="col-md-5 d-flex justify-content-center">
            <AddService></AddService>
            </div>
            {/* <div className="col-md-5">
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div> */}

        </div>
    </section>
    );
};

export default Admin;