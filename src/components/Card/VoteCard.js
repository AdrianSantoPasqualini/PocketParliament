import React, { Component } from 'react';


// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

const stats = {
    color: "#3C4858",
    fontSize: "12px",
    lineHeight: "22px",
    margin: "0px",
};

class BillCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            votes: {}
        }
    }
    
    componentWillMount() {
        fetch('http://billsearch.herokuapp.com' + this.props.url)
            .then(response => response.json())
            .then(voteList => {
            this.setState({votes: voteList});
            });
    }
  
    render() {
        const {votes} = this.state;
        if (votes.totalSize !== 0) {
            return (
                <div style={{overflowY: "auto", maxHeight: "310px"}}>
                    {votes.data && votes.data.map((vote, i) => {
                        return(
                            <Card key={vote.id} style={{marginTop: "10px"}}>
                                <CardHeader>
                                    <h5 style={{margin: "0px"}}>{vote.title.split(",")[0]}</h5>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer  style={stats}>
                                        <GridItem xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0", marginBottom: "15px", marginTop: "5px", minHeight: "80px"}}>{"Description:"}</h5>
                                        </GridItem>
                                        <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0", marginBottom: "15px", marginTop: "5px", minHeight: "80px"}}>{vote.description}</h5>
                                        </GridItem>
                                        <GridItem xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0", marginBottom: "15px"}}>{"Votes For:"}</h5>
                                        </GridItem>
                                        <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0", marginBottom: "15px"}}>{vote.yeas}</h5>
                                        </GridItem>
                                        <GridItem xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0", marginBottom: "15px"}}>{"Votes Against:"}</h5>
                                        </GridItem>
                                        <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0", marginBottom: "15px"}}>{vote.nays}</h5>
                                        </GridItem>
                                        <GridItem xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0"}}>{"Result:"}</h5>
                                        </GridItem>
                                        <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                            <h5 style={{margin: "0"}}>{vote.result}</h5>
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                                <CardFooter>
                                <div className={stats} style={{display: "flex", alignItems: "center"}}>
                                    <AccessTime style={{color: "#adadad", marginRight: "5px"}} /> {vote.date}
                                </div>
                                </CardFooter>
                            </Card>
                            );
                    })}
                </div> 
            );
        } else {
            return (<h4 style={{color: "#3C4858", textAlign: "center"}}>There have been no votes on this bill in the current session</h4>)
        }
    };
}

export default BillCard;
