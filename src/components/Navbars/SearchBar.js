import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

function onEnter() {

}

export default function SearchBar({onTextChange, headerText, placeholderText}) {
    const classes = useStyles();  
    return (
        <div>
            <GridContainer style={{display: "flex", alignItems: "center",}}>
                <GridItem xs={6} sm={6} md={6}>
                    <h3 style={{margin: "0", marginLeft: "45px"}}>{headerText}</h3>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className={classes.searchWrapper}>
                        <CustomInput
                            formControlProps={{
                                className: classes.margin + " " + classes.search
                            }}
                            inputProps={{
                                placeholder: placeholderText,
                                inputProps: {
                                    "aria-label": "Search",
                                    
                                },
                            }}
                            changeAction={onTextChange}
                            
                        />
                        <Button clickAction={onEnter} color="white" aria-label="edit" justIcon round>
                            <Search />
                        </Button>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    );
}
