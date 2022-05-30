import "./App.css";
import test4 from "./asset/test4.jpg";
import test3 from "./asset/test3.jpg";
import test2 from "./asset/test2.jpg";
import test1 from "./asset/test1.jpg";
import testonomial from "./asset/testonomial.jpg";

function App() {
  return (
    <>
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
              <div className="test1">
                <img className="imgtesto" alt="imgg" src={testonomial} />
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
              <button type="button" className="btn btn-warning text-center">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="sec1">
  <div className="div1">
    <h1 className="sec1h1"><b>ON THE FRONT LINES OF INNOVATION AND PURPOSE, WE <br/>PARTNER WITH ENLIGHTENED LEGACY BRANDS AND<br/> FEARLESS STARTUPS TO THINK BIGGER, STRATEGIZE<br/> SMARTER—AND TRANSFORM DREAMS INTO REALITY.</b></h1>
  </div>
</section>
    </>
  );
}

export default App;
