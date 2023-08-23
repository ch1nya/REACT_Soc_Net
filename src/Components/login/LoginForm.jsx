import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={'input'} name={'login'} type={"text"} placeholder={"Login"} />
        </div>
        <div>
          <Field component={'input'} name={'password'} type={"text"} placeholder={"Password"} />
        </div>
        <div>
          <Field component={'input'} name={'rememberMe'} type={"checkbox"} placeholder={"Remember me"} />
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
  )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm