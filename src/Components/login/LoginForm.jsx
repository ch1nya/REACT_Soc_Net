import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../CommonComponents/FormControls";
import { required } from "../../utils/Validators/Validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"login"}
          type={"input"}
          placeholder={"Login"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={"password"}
          type={"input"}
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
      </div>
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
