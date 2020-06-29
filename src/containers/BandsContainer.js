import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
 renderBands = () => this.props.bands.map((band, index) => <li>{band.name}</li>)
 
    return(
      <div>
        BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
 
      </div>
    )
  }
}





export default BandsContainer
