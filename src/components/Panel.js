import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { label, value } =  this.props;
    // const label = this.props.label;
    // const value = this.props.value;
    //const key = this.props.id
    //cont id = this.props.id
    return (
      <section
      className="dashboard__panel"
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;