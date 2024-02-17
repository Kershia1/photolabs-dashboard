import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { id, label, value, onSelect } =  this.props;

    return (
      <section className="dashboard__panel" onClick={() => onSelect}>
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;

/**handleClick is a method that calls this.props.onSelect with the id of the panel. The onClick prop of the section element is set to this.handleClick, so handleClick will be called when the panel is clicked. */