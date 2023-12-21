import React from 'react'

const First = () => {
  return (
    <section id="home" class="banner_section section_gradiant">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-first text_md_center">
                <div class="banner_text">
                    <h1><span>Oneforall</span> Landing Page</h1>
                    <h3>Start purchasing tokens from today!</h3>
                    <p>The newly launched token. Start purchasing the tokens by just clicking on button below!</p>
                    <div class="banner_btn">
                        <a href="#whitepaper" class="btn btn-default page-scroll nav-link">Whitepaper <i class="ion-ios-arrow-thin-right"></i></a>
                        <a href="#token" class="btn btn-border">Buy Token Now! <i class="ion-ios-arrow-thin-right"></i></a> </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-first">
                <div class="banner_image_right res_md_mb_50 res_xs_mb_30">
                    <img src="assets/images/OFA_1.png" alt="banner_vector" />
                </div>
            </div>
        </div>
    </div>
    <div class="section_wave" style={{backgroundImage:`url('assets/images/banner_wave.png')` }} ></div>
</section>
  )
}

export default First