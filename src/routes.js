import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MainDashboard from "./Components/Dashboards/Main_Dashboard";
import ManagerDashboard from "./Components/Dashboards/Manager_Dashboard";
import UserDashboard from "./Components/Dashboards/User_Dashboard";
import Form from "./Components/Form/Form";
import SpecificationsDashboard from "./Components/Dashboards/Specifications_Dashboard";
import Create_Product from "./Components/Product/Create_Product";
import Create_Specification from "./Components/Product/Create_Specification";
import Route_Not_Found from "./Route_Not_Found";
import FormSms from "./Components/Form/FormSms";
import User_Facility_Chart from "./Components/Charts/Users_Facility_Chart";
import Rejects_Cost_Chart from "./Components/Charts/Rejects_Cost_Chart";
import Rejects_Chart from "./Components/Charts/Rejects_Chart";

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
    <Route exact path="/product/create" component={Create_Product} />
    <Route
      exact
      path="/specification/create/:productid"
      component={Create_Specification}
    />
    <Route path="/sms" component={FormSms} />
    <Route exact path="/chart/facility" component={User_Facility_Chart} />
    <Route exact path="/chart/rejects/cost" component={Rejects_Cost_Chart} />
    <Route exact path="/chart/rejects" component={Rejects_Chart} />
    <Route path="*" component={Route_Not_Found} />
  </Switch>
);
