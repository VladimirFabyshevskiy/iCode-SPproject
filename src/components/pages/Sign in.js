import React from "react";

function Signin(){
    return (
        <div class="bg-light">  
            <section className="options mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2> Please sign in or <a href="#registration">register</a></h2>
                        </div>
                    </div>
                </div>
            </section>
        
            <section>
                <div className="container mb-5 pb-5">
                    <div className="row">
                        <div className="col-12">
                            <form className="row g-3 mt-5 py-5 border border-info-50">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
                
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="registration">
                                <div>
                                    <h3 className="text-center">Registration form</h3>
                                </div>
                                <form className="row border border-info-50 g-3 my-5 pb-5">
                                    <div className="col-md-4">
                                        <label for="validationDefault01" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="validationDefault01" value="" required/>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationDefault02" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="validationDefault02" value="" required/>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationDefaultUsername" className="form-label">Username</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                            <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationDefault03" className="form-label">City</label>
                                        <input type="text" className="form-control" id="validationDefault03" required/>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="validationDefault04" className="form-label">Province</label>
                                        <select className="form-select" id="validationDefault04" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option>AB</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="validationDefault05" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="validationDefault05" required/>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                            <label className="form-check-label" for="invalidCheck2">
                                                Agree to terms and conditions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signin;
