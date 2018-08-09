import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  let { userid, role } = props.user.user;
  let { component: Component, path, managerComp: Manager } = props;

  return (
    <Route
      path={path}
      render={props => {
        if (userid) {
          if (Manager && role === "Manager") {
            return <Manager {...props} />;
          } else {
            return <Component to="/dashboard" />;
          }
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps)(PrivateRoute);
