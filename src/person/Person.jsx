import React from "react";

function Person({ data }) {
  return (
    <div className="persons d-flex flex-column align-items-center">
      <div
        className="image-avatar"
      >
        <img src={data.avatartUrl} alt='avatar'/>
      </div>
      <div className="content">
        <h2>
          <span></span> {data?.name}
        </h2>

        {/* <p>( S/o Mrs. Prakash &amp; Mr. Shanti )</p> */}

        <p className="">{data?.des}</p>
      </div>
    </div>
  );
}

export default Person;
