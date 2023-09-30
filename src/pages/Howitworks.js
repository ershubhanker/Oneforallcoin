import React from 'react'

const Howitworks = () => {
  return (
    <section id="how_it_work" class="how_work" data-parallax="scroll" style={{backgroundImage:`url('assets/images/how_it_work_bg.png')` }}>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="title_dark">
                    <h2>How it Works</h2>
                    <p>Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions&mdash;ayments from one user to another on a decentralized network.Mining involves adding bitcoin transaction data to Bitcoin's global public ledger of past transactions.</p>
                </div>
                <a href="#mobileapp" class="btn btn-default page-scroll">Download App <i class="ion-ios-arrow-thin-right"></i></a> </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
                <div class="work_box">
                    <div class="box_inner"> <i class="ion-person-add"></i>
                        <h4>Create Account</h4>
                        <p>Bitcoin Core, however, is a full node, meaning it helps verify and transmit other Bitcoin transactions across the network and stores copy of the entire blockchain.</p>
                    </div>
                </div>
                <div class="work_box">
                    <div class="box_inner"> <i class="ion-ios-locked"></i>
                        <h4>Safe & Secure</h4>
                        <p>We take careful measures to ensure that your bitcoin is as safe as possible. Offline storage provides an important security measure against theft or loss. </p>
                    </div>
                </div>
                <div class="work_box">
                    <div class="box_inner"> <i class="ion-android-cart"></i>
                        <h4>Buy & Sell</h4>
                        <p>Blockchain works with exchange partners all around the world to make buying bitcoin in your wallet both a seamless and secure experience.</p>
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