import React, { useContext, Fragment } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { userAuth } = useContext(AuthContext);
  return (
    <section className="jumbotron p-10">
      <div className="d-flex flex-column container">
        <h1 style={{fontSize:"8rem"}}>GAPZ</h1>
        <h3>Secret Message service with full ANONYMITY</h3>
        <p style={{backgroundColor:"white",color:"black",height:"40%"}}>
          GAPZ is the web portal to message someone with 100% guarentee of anonymity. Create your Profile
          and obtain the Link and Send it to all your closed ones to check what do they 
          think about you.
        </p>
        <div className="d-flex justify-content-center mt-4">
          {userAuth ? (
            <Link to="/Profile" className="btn btn-primary px-3">
              Profile
            </Link>
          ) : (
            <Fragment>
              {" "}
              <Link to="/login" className="btn btn-primary mx-2 px-3">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary mx-2 px-3">
                Register
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
