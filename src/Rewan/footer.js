import React from "react";
import "./footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <h5>Git IN Toutch</h5>
                <i className="fa fa-envelope"></i>
                <br></br>
                <i className="fa fa-facebook"></i>
              </div>
              <div className="col-md-4">
                <button className="qq">Contact ME</button>
              </div>
              <div className="col-md-4">
                <div className="">
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-google"></i>
                  <i className="fa fa-facebook"></i>

                  <br></br>
                  <p>copyright@rewan</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
