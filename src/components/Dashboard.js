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


function Dashboard(props) {
  const [state, setState] = React.useState({ focused:null});

    selectPanel(id){
    this.setState({
     focused: id
    });
   }
}

// class Dashboard extends Component {
  state = {
    loading: false,
    focused: null // ? maybe track a specific panel(id) that is clicked? then
    //use that to change the state of the panel clicked? toggles to each id
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      //if focused is true, then apply the class "dashboard--focused"
      "dashboard--focused": this.state.focused
    });


    if (this.state.loading) {
      return <Loading />;
    }

      //Use the this.state.focused value to filter panel data before 
      //converting it to components.

    // const panels = data.map(dataMock => {

    //   return <Panel key={dataMock.id} id={dataMock.id} label={dataMock.label} value={dataMock.value} />;
    // })

//If this.state.focused is null then return true for every panel.
// If this.state.focused is equal to the Panel, then let it through the filter.
    const panels = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
   .map(panel => (
    <Panel
     key={panel.id}
     id={panel.id}
     label={panel.label}
     value={panel.value}
     onSelect={event => this.selectPanel(panel.id)}// we are passing a reference to the instance method as a prop.
    />
   ));

    return <main className={dashboardClasses}>
      {panels}
    </main>;
  }

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


/**
 * equivalent to:
 * function Dashboard(props) {
  const dashboardClasses = classnames("dashboard");
  return <main className={dashboardClasses} />;
}
 * 
 react tutorial 
https://stackoverflow.com/questions/41027663/how-to-map-an-array-of-objects-in-react
 */