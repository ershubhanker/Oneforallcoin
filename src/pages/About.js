import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
              <span>{t('aques')}</span>
              <h2>{t('def')}</h2>
              <p>
                {t('shortdef')}
              </p>
            </div>
            {/* <a
              href="https://www.youtube.com/watch?v=ZE2HxTmxfrI"
              class="btn btn-default video"
            >
              <span class="ion-play"></span>Let's Start{" "}
              <i class="ion-ios-arrow-thin-right"></i>
            </a> */}

            <button onClick={handleOpen}>{t('knowbutton')}</button>
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
                 {t('longdef')}
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
