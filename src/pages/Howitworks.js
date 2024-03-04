import React from "react";
import { useTranslation } from "react-i18next";

const Howitworks = () => {
  const { t } = useTranslation();
  return (
    <section
      id="how_it_work"
      class="how_work"
      data-parallax="scroll"
      style={{ backgroundImage: `url('assets/images/ofa_background.jpg')` }}
    >
      <div class="col-lg-20 col-md-12 col-sm-12 text_md_center">
        <div class="title_dark">
          <h2>{t('hiwhead')}</h2>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 col-sm-12">
            <video controls width="100%" height="auto">
              <source src="assets/images/OFA_VID.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="work_box">
              <div class="box_inner">
                {" "}
                <i class="ion-person-add"></i>
                <h4>{t('create')}</h4>
                <p>
                 {t('cdesc')}
                </p>
              </div>
            </div>
            <div class="work_box">
              <div class="box_inner">
                {" "}
                <i class="ion-ios-locked"></i>
                <h4>{t('secure')}</h4>
                <p>
                  {t('sdesc')}
                </p>
              </div>
            </div>
            <div class="work_box">
              <div class="box_inner">
                {" "}
                <i class="ion-android-cart"></i>
                <h4>{t('buy')}</h4>
                <p>
                  {t('bdesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shape shap1"></div>
    </section>
  );
};

export default Howitworks;
