import React from "react";
import {LoginReduxForm} from "./LoginForm";
import { login,logout } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const Login = (props) => {
  const onSubmit  = (formData) => {
    props.login(formData.email, formData.password,formData.rememberMe)
    console.log(formData)
  }

  if (props.isAuth){
    return <Navigate to={'/profile'}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login})(Login);
