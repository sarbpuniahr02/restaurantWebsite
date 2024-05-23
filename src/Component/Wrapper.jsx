import React from 'react'

import place_your_design_here_do_6 from '../images/place_your_design_here_do_6.png';
import polygon_2 from '../images/polygon_2.png';
import polygon from '../images/polygon.png';
import vector_smart_object_doubl_2 from '../images/vector_smart_object_doubl_2.png';
import vector_smart_object_doubl from '../images/vector_smart_object_doubl.png';
import place_your_design_here_do from '../images/place_your_design_here_do.png';
function Wrapper() {
  return (
    <div className="wrapper">
      <div className="group-7">
        <div className="wrapper-7">
          <div className="text-6">
            <p className="title-26">Nature is above all</p>
            <p className="body-text-18">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor
            </p>
          </div>
          <img
            className="place-your-design-here-double-click-to-edit-8"
            src={place_your_design_here_do_6}
            alt=""
          />
        </div>
        <div className="l-unconstrained">
          <div className="l-constrained-6">
            <div className="main-title" id='contact'>Book here</div>
            <div className="row-5 match-height group">
              <div className="col-18">
                <div className="how-many-people">
                  <p className="title-28">How many people?</p>
                  <div className="rectangle-holder-4 group">
                    <img
                      className="polygon"
                      src={polygon_2}
                      alt=""
                      width={13}
                      height={11}
                    />
                    <input type="text" placeholder='Enter number of people' style={{ background: "none", color: "#fff" }} />
                  </div>
                </div>
                <div className="name group">
                  <p className="title-29">Name</p>
                  <div className="rectangle-holder-5 group">
                    <img
                      className="polygon-2"
                      src={polygon}
                      alt=""
                      width={13}
                      height={11}
                    />
                    <input type="text" placeholder='Enter Name' style={{ background: "none", color: "#fff" }} />                </div>
                </div>
              </div>
              <div className="col-19">
                <div className="when-is-your-date">
                  <p className="title-30">When is your date?</p>
                  <div className="rectangle-2-holder group">
                    <img
                      className="vector-smart-object-double-click-to-edit-6"
                      src={vector_smart_object_doubl_2}
                      alt=""
                      width={20}
                      height={20}
                    />
                    <input type="text" placeholder='Select Date' style={{ background: "none", color: "#fff" }} />                </div>
                </div>
                <div className="email group">
                  <p className="title-31">Email</p>
                  <div className="rectangle-2-holder-2">
                    <div className="subtitle-4">
                      <input type="text" placeholder='Enter Email' style={{ background: "none", color: "#fff" }} />                  </div>
                  </div>
                </div>
              </div>
              <div className="col-20">
                <div className="time">
                  <p className="title-32">Time</p>
                  <div className="rectangle-holder-6 group">
                    <img
                      className="vector-smart-object-double-click-to-edit-7"
                      src={vector_smart_object_doubl}
                      alt=""
                      width={20}
                      height={20}
                    />
                    <input type="number" placeholder='Select Time' style={{ background: "none", color: "#fff" }} />                </div>
                </div>
                <div className="phone group">
                  <p className="title-33">Phone</p>
                  <div className="rectangle-holder-7">
                    <div className="subtitle-6">
                      <input type="number" placeholder='Enter phone number' style={{ background: "none", color: "#fff" }} />                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit">SUBMIT</div>
          </div>
        </div>
      </div>
      <img
        className="place-your-design-here-double-click-to-edit-9"
        src={place_your_design_here_do}
        alt=""
      />
    </div>)
}

export default Wrapper