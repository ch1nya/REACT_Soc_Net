import React from "react";
import { Field } from "redux-form";
import s from "./Dialogs.module.css";
import { required, maxLengthCreator, minLengthCreator} from "../../utils/Validators/Validators";
import { TextArea } from "../../CommonComponents/FormControls";

let maxLength10 =maxLengthCreator(50)
let minLength3 =minLengthCreator(3)



const DialogsAddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}> 
      <div>
        <Field
          component={TextArea}
          name={"newMessageBody"}
          placeholder="Enter your message"
          validate={[required, maxLength10, minLength3]}

        ></Field>
      </div>
      <div>
        <button className={s.addMessageButton}>
          Add Message
        </button>
      </div>
    </form>
  );
};

export default DialogsAddMessageForm;
