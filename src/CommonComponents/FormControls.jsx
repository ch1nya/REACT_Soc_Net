import React from "react";
import s from "./FormControls.module.css";

export const FormControl = ({ input, meta, element, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && (
        <div>
          <span>{meta.error}</span>
        </div>
      )}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
