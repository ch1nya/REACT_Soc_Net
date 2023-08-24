import React from "react";
import { Field } from "redux-form";
import s from "./Dialogs.module.css";

const DialogsAddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}> 
      <div>
        <Field
          component={"textarea"}
          name={"newMessageBody"}
          placeholder="Enter your message"
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
