import React from 'react'
import Header from './header'
import Footer from './footer'

export default  (props) => {


    console.log('Layouts props.children : ', props.children)
  return (
    <div className="main" style={{border:'1px solid black'}}>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
};
