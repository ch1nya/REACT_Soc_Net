import React from "react";
import { Field } from "redux-form";
import { required,minLengthCreator,maxLengthCreator } from "../../../utils/Validators/Validators";


let maxLength10 = maxLengthCreator(10)
let minLength3 = minLengthCreator(3)


const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostBody' placeholder="Input your post text" validate={[required, maxLength10, minLength3]}/>
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  );
};

export default MyPostsForm;
