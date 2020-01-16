/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Parliament from "@material-ui/icons/AccountBalance";

import NewsFeed from "views/NewsFeed/NewsFeed.js";
import BillView from "views/BillView/BillView.js";
import MPView from "views/MPView/MPView.js";
import CabinetView from "views/CabinetView/CabinetView.js";

const dashboardRoutes = [
  {
    path: "/newsfeed",
    name: "Newsfeed",
    icon: Notifications,
    component: NewsFeed,
    layout: "/profile"
  },
  {
    path: "/bills",
    name: "Bills",
    icon: LibraryBooks,
    component: BillView,
    layout: "/profile"
  },
  {
    path: "/cabinet",
    name: "Cabinet Members",
    icon: Parliament,
    component: CabinetView,
    layout: "/profile"
  },
  {
    path: "/mps",
    name: "MP's",
    icon: Person,
    component: MPView,
    layout: "/profile"
  }
];

export default dashboardRoutes;

