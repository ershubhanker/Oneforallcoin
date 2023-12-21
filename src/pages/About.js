import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#081C49",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  maxHeight: "70vh",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "8px",
    transition: "background-color 0.3s",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#eee",
  },

  '@media (max-width: 768px)': {
    top:"55%",
    width: '80%', // Adjust the width for medium screens
  },
  '@media (max-width: 576px)': {

    width: '80%', // Adjust the width for small screens
  },
};

const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="about" class="section_gradiant">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="res_sm_mb_30">
              <img src="assets/images/about_img.png" alt="aboutimg" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="title_light">
              <span>What is OneForAllCoin basically about?</span>
              <h2>About The Oneforall</h2>
              <p>
                OneForAllCoin was designed to help everyone involved earn money
                because of the mechanisms in place to constantly push the token
                to grow from internal and external components. Internally, we
                offer a 2% referral reward for anyone you share your personal
                link with anytime money enters their account. This is paid in
                tokens and will be kept for 90 days with the anticipation that
                it will make you even more money.
              </p>
            </div>
            {/* <a
              href="https://www.youtube.com/watch?v=ZE2HxTmxfrI"
              class="btn btn-default video"
            >
              <span class="ion-play"></span>Let's Start{" "}
              <i class="ion-ios-arrow-thin-right"></i>
            </a> */}

            <button onClick={handleOpen}>Know more</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box
                sx={{
                  ...style,
                }}
              >
                <h2
                  style={{
                    color: "gray",
                    borderBottom: " 2px solid #333",
                    paddingBottom: "5px",
                  }}
                  id="parent-modal-title"
                >
                  About Us
                </h2>

                <p
                  style={{ color: "white", fontFamily: "revert-layer" }}
                  id="parent-modal-description"
                >
                  OneForAllCoin was designed to help everyone involved earn
                  money because of the mechanisms in place to constantly push
                  the token to grow from internal and external components.
                  Internally, we offer a 2% referral reward for anyone you share
                  your personal link with anytime money enters their account.
                  This is paid in tokens and will be kept for 90 days with the
                  anticipation that it will make you even more money. 10% of the
                  token will be burned when a person withdraws their money. Why
                  do we do this? It means that money can never be touched adding
                  value to our token and more desirable for investors.
                  Eventually, it will be about supply and demand and people will
                  want to be a part of what we have to offer if it will be
                  available for them. Another mechanism internally that helps
                  all of us and really shows that it is One For All is when
                  someone withdraws their money, 10% is withheld in their
                  account and cannot be touched for 90 days. This prevents
                  whales from coming in and trying to pillage our program that
                  is designed for longevity and to help EVERYONE. OneForAll is
                  also aligned with a Live Stream Program called BuckChats that
                  is not typical of other Social Sites because it offers a real
                  opportunity for anyone to make a lot of money just by
                  referring others. The beautiful part of how it helps
                  OneForAllCoin is that 20% of their earnings goes DIRECTLY into
                  OneForAll and is held for 90 days with the anticipation of
                  that also making MORE money for the member and bringing
                  greater value to our token. There will be a third program
                  involved in the near future that will have the same concept
                  and we will be bringing in other similar programs that like
                  our vision.
                  <br />
                  <br />
                  OneForAll will also be recruiting heavily in the Phillipines
                  and we already have a strong group and small office set up to
                  help the people in that Crypto friendly Country. BuckMeLLC
                  will also be creating an account that will give tokens away to
                  it's members for working hard and also part of a philanthropic
                  program we will be working to encourage more growth and
                  strength for our token. When you join OneForAll or BuckChats,
                  you will automatically be signed up for both programs so your
                  referrals will follow you. It doesn't matter if you don't want
                  to participate in BuckChats. You can still earn from it if
                  your referrals get involved. You will have the same User Name
                  and password in both programs.
                </p>
              </Box>
            </Modal>
          </div>
        </div>
        <div class="divider large_divider"></div>
        {/* <div class="row text-center">
            <div class="col-lg-8 col-md-12 offset-lg-2">
                <div class="title_light">
                    <span>Why Cryptoking</span>
                    <h2>Competitive Benefit</h2>
                    <p>Competitive advantages are conditions that allow a company or country to produce a good or service at equal value but at a lower price or in a more desirable fashion</p>
                </div>
            </div>
        </div>
        <div class="row text-center small_space benefit_wrap">
            <div class="col-lg-2 col-md-4 col-6">
                <div class="benefit_box">
                    <img src="assets/images/secure.png" alt="secure" />
                    <h6>Safe & Secure</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="benefit_box">
                    <img src="assets/images/token.png" alt="token" />
                    <h6>Excerpt Tokens</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="benefit_box">
                    <img src="assets/images/payment.png" alt="payment" />
                    <h6>Easy Payment</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="benefit_box">
                    <img src="assets/images/case.png" alt="case" />
                    <h6>Daily Cash Outs</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="benefit_box">
                    <img src="assets/images/app.png" alt="app" />
                    <h6>Smart Application</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="benefit_box">
                    <img src="assets/images/dilution.png" alt="dilution" />
                    <h6>NO DILUTION</h6>
                </div>
            </div>
        </div> */}
      </div>
      <div class="rounded_shape rounded_shape1"></div>
      <div class="rounded_shape rounded_shape2"></div>
    </section>
  );
};

export default About;
