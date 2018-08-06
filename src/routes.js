import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MainDashboard from "./Components/Dashboards/Main_Dashboard";
import ManagerDashboard from "./Components/Dashboards/Manager_Dashboard";
import UserDashboard from "./Components/Dashboards/User_Dashboard";
import Form from "./Components/Form/Form";
import SpecificationsDashboard from "./Components/Dashboards/Specifications_Dashboard";
import Product from "./Components/Product/Product";
import Route_Not_Found from "./Route_Not_Found";
import FormSms from "./Components/Form/FormSms";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route exact path="/dashboard" component={MainDashboard} />
    <Route path="/dashboard/manager" component={ManagerDashboard} />
    <Route path="/dashboard/user" component={UserDashboard} />
    <Route
      path="/products/specifications"
      component={SpecificationsDashboard}
    />
    <Route path="/form" component={Form} />
    <Route path="/product/create" component={Product} />
    <Route path="/sms" component={FormSms} />
    <Route path="*" component={Route_Not_Found} />
  </Switch>
);
