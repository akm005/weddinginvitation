import React from 'react'
import GoogleMapPreview from '../googleMap/GoogleMap'

function Map(props) {

    const destination = "26.780557837840927, 83.06101336057286"; 
    const handleClick = () => {
        const googleMapsUrl = `https://maps.app.goo.gl/Q6RdSMdbjpGwdGAn6`;
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

                            <div class="info-list d-flex justify-content-center  justify-content-md-around">

                                <div class="info-ico d-none d-md-block"><img src="assets/images/icons/2.png" alt=""/></div>

                                <div class="info-content w-100 d-flex flex-row gap-3 flex-lg-column justify-content-between justify-content-sm-center align-items-center p-0">
                                    <span className='flex-sm-grow-1 text-start text-lg-center'>
                                    <h2 >Location</h2>
 
                                    <p className='font-italic'>Milan Marriage Hall, Nedula Churaha Banjariya Road Khalilabad,<br/>Uttar Pradesh, India</p>
                                    </span>

                                    <button type='button' className='clickable d-inline-flex me-3 me-lg-0' onClick={handleClick}>🧭 <span className='d-sm-block d-none'>Navigate</span></button>
                                </div>
                            </div>


                            <div class="info-list d-flex justify-content-center  justify-content-md-around">

                                <div class="info-ico d-none d-md-block"><img src="assets/images/icons/4.png" alt=""/></div>

                                <div class="info-content w-100 d-flex flex-row gap-3 flex-lg-column justify-content-between  justify-content-sm-center align-items-center p-0">
                                    <span className='flex-sm-grow-1 text-start text-lg-center'>
                                    <h2>Phone</h2>

                                    <p className='font-italic'>+91 9936539050<br/> </p>
                                    </span>
                                    <button type='button' className='clickable d-inline-flex me-3 me-lg-0' onClick={handleCall}>📞<span className='d-sm-block d-none'>Call</span> </button>
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
