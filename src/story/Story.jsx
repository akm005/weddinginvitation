import React from "react";

function Story({data}) {
  return (
    <div class="storys">
      <figure className="celebration-img">
        <span>{data.date}</span>
        <img alt="" src={data.img} />
      </figure>
      <div class="content">
        <h3>{data.heading}</h3>
        <h4 className="font-oblique">{data.subheading}</h4>
        <p className="font-italic">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export default Story;
