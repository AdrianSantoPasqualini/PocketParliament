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

export default function NewsCard({title, description, date, tagline}) {
    const classes = useStyles();
    return (
        <div>
            <Card chart>
                <CardHeader color="success">
                    <h4 className={classes.cardTitleWhite}>
                        {tagline}
                    </h4>
                </CardHeader>
                <CardBody>
                <h4 className={classes.cardTitle}>{title}</h4>
                <p className={classes.cardCategory}>
                    {description}
                </p>
                </CardBody>
                <CardFooter chart>
                <div className={classes.stats}>
                    <AccessTime /> {date}
                </div>
                </CardFooter>
            </Card>
        </div>
    );
}
