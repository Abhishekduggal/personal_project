import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  console.log(props);

  // if (!props.user.user.userid) {
  //   return <Redirect to={"/login"} />;
  // }

  let { userid, role } = props.user.user;
  // console.log(userid);
  let { component: Component, path, managerComp: Manager } = props;

  return (
    // <h1> Private Route</h1>
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

// export default PrivateRoute;
export default connect(mapStateToProps)(PrivateRoute);

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
