import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
  <div
  style={divStyle}
  >

  <img 
    alt={'Logo'} 
    src={require('../../images/roundel.svg')} 
    style={logoStyle}
    />
  
  </div>
  </Header>
);

var divStyle = {
  marginTop: "28px",
};

var logoStyle = {
  minHeight: "32px",
};

export default CustomHeader;
