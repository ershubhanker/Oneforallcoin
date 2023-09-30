import React from 'react'

const Whitepaper = () => {
  return (
    <section id="whitepaper" class="section_gradiant">
    <div class="container">
        <div class="row text_sm_center">
            <div class="col-lg-7 col-md-7">
                <div class="title_light">
                    <h2>Download Whitepaper</h2>
                    <p>A white paper is an authoritative report or guide that informs readers concisely about a complex issue and presents the issuing body's philosophy on the matter. It is meant to help readers understand an issue, solve a problem, or make a decision.</p>
                    <p>Marketers create whitepapers to educate their audience about a particular issue, or explain and promote a particular methodology.</p>
                </div>
                <a class="btn btn-default" href="#"><span class="ion-android-download"></span>Download Now <i class="ion-ios-arrow-thin-right"></i></a> </div>
            <div class="col-lg-4 offset-lg-1 col-md-5">
                <div class="res_md_mt_30">
                    <img alt="whitepaper" src="assets/images/whitepaper.png"/>
                </div>
            </div>
        </div>

        <div id="contact">
            <div class="divider large_divider"></div>
            <div class="row text-center">
                <div class="col-md-12">
                    <div class="title_light">
                        <span>Contact Us</span>
                        <h2>Get in touch!</h2>
                    </div>
                </div>
            </div>
            <div class="divider small_divider"></div>
            <div class="row">
                <div class="col-md-7 col-lg-6 offset-lg-1">
                    <form method="post" name="enq" class="form_field">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <input type="text" required="required" placeholder="Enter Name *" id="first-name" class="form-control" name="name"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" required="required" placeholder="Enter Email *" id="email" class="form-control" name="email"/>
                            </div>
                            <div class="form-group col-md-12">
                                <input type="text" required="required" placeholder="Enter Subject" id="subject" class="form-control" name="subject"/>
                            </div>
                            <div class="form-group col-md-12">
                                <textarea required="required" placeholder="Message *" id="description" class="form-control" name="message" rows="2"></textarea>
                            </div>
                            <div class="col-md-12 text-center">
                                <button type="submit" title="Submit Your Message!" class="btn btn-default" id="submitButton" name="submit" value="Submit">Submit <i class="ion-ios-arrow-thin-right"></i></button>
                            </div>
                            <div class="col-md-12">
                                <div id="alert-msg" class="alert-msg text-center"></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-5 col-md-5 res_sm_mt_30">
                    <ul class="list_none contact_info mt-margin">
                        <li class="input-group-prepend align-items-center">
                            <i class="ion-ios-location"></i>
                            <div class="contact_detail">
                                <span>Address</span>
                                <p>22 International Division Via G.B. Pirelli</p>
                            </div>
                        </li>
                        <li class="input-group-prepend align-items-center">
                            <i class="ion-android-call"></i>
                            <div class="contact_detail">
                                <span>Phone</span>
                                <p>+23 0123 4567</p>
                            </div>
                        </li>
                        <li class="input-group-prepend align-items-center">
                            <i class="ion-ios-email"></i>
                            <div class="contact_detail">
                                <span>Email</span>
                                <p>Yourmail@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="rounded_shape rounded_shape1"></div>
    <div class="rounded_shape rounded_shape2"></div>
</section>
  )
}

export default Whitepaper