import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  let { component: Component, user, path, userComp } = props;
  return (
    <Route
      path={path}
      render={props => {
        if (user.currentUser.userid) {
          if (user.currentUser.role === "Manager") {
            return <Component {...props} />;
          } else {
            return <userComp to="/" />;
          }
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

// const mapStateToProps = state => state;

// export default connect(mapStateToProps, null)(PrivateRoute)
// <PrivateRoute path="/dashboard/manager" component={ManagerDashboard} userComp={MainDashboard}/>```
