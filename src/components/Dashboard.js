import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

//Mock Data
const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza"
  }
];


class Dashboard extends Component {
  state = {
    loading: false
  }

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = data.map(dataMock => {
      return <Panel key={dataMock.id} id={dataMock.id} label={dataMock.label} value={dataMock.value} />;
    })

    return <main className={dashboardClasses}>
      {panels}
    </main>;
  }
}

/**
 * equivalent to:
 * function Dashboard(props) {
  const dashboardClasses = classnames("dashboard");
  return <main className={dashboardClasses} />;
}
 * 
 */


export default Dashboard;



  /** Map over the data array and create a new Panel for each of the four data objects. Render the panels array as children of the main element..
   * 
   * essential from panels as     // const label = this.props.label;
    // const value = this.props.value;
    //const key = this.props.id
    //cont id = this.props.id
  */


/**
 * Compass answer class Dashboard extends Component {
  state = {
    loading: false
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = data.map(panel => (
      <Panel
        key={panel.id}
        id={panel.id}
        label={panel.label}
        value={panel.value}
      />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}
 */