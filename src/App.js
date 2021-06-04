import React from "react";
import { MDBContainer, MDBNav, MDBNavbar, MDBNavbarBrand, MDBNavItem } from "mdbreact";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import HomePage from "./Components/HomePage";
import EmployeesList from "./Components/Employess/EmployeesList";
import EmployeeAdd from "./Components/Employess/EmployeeAdd";
import EmployeeEdit from "./Components/Employess/EmployeeEdit";

function App(){
  return (
    <div>
      <MDBContainer>
        <MDBNavbar className="shadow-none mb-3" expand="md">
          <MDBNavbarBrand>
            <strong className="black-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNav className = "nav-pills mx-0 mb-2 mt-1" >
            <MDBNavItem>
              {/* <MDBNavLink active to="#/hello">Active</MDBNavLink> */}
              <NavLink className = "nav-link"
              activeClassName = "active"
              to = "/"
              exact >
                Home
              </NavLink>
            </MDBNavItem>

            <MDBNavItem>
              {/* <MDBNavLink to="/employees">Employees</MDBNavLink> */}
              <NavLink className="nav-link" activeClassName="active" to="/employees">Employees</NavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBNavbar>


        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/employees" exact component={EmployeesList} />
          <Route path="/employees/add" exact component={EmployeeAdd} />
          <Route path="/employees/:id/edit" exact component={EmployeeEdit} />
        </Switch>

      </MDBContainer>



    </div>

  )
}

export default App
