import React, { Component } from 'react';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import MPCard from "components/Card/MPCard.js";
import SearchBar from "components/Navbars/SearchBar.js";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

class MPView extends Component {
    mounted = false;

    constructor() {
        super()
        this.state = {
            searchText: "",
            mps: [],
        }
    }
  
    onSearchChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    componentDidMount() {
        this.mounted = true;
        fetch('https://api.openparliament.ca/politicians/?format=json')
            .then(response => response.json())
            .then(mplist => {
                if (this.mounted) {
                    this.setState({mps: mplist["objects"]});
                }
            });
    }

    componentWillUnmount() {
        this.mounted = false;
    }
    
    render () {
        const {searchText, mps} = this.state;
        const filteredMps = mps.filter(mp => {
                const mpText = mp.name + mp.current_party.short_name.en + mp.current_riding.province + mp.current_riding.name.en;
                return mpText.toLowerCase().includes(searchText.toLowerCase());
            }
        );

        shuffleArray(filteredMps);

        return (
            <div>
                <SearchBar onTextChange={this.onSearchChange} headerText="List of MPs" placeholderText="Search for a Name, Party, or Riding Location"/>
                <GridContainer>
                    {filteredMps.map((mp, i) => 
                        <GridItem key={mp.name} xs={12} sm={6} md={3}>
                            <MPCard  
                                name={mp.name} 
                                image={mp.image} 
                                party={mp.current_party.short_name.en} 
                                riding={mp.current_riding.province + ", " + mp.current_riding.name.en}/>
                        </GridItem>
                    )}
                </GridContainer>
                
                </div> 
        )
    }
}
  
export default MPView;