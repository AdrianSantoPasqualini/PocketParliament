import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import MissingPhotoAvatar from "assets/img/MissingPhotoAvatar.jpg";


const useStyles = makeStyles(styles);

export default function MPCard({name, image, party, riding}) {
    const classes = useStyles();
    let partyColor;
    if (party === "Liberal") {
        partyColor = "danger";
    } else if (party === "Conservative") {
        partyColor = "info";
    } else if (party === "NDP") {
        partyColor = "warning";
    } else if (party === "Green") {
        partyColor = "success";
    } else if (party === "Bloc") {
        partyColor = "bloc";
    } else {
        partyColor = "independent";
    }

    let mpImageSrc;
    if (image) {
        mpImageSrc = "http://api.openparliament.ca" + image;
    } else {
        mpImageSrc = MissingPhotoAvatar;
    }
    
    return (
        <div>
        <Card>
            <CardHeader color={partyColor} stats style={{textAlign: "center"}}>
                <img className={classes.MPImage}
                    alt="mpicon" 
                    src={mpImageSrc} />
            </CardHeader>
            <CardBody>
                <h3 className={classes.cardTitleCenter}>{name}</h3>
            </CardBody>
            <CardFooter stats>
                <div style={{width: "100%", textAlign: "center"}}>
                    {riding}
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}
