import React from 'react'

const Howitworks = () => {
  return (
    <section id="how_it_work" class="how_work" data-parallax="scroll" style={{backgroundImage:`url('assets/images/how_it_work_bg.png')` }}>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="title_dark">
                    <h2>How it Works</h2>
                    <p>Create a account and connect with the website. As soon you connect we onboard you to purchase our tokens. You can buy our tokens from ethereum as well as with USDT also.</p>
                </div>
                 </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
                <div class="work_box">
                    <div class="box_inner"> <i class="ion-person-add"></i>
                        <h4>Create Account</h4>
                        <p>Create your account in your wallet and connect with the website. As soon you connect your wallet you are eligble to purchase tokens from our website.</p>
                    </div>
                </div>
                <div class="work_box">
                    <div class="box_inner"> <i class="ion-ios-locked"></i>
                        <h4>Safe & Secure</h4>
                        <p>We take careful measures to ensure that your token is as safe as possible.</p>
                    </div>
                </div>
                <div class="work_box">
                    <div class="box_inner"> <i class="ion-android-cart"></i>
                        <h4>Buy</h4>
                        <p>You can buy our tokens from our website and store it in your wallet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shape shap1"></div>
</section>
  )
}

export default Howitworks