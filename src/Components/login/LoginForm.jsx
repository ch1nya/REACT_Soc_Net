import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../CommonComponents/FormControls";
import { required } from "../../utils/Validators/Validators";
import s from '../../CommonComponents/FormControls.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          type={"input"}
          placeholder={"Email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          type={"checkbox"}
          placeholder={"Remember me"}
          component={Input}
        />
        Remember me
      </div>
      {props.error && <div className={s.formSummaryError}>
        {props.error} </div>}
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginForm;
