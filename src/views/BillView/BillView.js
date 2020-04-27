import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SearchBar from "components/Navbars/SearchBar.js";
import BillCard from "components/Card/BillCard.js";

class BillView extends Component {
    mounted = false;

    constructor() {
      super()
      this.state = {
        bills: [],
        searchText: "",
      }
    }
  
    onSearchChange = (event) => {
      this.setState({searchText: event.target.value});
    }

    componentDidMount() {
      this.mounted = true;
      fetch('https://billsearch.herokuapp.com/bills?size=1000')
        .then(response => response.json())
        .then(bills => {
          if (this.mounted) {
            this.setState({bills: bills["data"]});
          }
        });
    }

    componentWillUnmount() {
      this.mounted = false;
    }
  
    render () {
      const {bills, searchText} = this.state;
      
      const filteredBills = bills.filter(bill => {
        var billText = bill.number + bill.title + bill.dateIntroduced;
        if (bill.law) billText += "law";
        return billText.toLowerCase().includes(searchText.toLowerCase());
        }
      );

      return (
          <div>
              <SearchBar onTextChange={this.onSearchChange} headerText="Bills in Current Parliament Session" placeholderText="Search for a Bill, Date, or Topic"/>
              <GridContainer>
                  {filteredBills.map((bill, i) => {
                      return (<GridItem key={i} xs={12} sm={6} md={6}>
                                <BillCard url={bill.url}/>
                              </GridItem>);
                  }
                  )}
              </GridContainer>
          </div> 
        )
    }
}
  
export default BillView;