import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "wo",
  };
  activateEditmode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditmode() {
    this.setState({
      editMode: false,
    });
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span
              className={s.editableInput}
              onDoubleClick={this.activateEditmode.bind(this)}
            >
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditmode.bind(this)}
              className={s.status}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
