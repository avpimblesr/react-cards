import React from 'react';
import Card from './CardUI';
import img1 from '../assets/cheesecake_001.jpg';
import img2 from '../assets/cheesecake_002.jpg';
import img3 from '../assets/cheesecake_003.jpg';
import img4 from '../assets/Berry Cheesecake.jpg';

export default class Cards extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        <div className="col-md-3"><Card imgsrc={img1} title="Striped Cherry"/></div>
          <div className="col-md-3"><Card imgsrc={img2} title="Strawberry" /></div>
          <div className="col-md-3"><Card imgsrc={img3} title="Blueberry" /></div>
          <div className="col-md-3"><Card imgsrc={img4} title="Very Berry" /></div>
        </div>
      </div>
    )
  }
}

