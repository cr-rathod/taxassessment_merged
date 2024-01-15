import React, {  useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

function ResetPassword() {
    return(
        <>
  <section className="login-block">
        {/* <!-- Container-fluid starts --> */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    {/* <!-- Authentication card start --> */}
    
                    <form className="md-float-material form-material">
                        <div className="text-center">
                            <img src="../files/assets/images/logo.png" alt="logo.png" />
                        </div>
                        <div className="auth-box card">
                            <div className="card-block">
                                <div className="row m-b-20">
                                    <div className="col-md-12">
                                        <h3 className="text-left">Recover your password</h3>
                                    </div>
                                </div>
                                
                                <div className="form-group form-primary">
                                    <input type="text" name="email-address" class="form-control" required="" />
                                    <span className="form-bar"></span>
                                    <label className="float-label">Your Email Address</label>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Reset Password</button>
                                    </div>
                                </div>
                                <p class="f-w-600 text-right">Back to <a href="/">Login.</a></p>
                                <div className="row">
                                    <div className="col-md-10">
                                        <p className="text-inverse text-left m-b-0">Thank you.</p>
                                        <p class="text-inverse text-left"><a href="/"><b>Back to website</b></a></p>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="../files/assets/images/auth/Logo-small-bottom.png" alt="small-logo.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!--<div className="login-card card-block auth-body mr-auto ml-auto">--> */}
                        {/* <!--<form className="md-float-material form-material">--> */}
                            {/* <!--<div className="text-center">--> */}
                                {/* <!--<img src="../files/assets/images/logo.png" alt="logo.png">--> */}
                            {/* <!--</div>--> */}
                            {/* <!--<div className="auth-box">--> */}
                                {/* <!----> */}
                            {/* <!--</div>--> */}
                        {/* <!--</form>--> */}
                        {/* <!--&lt;!&ndash; end of form &ndash;&gt;--> */}
                    {/* <!--</div>--> */}
                    {/* <!-- Authentication card end --> */}
                </div>
                {/* <!-- end of col-sm-12 --> */}
            </div>
            {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container-fluid --> */}
    </section>
        </>
    )
}
export default ResetPassword;