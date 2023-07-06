import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Owls</h1>
    <img
      className="food-img"
      src="https://i.pinimg.com/originals/cf/b8/95/cfb895c97580a2ba2a1bd8e54d1a62af.jpg"
      alt="white-faced scops owl"
    />
    <img
      className="food-img"
      src="https://inaturalist-open-data.s3.amazonaws.com/photos/19657407/large.jpg"
      alt="eurasian eagle-owl"
    />
    <img
      className="food-img"
      src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/468446081/640"
      alt="eastern screech owl"
    />

    <h2 className="heading">Lorem Picsum</h2>
    <img src={img + "?grayscale"} alt="random" />
  </div>,
  document.getElementById("root")
);
