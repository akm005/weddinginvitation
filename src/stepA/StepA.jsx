import React from "react";
import { useRef, useEffect } from "react";
import ConfettiEffect from "../confettiEffect";
import Person from "../person/Person";

export default function StepA() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    if (!container) return;

    // Set canvas size to match the container
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const hearts = [];
    const heartEmojis = ["❤️", "💖", "💕", "💓"];

    class Heart {
      constructor() {
        const columns = 18;
        const columnWidth = canvas.width / columns;
        this.x =
          columnWidth * Math.floor(Math.random() * columns) +
          Math.random() * (columnWidth * 0.5);
        this.y = canvas.height + 10;

        this.size = Math.random() * 10 + 20;
        this.speedY = Math.random() * 1 + 1;
        this.emoji =
          heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        this.opacity = 1;
        this.lifeSpan = 2500;
        this.createdAt = Date.now();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.emoji, this.x, this.y);
        ctx.restore();
      }

      update() {
        this.y -= this.speedY; // Move up

        const elapsed = Date.now() - this.createdAt;
        this.opacity = 1 - elapsed / this.lifeSpan;

        if (this.opacity <= 0) {
          hearts.splice(hearts.indexOf(this), 1);
        }
      }
    }

    function createHeart() {
      hearts.push(new Heart());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((heart, index) => {
        heart.update();
        heart.draw();
      });

      requestAnimationFrame(animate);
    }

    const heartInterval = setInterval(createHeart, 150);
    animate();

    return () => {
      clearInterval(heartInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      section-scroll="1"
      className="about_area section section-bg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="container">
        <div className="row p-4">
          {/* <div className="col-md-4 col-sm-12">
            <div className="persons">
              <figure>
                <img
                  className="image-thumbnail"
                  src="assets/images/about/1.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div> */}

          <div className=" invititation col-md-12 col-sm-12 align-self-center">
            <div
              className="about-con"
              style={{
                backgroundImage: "url(./assets/bg3.jpg)",
                position: "relative",
              }}
            >
              <div className="invitation">
                <h2 className="heading moon-dance-regular">Wedding Invitation</h2>

                <p className="subheading mb-xs-0 mb-sm-0">We inviting you and your family on</p>
                <div className="ganeshji-mob">
                  <div>
                  <img
                    className="image d-xs-block d-sm-block d-md-none d-lg-none"
                    style={{ width: "100%" }}
                    src="./assets/images/logo/ganeshji2.svg"
                    alt="ganeshjiImage"
                  />
                  </div>
                </div>
                <h4>Sunday</h4>

                <h3>20 Apr 2025</h3>

                <p className="address">
                  Milan Marriage Hall,
                  <br />
                  Nedula Churaha Banjariya Road Khalilabad
                </p>
              </div>
              <div className="gng-container">
                <div className="ganeshji left">
                  <img
                    className="image d-none d-md-block d-lg-block"
                    style={{ width: "100%" }}
                    src="./assets/images/logo/ganeshji2.svg"
                    alt="ganeshjiImage"
                  />
                </div>

                <div className="ganeshji right">
                  <img
                    className="image d-none d-md-block d-lg-block"
                    style={{ width: "100%" }}
                    src="./assets/images/logo/ganeshji2.svg"
                    alt="ganeshjiImage"
                  />
                </div>
              </div>
            </div>
          </div>
          <ConfettiEffect />
        </div>
        <div className="main-content row p-4 d-flex justify-content-center">
          <div className="col-md-4 col-sm-12 align-self-center">
            <Person
              data={{
                name: "Rahul",
                avatartUrl: "assets/images/about/groom.jpeg",
                des: "A man of integrity, strength, and unwavering devotion \n—her steadfast protector, partner, and greatest support inevery journey of life.",
              }}
            />
          </div>
          <div className="col-md-3 col-sm-12 align-self-center">
            <div className="con-img">
              <figure>
                <img
                  className="image-thumbnail"
                  src="assets/images/about/sm-2.gif"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 align-self-center">
            <Person
              data={{
                name: "Nisha",
                avatartUrl: "assets/images/about/bride.jpeg",
                des: " A woman of grace, resilience, and boundless love \n —his heart’s truest companion, guiding light, and the soul of their shared journey.",
              }}
            />
          </div>
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}
