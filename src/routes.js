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
import PrivateRoute from "./PrivateRoute";
import Privacy from "./Components/Footer/Privacy";
import FormDisplayTable from "./Components/Cards/FormDisplayTable";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route exact path="/privacy" component={Privacy} />

    <Route exact path="/dashboard" component={MainDashboard} />

    <PrivateRoute exact path="/dashboard/table" component={FormDisplayTable} />
    <PrivateRoute exact path="/form" component={Form} />
    <PrivateRoute
      path="/products/specifications"
      component={SpecificationsDashboard}
    />
    <PrivateRoute path="/sms" component={FormSms} />

    <PrivateRoute
      path="/form/edit"
      managerComp={UserDashboard}
      component={MainDashboard}
    />
    <PrivateRoute
      path="/dashboard/manager"
      managerComp={ManagerDashboard}
      component={MainDashboard}
    />
    <PrivateRoute
      exact
      path="/product/create"
      managerComp={Create_Product}
      component={MainDashboard}
    />
    <PrivateRoute
      exact
      path="/specification/create/:productid"
      managerComp={Create_Specification}
      component={MainDashboard}
    />

    <PrivateRoute
      exact
      path="/chart/facility"
      managerComp={User_Facility_Chart}
      component={MainDashboard}
    />
    <PrivateRoute
      exact
      path="/chart/rejects/cost"
      managerComp={Rejects_Cost_Chart}
      component={MainDashboard}
    />
    <PrivateRoute
      exact
      path="/chart/rejects"
      managerComp={Rejects_Chart}
      component={MainDashboard}
    />

    <Route path="*" component={Route_Not_Found} />
  </Switch>
);
