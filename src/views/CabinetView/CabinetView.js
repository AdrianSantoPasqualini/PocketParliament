import React, { Component } from 'react';
import SearchBar from "components/Navbars/SearchBar.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
};


class CabinetView extends Component {
    constructor() {
      super()
      this.state = {
        cabinet: [],
        searchText: "",
      }
    }
  
    onSearchChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    componentDidMount() {
      fetch('https://billsearch.herokuapp.com/cabinet?size=1000')
        .then(response => response.json())
        .then(cabinetMembers => {
          this.setState({cabinet: cabinetMembers["data"]})
        });
    }
  
    render () {
        const {cabinet, searchText} = this.state;

        var filteredCabinet = cabinet ? cabinet.filter(member => {
            var memberText = member.position + member.name;
            return memberText.toLowerCase().includes(searchText.toLowerCase());})
            : [];

        return (
            <div>
                <SearchBar onTextChange={this.onSearchChange} headerText="Cabinet Members" placeholderText="Search for a Name, Position, or Topic"/>
                <Card >
                    <CardHeader color="success">
                        <h4 style={{margin: "0"}} className={styles.cardTitleWhite}>
                            List of Cabinet Members
                        </h4>
                    </CardHeader>
                    <CardBody>
                        <Table style={{marginTop: "0"}}
                        tableHeaderColor="success"
                        tableHead={["Cabinet Position", "Name"]}
                        tableData={filteredCabinet.map((member, i) => {
                            return ([member.position, member.name]);
                        })}
                        />
                    </CardBody>
                </Card>
            </div>
        )
    }
}
  
export default CabinetView;
