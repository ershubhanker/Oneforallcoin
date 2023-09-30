import React from 'react'

const First = () => {
  return (
    <section id="home" class="banner_section section_gradiant">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-first text_md_center">
                <div class="banner_text">
                    <h1><span>Cryptoking</span> Landing Page</h1>
                    <h3>Start Bitcoin mining today!</h3>
                    <p>The highest paying Bitcoin mining pool and cloud mining provider on the market. Start mining Bitcoin today!</p>
                    <div class="banner_btn">
                        <a href="#whitepaper" class="btn btn-default page-scroll nav-link">Whitepapter <i class="ion-ios-arrow-thin-right"></i></a>
                        <a href="#" class="btn btn-border">Buy Token Now! <i class="ion-ios-arrow-thin-right"></i></a> </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-first">
                <div class="banner_image_right res_md_mb_50 res_xs_mb_30">
                    <img src="assets/images/banner_vector.png" alt="banner_vector" />
                </div>
            </div>
        </div>
    </div>
    <div class="section_wave" style={{backgroundImage:`url('assets/images/banner_wave.png')` }} ></div>
</section>
  )
}

export default First