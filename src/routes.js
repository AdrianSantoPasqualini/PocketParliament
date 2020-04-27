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
    path: "newsfeed",
    name: "Newsfeed",
    icon: Notifications,
    component: NewsFeed,
    layout: "/"
  },
  {
    path: "bills",
    name: "Bills",
    icon: LibraryBooks,
    component: BillView,
    layout: "/"
  },
  {
    path: "mps",
    name: "MP's",
    icon: Person,
    component: MPView,
    layout: "/"
  },
  {
    path: "cabinet",
    name: "Cabinet Members",
    icon: Parliament,
    component: CabinetView,
    layout: "/"
  }
];

export default dashboardRoutes;

