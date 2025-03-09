import React from "react";

const GoogleMapPreview = ({destination,handleClick}) => {

  return (
    <div className="map-container w-100 mx-lg-4 mx-0" style={{ textAlign: "center" }} onClick={handleClick}>
      {/* Google Maps Embed Without API Key */}
      <iframe
      className="w-100 h-100"
        title="Google Map Preview"
        style={{ border: "0.5em solid #ddd", borderRadius: "1em", }}
        loading="lazy"
        allowFullScreen
        src={`https://maps.google.com/maps?q=${destination}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      ></iframe>
    </div>
  );

};

export default GoogleMapPreview;
