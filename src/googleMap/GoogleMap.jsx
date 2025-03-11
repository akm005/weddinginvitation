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
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54763.77691693975!2d83.01893382398951!3d26.78036034164914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991253cda65018f%3A0x51568cb1aa4ed676!2sMilan%20Marriage%20Hall!5e1!3m2!1sen!2sin!4v1741719347093!5m2!1sen!2sin"}
      ></iframe>
        </div>
  );

};

export default GoogleMapPreview;
