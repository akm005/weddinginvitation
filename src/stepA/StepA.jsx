import React, { useRef, useEffect } from "react";
import ConfettiEffect from "../confettiEffect";
import Person from "../person/Person";

export default function StepA() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationIdRef = useRef(null);
  const hearts = useRef([]);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    if (!container) return;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const heartEmojis = ["❤️", "💖", "💕", "💓"];
    const maxHearts = 16;
    const heartLifespan = 3000; // 3 seconds

    class Heart {
      constructor() {
        const columnWidth = canvas.width / maxHearts;
        this.x =columnWidth * Math.floor(Math.random() * maxHearts) + Math.random() * (columnWidth * 0.5);
        this.y = canvas.height + 10;
        this.size = Math.random() * 12 + maxHearts;
        this.speedY = Math.random() * 60 + 30; // Pixels per second
        this.emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        this.opacity = 1;
        this.createdAt = performance.now();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.emoji, this.x, this.y);
        ctx.restore();
      }

      update(deltaTime) {
        this.y -= (this.speedY * deltaTime) / 1000;
        const elapsed = performance.now() - this.createdAt;
        this.opacity = Math.max(0, 1 - elapsed / heartLifespan);
        return elapsed < heartLifespan;
      }
    }

    function createHeart() {
      if (hearts.current.length < maxHearts) {
        hearts.current.push(new Heart());
      }
    }

    function animate(timestamp) {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.current = hearts.current.filter((heart) => {
        const alive = heart.update(deltaTime);
        if (alive) heart.draw();
        return alive;
      });

      createHeart(); // Controlled generation per frame
      animationIdRef.current = requestAnimationFrame(animate);
    }

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", resizeCanvas);
      hearts.current = [];
    };
  }, []);

  return (
    <section
    ref={containerRef}
    section-scroll="1"
    className="about_area section section-bg"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <div className="container-fluid">
      <div className="row py-4 px-0 px-lg-5">

        <div className=" invititation d-block d-lg-flex justify-content-center align-self-center  p-0 col-md-12 col-sm-12 align-self-center">
          <div
            className="about-con custom-shadow-lg d-block d-lg-flex justify-content-center align-self-center"
            style={{
              backgroundImage: "url(./assets/bg3.jpg)",
              position: "relative",
            }}
          >
            <div className="invitation  d-block d-lg-flex flex-column gap-row-2 justify-content-center align-self-center ">
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
        <div className="col-md-3 col-sm-12 align-self-center">
          <Person
            data={{
              name: "Rahul",
              avatartUrl: "assets/images/about/groom.jpeg",
              des: "A man of integrity, strength, and unwavering devotion \n—her steadfast protector, partner, and greatest support inevery journey of life.",
            }}
          />
        </div>
        <div className="col-md-2 col-sm-12 align-self-center">
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
        <div className="col-md-3 col-sm-12 align-self-center">
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
