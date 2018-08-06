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
            return <userComp to="/dashboard" />;
          }
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

// const mapStateToProps = state => state;

// export default connect(mapStateToProps, null)(PrivateRoute)
// <PrivateRoute path="/dashboard/manager" component={ManagerDashboard} userComp={MainDashboard}/>```

// import React from 'react';
// import {connect} from 'react-redux';
// import {Route, Redirect} from 'react-router-dom';

// <DifferentRoute path="/dashboard" managerComp={managerDash} userComp={userDash}/>
// <DifferentRoute path="/forms" managerComp={managerForms} userComp={userForms}/>

// const DifferentRoute = (props) => {
//   let {component: Component, user, path, managerComp, userComp} = props;

//   return(
//     <Route path={path} render={props => {
//       if(user.currentUser.user_id) {
//         if(user.currentUser.role === 'manager') {
//           return <managerComp />
//         } else {
//           return <userComp />
//         }
//       } else {
//         return <Redirect to="/" />
//       }
//     }} />
//   );
// }

// const mapStateToProps = state => state;

// export default connect(mapStateToProps, null)(DifferentRoute)
