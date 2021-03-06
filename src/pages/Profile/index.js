import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadshotJPG from "../../images/headshot.jpg";
import CodeJPG from "../../images/code.jpg";

function Profile() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });

  return (
    <div className="container">
      <div
        className="title"
        data-aos="fade-right"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="800"
      >
        FULL-STACK DEVELOPER
      </div>
      <section id="profile" className="row">
        <div
          className="col l6"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="1500"
        >
          <div className="image hvr-shrink">
            <img src={HeadshotJPG} alt="Garrett Gassensmith" />
            <div className="text">
              <p>
                I'm a developer and videographer at Northwestern University who
                loves creating full-stack web apps! I have experience with
                React, Redux, Vue, Javascript, Node, Express, HTML/CSS, MySQL,
                MongoDB, WordPress and many other web technologies. I take
                freelance development work by request and I'm looking to launch
                a full-time career in development!
              </p>
            </div>
          </div>
        </div>
        <div
          className="col l6"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="1800"
        >
          <div className="image hvr-shrink">
            <img src={CodeJPG} alt="Garrett Gassensmith" />
            <div className="text">
              <h4>Technologies</h4>
              <div class="row">
                <div class="col s6 m6 l6 tech-list">
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Vue</li>
                    <li>Javascript</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>HTML/CSS</li>
                    <li>MySQL/Sequelize</li>
                    <li>MongoDB/Mongoose</li>
                  </ul>
                </div>
                <div class="col s6 m6 l6 tech-list">
                  <ul>
                    <li>Handlebars</li>
                    <li>JQuery</li>
                    <li>WordPress</li>
                    <li>MJML</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Vuetify</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
