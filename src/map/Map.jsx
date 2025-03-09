import React from 'react'
import GoogleMapPreview from '../googleMap/GoogleMap'

function Map(props) {

    const destination = "26.7803425,82.9777321"; 
    const handleClick = () => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
        window.open(googleMapsUrl, "_blank");
      };
    const handleCall = () => {
        window.location.href = "tel:+919936539050";
      };
  return (
    <section section-scroll="7" class="contact-area section section-bg">

            <div className="container-fluid">
                <div className='row'>
                <div class="col-md-12 col-sm-12"><div class="section-heading"><h2>Wedding Location</h2></div></div>
                </div>

                <div class="row">

                    <div class="col-md-12 col-lg-6">

                        <div id="map_wrapper d-flex">
                        <GoogleMapPreview destination={destination}  handleClick={handleClick}/>
                            

                        </div>

                    </div>

                    <div class="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">

                        <div class="contact-info mx-lg-5 h-100 w-100">

                            <div class="info-list" onClick={handleClick}>

                                <div class="info-ico"><img src="assets/images/icons/2.png" alt=""/></div>

                                <div class="info-content">

                                    <h2 >Location</h2>

                                    <p className='font-italic'>Milan Marriage Hall, Nedula Churaha Banjariya Road Khalilabad,<br/>Uttar Pradesh, India</p>

                                </div>

                            </div>


                            <div class="info-list" onClick={handleCall}>

                                <div class="info-ico"><img src="assets/images/icons/4.png" alt=""/></div>

                                <div class="info-content">

                                    <h2>Phone</h2>

                                    <p className='font-italic'>+91 9936539050<br/> </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
  )
}


export default Map
