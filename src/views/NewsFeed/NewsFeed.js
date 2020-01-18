import React, { Component } from 'react';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import NewsCard from "components/Card/NewsCard.js";
import SearchBar from "components/Navbars/SearchBar.js";

class NewsFeed extends Component {
    constructor() {
      super()
      this.state = {
        searchText: "",
        news: [],
      }
    }

    onSearchChange = (event) => {
        this.setState({searchText: event.target.value});
    }
  
    componentDidMount() {
      fetch('http://billsearch.herokuapp.com/news?size=1000')
        .then(response => response.json())
        .then(newsfeed => {
          this.setState({news: newsfeed["data"]})
        });
    }
  
    render () {
        const {searchText, news} = this.state;

        const filteredNews = news.filter(info => {
                const newsText = info.title + info.billNumber + info.date + info.description + info.tagline + info.billId;
                return newsText.toLowerCase().includes(searchText.toLowerCase());
            }
        );

        return (
            <div>
                <SearchBar onTextChange={this.onSearchChange} headerText="NewsFeed" placeholderText="Search for a Date, Bill, or Topic"/>
                <GridContainer>
                    {filteredNews.map((newsitem, i) => 
                        <GridItem key={i} xs={12} sm={12} md={12}>
                            <NewsCard  title={newsitem.title} description={newsitem.description}
                                    date={newsitem.date} tagline={newsitem.tagline}/>
                        </GridItem>
                    )}
                </GridContainer>
            </div> 
        )
    }
}
  
export default NewsFeed;