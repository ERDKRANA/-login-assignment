import React, { Component } from "react";
import amazon from "./asset/amazon.jpeg";
import tree from "./asset/tree.jpeg";
import google from "./asset/google.png";
import linkedin from "./asset/linkedin.png";
import minus from "./asset/minus.png";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      is_submit: false,
    };
  }
  render() {
      const {email, password, is_submit} = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-sm-5">
          <div className="card border-0">
            <div className="card-header custom-header">
              <img src={amazon} />
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-sm-9">
                  <h3 className="text-center login-header">Login</h3>
                  <div className="my-3">
                    <img src={tree} className="w-100" />
                  </div>
                  <div class="form-floating mb-0">
                    <input
                      type="email"
                      class="form-control inp"
                      id="floatingInput"
                      placeholder=""
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <label for="floatingInput" className="custom-label">
                      Email{" "}
                    </label>
                  </div>
                  {is_submit && email ==="" &&<div className="require-filed ">
                    <img src={minus} />
                    The email field is required.
                  </div>}
                  <div class="form-floating mb-0">
                    <input
                      type="text"
                      class="form-control inp"
                      id="floatingInput"
                      placeholder=""
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <label for="floatingInput" className="custom-label">
                      Password{" "}
                    </label>
                  </div>
                  {is_submit && password ==="" &&<div className="require-filed ">
                    <img src={minus} />
                    The password field is required.
                  </div>}
                  <div
                    className="login-button mt-3"
                    onClick={() => this.setState({ is_submit: true })}
                  >
                    Sign In
                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    <div className="forget-password">Forget Password?</div>
                    <div className="sign-up">New User?Sign Up</div>
                  </div>
                  <div className="text-center mb-3 or">or</div>
                  <div className="my-3">
                    <button className="btn btn-primary w-100 d-flex">
                      <img src={google} />
                      <div className="w-100 text-center pt-1">
                        CONTINUE WITH GOOGLE
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary w-100 d-flex">
                      <img src={linkedin} />
                      <div className="w-100 text-center pt-1">
                        CONTINUE WITH LINKEDIN
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
