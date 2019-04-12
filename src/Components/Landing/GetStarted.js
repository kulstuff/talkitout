import React from "react";
import "./GetStarted.scss";

const GetStarted = props => {
  return (
    <div>
      <div className="col-12 get-started__container clearfix" id="getStarted">
        <div className="col-4 float-left get-started__text-container">
          <div className="display5 font-weight-bold">Lets Do This. </div>
          <div className="display6 font-weight-light">Who are you ? </div>
        </div>
        <div className="float-right clearfix col-8">
          <div className="col-4 float-left">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title display3 text-center gradient-fg-1">
                  <ion-icon name="megaphone" />
                </h5>
                <p className="card-title text-center">
                  Speaker <ion-icon name="arrow-dropright" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 float-left">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title display3 text-center gradient-fg-2">
                  <ion-icon name="people" />
                </h5>
                <p className="card-title text-center">
                  Listener <ion-icon name="arrow-dropright" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 float-left">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title display3 text-center gradient-fg-3">
                  <ion-icon name="pulse" />
                </h5>
                <p className="card-title text-center">
                  Specialist <ion-icon name="arrow-dropright" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
