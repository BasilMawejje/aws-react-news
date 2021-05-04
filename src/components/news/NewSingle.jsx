import React from "react";

const NewSingle = ({item}) => (
  <div className="col s12 m4 l4" style={{ height: "400px" }}>
    <div className="card">
      <div className="card-image">
        <img
          src={item.urlToImage}
          alt={item.title}
          style={{ height: "150px" }}
        />
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
    </div>
  </div>
);

export default NewSingle;
