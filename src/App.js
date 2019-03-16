import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "ra-data-fakerest";

import data from "./data";
import homepage from "./homepage";

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider(data)}>
        <Resource name="homepage" {...homepage} />
      </Admin>
    );
  }
}

export default App;
