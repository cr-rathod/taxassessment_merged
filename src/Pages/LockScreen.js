import React, { useState } from 'react';

function LockScreen() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  return (
  <section class="login-block">
        {/* <!-- Container-fluid starts --> */}
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    {/* <!-- Login card start --> */}
                    <form class="md-float-material form-material">
                        <div class="text-center">
                            <img src={process.env.PUBLIC_URL + '/files/assets/images/auth/logo.png'} alt="logo.png" /> 
                        </div>
                        <div class="auth-box card">
                            <div class="card-block">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="text-center"><i class="icofont icofont-lock text-primary f-80"></i></h3>
                                    </div>
                                </div>
                                <div class="form-group form-primary">
                                    <input type="text" name="email" class="form-control" required="" />
                                    <span class="form-bar"></span>
                                    <label class="float-label">Your Email Address</label>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"><i class="icofont icofont-lock"></i> Lock Screen </button>
                                    </div>
                                </div>
                                <p class="text-inverse text-right">Back to <a href="/auth-normal-sign-in">Login</a></p>
                                <div class="row">
                                    <div class="col-md-10">
                                        <p class="text-inverse text-left m-b-0">Thank you.</p>
                                        <p class="text-inverse text-left"><a href="/"><b>Back to website</b></a></p>
                                    </div>
                                    <div class="col-md-2">
                                        <img
                        src={process.env.PUBLIC_URL + '/files/assets/images/auth/Logo-small-bottom.png'}
                        alt="small-logo.png"
                      />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!-- Login card end --> */}
                </div>
                {/* <!-- end of col-sm-12 --> */}
            </div>
            {/* <!-- end of row --> */}
        </div>
        
        {/* <!-- end of container-fluid --> */}
    </section>
);
}
export default LockScreen;
