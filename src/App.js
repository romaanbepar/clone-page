import "./App.css";
import test4 from "./asset/test4.jpg";
import test3 from "./asset/test3.jpg";
import test2 from "./asset/test2.jpg";
import test1 from "./asset/test1.jpg";
import testonomial from "./asset/testonomial.jpg";
import map from "./asset/map.png";
import frame from "./asset/frame.png";
function App() {
  return (
    <>
 <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#"><i class="fa-solid fa-utensils"></i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav menu-nav">
            
            <li class="nav-item">
              <a class="nav-link" href="#about">Login</a>
            </li>
           
            <li class="nav-item mt-3 mt-lg-0">
              <a class="btn btn-warning" href="#contact">Register Now</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main className="main">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="test3">
            <img src={frame} alt="hero page" className="img1"/>
          </div>
        </div>
        <div className="col-md-6 bg">
          <div className="mainbody">
            <h1>Connecting the dots…</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor setui incididunt ut sed do eiusmod tempor setui incidid</p>
          </div>
        </div>
      </div>
    </div>
  </main>

      <div className="section1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">TEAM</h3>
              <h1 className="text-center">Meet Our Team</h1>
            </div>
            <div className="col-md-3">
              <div className="test1">
                <img className="img1" alt="imgg" src={test4} />
              </div>
              <div className="testbody">
                <span>Jonh Jacob</span>
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <p>Founder & CEO</p>
            </div>

            <div className="col-md-3">
              <div className="test1">
                <img className="img1" alt="imgg" src={test3} />
              </div>
              <div className="testbody">
                <span>Sharan Joshi</span>
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <p>Founder & CTO</p>
            </div>

            <div className="col-md-3">
              <div className="test1">
                <img className="img1" alt="imgg" src={test2} />
              </div>
              <div className="testbody">
                <span>Rahul Raja</span>
                <i class="fa-brands fa-linkedin "></i>
              </div>
              <p>Founder & CEO</p>
            </div>
            <div className="col-md-3">
              <div className="test1">
                <img className="img1" alt="imgg" src={test1} />
              </div>
              <div className="testbody">
                <span>Rahul Raja</span>
                <i class="fa-brands fa-linkedin "></i>
              </div>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center test0h3">Testimonials</h3>
              <h1 className="text-center testoh1">
                In Our Clients’ Experience
              </h1>
            </div>
            <div className="col-md-6 space mb-5">
              <div className="test2">
                <img className="img1" alt="imgg" src={testonomial} />
              </div>
            </div>
            <div className="col-md-6 inside mb-5">
              <p className="testopara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                <br /> tempor setui incididunt ut consectetur adipiscing elit,
                sed do eiusmod
                <br /> njmkl
              </p>
              <h4 className="testoparah4">Bhargavan Boxer</h4>
              <p className="testopara">Team Manager</p>
            </div>

            <div class="col-md-3 text-center text-white1">
              <b>Lives</b>
            </div>
            <div class="col-md-3 text-center text-white1">
              <b>Raymonds</b>
            </div>
            <div class="col-md-3 text-center text-white1">
              <b>Lee</b>
            </div>
            <div class="col-md-3 text-center text-white1">
              <b>Nike</b>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Become Partner</h3>
              <h1 className="text-center"> How to Join Us</h1>
            </div>
            <div className="col-md-4">
              <div className="wifi1">
                <i class="fa-solid fa-wifi"></i>
              </div>
              <div className="wifibody">
                <h1 className="text-center h11">
                  {" "}
                  Travel Agency Resgistration
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="wifi1">
                <i class="fa-solid fa-wifi"></i>
              </div>
              <div className="wifibody">
                <h1 className="text-center h11"> Get Account activation</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="wifi1">
                <i class="fa-solid fa-wifi"></i>
              </div>
              <div className="wifibody">
                <h1 className="text-center h11"> Make Bookings for Customer</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="text-center mt-5">
              <button type="button" className="btn btn-warning text-center ">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="sec1">
        <div className="div1">
          <h1 className="sec1h1">
            <b>
              ON THE FRONT LINES OF INNOVATION AND PURPOSE, WE <br />
              PARTNER WITH ENLIGHTENED LEGACY BRANDS AND
              <br /> FEARLESS STARTUPS TO THINK BIGGER, STRATEGIZE
              <br /> SMARTER—AND TRANSFORM DREAMS INTO REALITY.
            </b>
          </h1>
        </div>
      </section>

      <div className="section5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="map">
                <img src={map} alt="map" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-5 bg1">
              <div className="h22">
                <h2 className="sec1h">Stay Connected</h2>
                <p>
                  Sign up for our Newsletter and stay updated
                  <br /> with news and offers
                </p>
              </div>
              <div className="input1">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  placeholder="Email..."
                  aria-label=".form-control-sm example"
                />
                <div class="d-grid gap-2 mt-3">
                  <button class="btn btn-primary btn-sm" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>©2021-2022 All Rights Reserved Privacy Policy | Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
