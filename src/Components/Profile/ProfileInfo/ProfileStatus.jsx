import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditmode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditmode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span
              className={s.editableInput}
              onDoubleClick={this.activateEditmode}
            >
              {this.props.status || "NO status"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditmode}
              className={s.status}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
