import React from "react";
import { Field } from "redux-form";
import {
  required,
  minLengthCreator,
  maxLengthCreator,
} from "../../../utils/Validators/Validators";
import { TextArea } from "../../../CommonComponents/FormControls";

let maxLength10 = maxLengthCreator(50);
let minLength3 = minLengthCreator(3);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newPostBody"
          placeholder="Input your post text"
          validate={[required, maxLength10, minLength3]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default MyPostsForm;
