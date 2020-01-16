import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

var formatName = (function () {
    var in_chrs   = 'àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ',
        out_chrs  = 'aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY', 
        chars_rgx = new RegExp('[' + in_chrs + ']', 'g'),
        transl    = {}, i,
        lookup    = function (m) { return transl[m] || m; };
  
    for (i=0; i<in_chrs.length; i++) {
      transl[ in_chrs[i] ] = out_chrs[i];
    }
  
    return function (s) { return s.replace(chars_rgx, lookup); }
})();


export default function CabinetCard({firstName, lastName, position}) {
    const classes = useStyles();
    return (
        <div>
            <Card style={{}}>
                <CardHeader style={{minHeight: "90px", display: "flex", justifyContent: "center", alignItems: "center"}} color="success">
                    <h4 style={{textAlign: "center"}} className={classes.cardTitleWhite}>
                        {position}
                    </h4>
                </CardHeader>
                <CardBody style={{display: "flex", }}>
                    <img 
                        alt="mpicon" 
                        src={"http://api.openparliament.ca/media/polpics/" + 
                            formatName(firstName).toLowerCase().replace("'", "").replace(".", "").replace(" ", "-") + "-" + 
                            formatName(lastName).toLowerCase().replace("'", "").replace(".", "").replace(" ", "-") + ".jpg"} />
                    <h4 style={{marginLeft: "20px"}} className={classes.cardTitle}>{firstName + " " + lastName}</h4>
                </CardBody>
                
            </Card>
        </div>
    );
}
