import React from 'react'
import './card-style.css';

export default function CardUI(props) {
  console.log("props:", props)
  return (
    <div>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="Cherry Cheesecake" className="card-img-top" />
        </div>

        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam cum incidunt perspiciatis error, ipsam nisi eveniet omnis ad sequi.
          </p>
          <button className="btn btn-outline-success">Go Anywhere</button>
        </div>
      </div>
    </div>
  )
}
