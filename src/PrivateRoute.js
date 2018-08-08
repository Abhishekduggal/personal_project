import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  console.log(props);
  let { component: Component, user, path, userComp } = props;
  return (
    <h1> Private Route</h1>
    // <Route
    //   path={path}
    //   render={props => {
    //     // if (user.currentUser.userid) {
    //     //   if (user.currentUser.role === "Manager") {
    //     //     return <Component {...props} />;
    //     //   } else {
    //     //     return <userComp to="/dashboard" />;
    //     //   }
    //     // } else {
    //       return <Redirect to="/login" />;
    //     }
    //   }}
    // />
  );
};
const mapStateToProps = state => state;

// export default PrivateRoute;
export default connect(
  mapStateToProps,
  null
)(PrivateRoute);

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
