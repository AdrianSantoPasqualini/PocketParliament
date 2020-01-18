import React, { Component } from 'react';

// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import VoteCard from "components/Card/VoteCard.js";

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Event from "@material-ui/icons/Event";
import Assignment from "@material-ui/icons/Assignment";
import Ballot from "@material-ui/icons/Ballot";
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
            billDetailed: {}
        }
    }
    
    componentDidMount() {
        fetch('http://billsearch.herokuapp.com' + this.props.url)
                .then(response => response.json())
                .then(bill => {
                    this.setState({billDetailed: bill});
                });
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            fetch('http://billsearch.herokuapp.com' + this.props.url)
                .then(response => response.json())
                .then(bill => {
                    this.setState({billDetailed: bill});
                });
        }
    }

    render() {
        const {billDetailed} = this.state;
        return (
            <div>
            <CustomTabs
                title={"Bill " + billDetailed.number + ":"}
                headerColor="success"
                tabs={[
                {
                    tabName: "Bill Details",
                    tabIcon: Assignment,
                    tabContent: (
                        <div>
                            <GridContainer  style={stats}>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px", marginTop: "5px"}}>{"Description:"}</h5>
                                    
                                </GridItem>
                                <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px", marginTop: "5px", minHeight: "80px"}}>{billDetailed.title}</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{"Date Introduced:"}</h5>
                                    
                                </GridItem>
                                <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{billDetailed.dateIntroduced}</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{"Date Last Updated:"}</h5>
                                    
                                </GridItem>
                                <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{billDetailed.dateLastUpdated}</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{"Bill Type:"}</h5>
                                    
                                </GridItem>
                                <GridItem style={{textAlign: "left"}} xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{billDetailed.billType}</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{"Is Law:"}</h5>
                                    
                                </GridItem>
                                <GridItem style={{textAlign: "left" }} xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{billDetailed.law ? "Yes" : "No"}</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{"Sponsor:"}</h5>
                                    
                                </GridItem>
                                <GridItem style={{textAlign: "left" }} xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", marginBottom: "15px"}}>{billDetailed.sponsor && billDetailed.sponsor.name}</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 style={{margin: "0", textAlign: "left", marginTop: "10px", color: "#3C4858"}}>Publications:</h5>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <div style={{paddingTop: "10px", maxHeight: "100px", overflowY: "auto", color: "#3C4858"}}>
                                        {billDetailed.publications && billDetailed.publications.map((publication, i) => {
                                            return(<div key={publication.url}><a target="_blank" rel="noopener noreferrer" href={publication.url}>{publication.title}</a></div>)
                                        })}
                                    </div>
                                </GridItem>
                            </GridContainer>
                            
                        </div>
                    )
                },
                {
                    tabName: "Events",
                    tabIcon: Event,
                    tabContent: (
                        <div style={{overflowY: "auto", maxHeight: "310px"}}>
                            {billDetailed.events && billDetailed.events.reverse().map((event, i) => {
                                return(
                                    <Card key={event.id} style={{marginTop: "10px"}}>
                                        <CardHeader>
                                            <h5 style={{margin: "0px"}}>{event.status + " in the " + event.chamber}</h5>
                                        </CardHeader>
                                        <CardFooter>
                                        <div className={stats} style={{display: "flex", alignItems: "center"}}>
                                            <AccessTime style={{color: "#adadad", marginRight: "5px"}} /> {event.date}
                                        </div>
                                        </CardFooter>
                                    </Card>
                                    );
                            })}
                        </div>
                    )
                },
                {
                    tabName: "Votes",
                    tabIcon: Ballot,
                    tabContent: (
                        <VoteCard url={billDetailed.votesUrl} />
                    )
                },
                
                ]}
            />
            </div>
        );
    };
}

export default BillCard;
