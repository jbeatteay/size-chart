import React, { Component } from 'react';
import Footwear from './footwear/Footwear.js';
import ProFootwear from './footwear/ProFootwear.js';
import CustomFootwear from './footwear/CustomFootwear.js';
import KidsFootwear from './footwear/KidsFootwear.js';
import Clothing from './apparel/Clothing.js';
import Socks from './accessories/Socks.js';
import Gloves from './accessories/Gloves.js';
import Headwear from './accessories/Headwear.js';
import SizeSelect from './SizeSelect.js';
import sizes from './sizes.json';
import './App.css';

class App extends Component {

  state = {
    type: 'footwear',
    allData: sizes,
    sizes: sizes.filter((n) => n.type === 'footwear')
  }


  filterCharts = (data, option) => {

    if(option === data.type){
      return true;
    }else if (option === data.part){
      return true;
    }

  }

  selectChart = e => {
    let index = e.target.selectedIndex;
    let optionElement = e.target.childNodes[index];
    let optionType =  optionElement.getAttribute('type');
    this.setState({ 
          sizes: this.state.allData.filter((n) => this.filterCharts(n, optionType)),
          type: optionType
        });
    
  }

  render() {

    return (
      <div>
        <SizeSelect selection={this.selectChart}/>
        { this.state.type === 'footwear' ? <Footwear sizes={this.state.sizes} /> : null }
        { this.state.type === 'footwear-pro' ? <ProFootwear sizes={this.state.sizes} /> : null }
        { this.state.type === 'footwear-custom' ? <CustomFootwear sizes={this.state.sizes} /> : null }
        { this.state.type === 'footwear-kids' ? <KidsFootwear sizes={this.state.sizes} /> : null }
        { this.state.type === 'apparel-men' || this.state.type === 'apparel-women' ? <Clothing sizes={this.state.sizes} type={this.state.type}/>  : null }
        { this.state.type === 'socks' ? <Socks sizes={this.state.sizes} />  : null }
        { this.state.type === 'gloves' ? <Gloves sizes={this.state.sizes} />  : null }
        { this.state.type === 'hat' ? <Headwear sizes={this.state.sizes} />  : null }
      </div>
    );
  }
}

export default App;
