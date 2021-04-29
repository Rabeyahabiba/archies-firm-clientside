import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email,photoURL } = result.user;
        const signedInUser = { name: displayName, email, img: photoURL }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }
  
    return (
      //   <div className="login-page container">
      //   <div className="row align-items-center" style={{ height: "100vh" }}>
      //     <div className="col-md-6 shadow p-5">
      //       <div className="form-group">
      //         <label htmlFor="">User Name</label>
      //         <input type="text" className="form-control" />
      //       </div>
      //       <div className="form-group">
      //         <label htmlFor="">Password</label>
      //         <input type="password" className="form-control" />
      //       </div>
      //       <div className="form-group">
      //         <label htmlFor="" className="text-danger">Forgot your password?</label>
      //       </div>
      //       <div className="from-group mt-5">
      //         <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
              
      //       </div>
      //     </div>
      //     <div className="col-md-6 d-none d-md-block align-self-end">
      //       {/* <img className="img-fluid" src={LoginBg} alt="" /> */}
      //     </div>
      //   </div>
      // </div>

      <div className="form-signin text-center p-4 mt-5 bg-light">
            <form>
                <h1 className="h3 mb-3 fw-normal">Sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="pt-2">Or</p>
            </form>
            <button onClick={handleGoogleSignIn} className="w-100 btn btn-lg btn-danger" type=""><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></button>
        </div>
  
    );
};

export default Login;