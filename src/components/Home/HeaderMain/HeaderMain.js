import React from 'react';
import architecture from '../../../images/architecture.jpg'
const HeaderMain = () => {
    return (
        <main style ={{height:'600px'}} className= "row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <p style={{color: 'white'}}> WE PROMISE TO BUILD</p>
           <h1 style={{color: 'white'}}> THE NEW <br/> FUTURE OF <br/> ARCHITECTURE</h1>
           <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas optio voluptate ad voluptas deleniti eos accusamus possimus autem aut praesentium fugiat voluptates laborum, deserunt corrupti. Aut enim facere animi optio eligendi voluptas minima nisi tempora, tempore ex fugiat in labore quos. Nihil eius veniam totam voluptatibus sed, voluptatem alias?</p>
           <button className="btn btn-secondary"> LEARN MORE</button>
        </div>
     {/* <div className="col-md-6">
       <img src={architecture} alt="" className="img-fluid"/>
     </div> */}
    </main>
    );
};

export default HeaderMain;