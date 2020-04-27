import React, { Component } from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// core components
import NewsFeed from "views/NewsFeed/NewsFeed.js";
import BillView from "views/BillView/BillView.js";
import MPView from "views/MPView/MPView.js";
import CabinetView from "views/CabinetView/CabinetView.js";
import Sidebar from "components/Sidebar/SidebarNoRouting.js";

import routes from "routes.js";
import bgImage from "assets/img/parliamentvertical.jpg";

import {
    drawerWidth,
    transition,
} from "assets/jss/material-dashboard-react.js";

const wrapper = {
    position: "relative",
    top: "0",
    height: "100vh"
};

const mainPanelWithDrawer = {
    width: `calc(100% - ${drawerWidth}px)`,
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    overflowScrolling: "touch",
    padding: "30px 30px",
}

const mainPanelWithoutDrawer = {
    width: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    overflowScrolling: "touch",
    padding: "30px 30px",
}

const content = {
    minHeight: "calc(100vh - 123px)",
}


// This component is necessary if pocket parliament is being hosted on github pages as only 
// single page applications are supported.
class PocketParliamentNoRouting extends Component {
    constructor() {
      super()
      this.state = {
        view: "newsfeed",
      }
    }

    onNavClick = (prop) => {
        this.setState({view: prop.path});
    }
  
    render () {
        const {view} = this.state;

        if (view === "newsfeed") {
            return (
                <div style={{wrapper}}>
                    <Sidebar
                        routes={routes}
                        logoText={"Pocket Parliament"}
                        image={bgImage}
                        color={"green"}
                        onNavClick={this.onNavClick}
                        active={"newsfeed"}
                    />
                    <Hidden smDown>
                        <div style={mainPanelWithDrawer}>
                            <NewsFeed style={{content}} />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div style={mainPanelWithoutDrawer}>
                            <NewsFeed style={{content}} />
                        </div>
                    </Hidden>
                </div> 
            )
        } else if (view === "bills") {
            return (
                <div style={{wrapper}}>
                    <Sidebar
                        routes={routes}
                        logoText={"Pocket Parliament"}
                        image={bgImage}
                        color={"green"}
                        onNavClick={this.onNavClick}
                        active={"bills"}
                    />
                    <Hidden smDown>
                        <div style={mainPanelWithDrawer}>
                            <BillView style={{content}} />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div style={mainPanelWithoutDrawer}>
                            <BillView style={{content}} />
                        </div>
                    </Hidden>
                </div> 
            )
        } else if (view === "mps") {
            return (
                <div style={{wrapper}}>
                    <Sidebar
                        routes={routes}
                        logoText={"Pocket Parliament"}
                        image={bgImage}
                        color={"green"}
                        onNavClick={this.onNavClick}
                        active={"mps"}
                    />
                    <Hidden smDown>
                        <div style={mainPanelWithDrawer}>
                            <MPView style={{content}} />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div style={mainPanelWithoutDrawer}>
                            <MPView style={{content}} />
                        </div>
                    </Hidden>
                </div> 
            )
        } else if (view === "cabinet") {
            return (
                <div style={{wrapper}}>
                    <Sidebar
                        routes={routes}
                        logoText={"Pocket Parliament"}
                        image={bgImage}
                        color={"green"}
                        onNavClick={this.onNavClick}
                        active={"cabinet"}
                    />
                    <Hidden smDown>
                        <div style={mainPanelWithDrawer}>
                            <CabinetView style={{content}} />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div style={mainPanelWithoutDrawer}>
                            <CabinetView style={{content}} />
                        </div>
                    </Hidden>
                </div>
            )
        }
    }
}
  
export default PocketParliamentNoRouting;