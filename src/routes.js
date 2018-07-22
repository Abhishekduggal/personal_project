import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MainDashboard from "./Components/Dashboards/Main_Dashboard";
import ManagerDashboard from "./Components/Dashboards/Manager_Dashboard";
import UserDashboard from "./Components/Dashboards/User_Dashboard";
import Form_1 from "./Components/Form/Form_1";
import Form_2 from "./Components/Form/Form_2";
import Form_3 from "./Components/Form/Form_3";
import Route_Not_Found from "./Route_Not_Found";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route exact path="/dashboard" component={MainDashboard} />
    <Route path="/dashboard/manager" component={ManagerDashboard} />
    <Route path="/dashboard/user" component={UserDashboard} />
    <Route path="/form/1" component={Form_1} />
    <Route path="/form/2" component={Form_2} />
    <Route path="/form/3" component={Form_3} />
    <Route path="*" component={Route_Not_Found} />
  </Switch>
);
