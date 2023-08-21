import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'



// receive auth info from state
let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

const WithAuthRedirect = (Component) => {
  
  class RedirectComponent extends React.Component{   
  render(){
    // chech auth status
  if (!this.props.isAuth){
          return <Navigate to="/login"/>
      }  
      // return component with checked auth status
    return   <Component {...this.props} />}
  }
// added functinality to check auth status here and connected that to wraped component 
let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent) 
// and return all of it to here 
return ConnectedAuthRedirectComponent}

export default WithAuthRedirect