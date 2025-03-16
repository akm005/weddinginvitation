import React,{useEffect,useState} from "react";

export default function StepB() {

  const calculateTimeLeft = () => {
    const now = new Date();
    const endTime = new Date(2025, 3, 20, 19, 0, 0)
    const difference = endTime - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);
  return (
    <section
      class="counter-area position-relative section bg-img jarallax"
      data-jarallax-original-styles="null"
      // style="z-index: 0; background-image: none; background-attachment: scroll; background-size: auto;"
     
    >
      <div className="image-bg position-absolute top-0 left-0"  style={{zIndex:0,backgroundAttachment:'scroll',backgroundSize:'auto'}}></div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="counter-con">
              <p>Love Is In The Air</p>

              <h2>
                See You Soon... <span>💞</span>
              </h2>
            </div>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="counter">
              <ul className="counter-container p-0 position-relative f-flex justify-content-around">
                <li>
                  <span class="days mx-2 bx-1 w-auto">{timeLeft.days}</span>
                  <p>Days</p>
                </li>

                <li>
                  <span class="hours mx-2 bx-1  w-auto">{timeLeft.hours}</span>
                  <p>hours</p>
                </li>

                <li>
                  <span class="minutes mx-2 bx-1  w-auto">{timeLeft.minutes}</span>
                  <p>minutes</p>
                </li>

                <li>
                  <span class="seconds mx-2 bx-1  w-auto">{timeLeft.seconds}</span>
                  <p>seconds</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        id="jarallax-container-0"
        // style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -100;"
      >
        <div 
        // style='background-position: 50% 50%; background-size: 100%; background-repeat: no-repeat; background-image: url("file:///D:/PROJECTS/03_indian_wedding_sandeep/03_indian_wedding/assets/images/banner/bg-1.jpg"); position: fixed; top: 0px; left: 0px; width: 1946.97px; height: 361px; overflow: hidden; pointer-events: none; margin-left: -217.083px; margin-top: -7.5px; visibility: visible; transform: translate3d(0px, 72.4188px, 0px);'
        >
        </div>
      </div>
    </section>
  );
}
