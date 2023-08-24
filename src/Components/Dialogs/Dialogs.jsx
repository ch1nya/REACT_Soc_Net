import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import DialogsAddMessageForm from "./DialogsAddMessageForm";
import { reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.dialogs.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageElement = React.createRef();

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>

      <div className={s.messages}>
        <p className={s.message}>{messagesElements}</p>
        <DialogsAddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const DialogsAddMessageReduxForm = reduxForm({ form: "DialogsAddMessageForm" })(
  DialogsAddMessageForm
);

export default Dialogs;
