import React from "react";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <section class="bg_blue_dark client_logo">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <div class="title_light">
              <span>{t('clienthead')}</span>
              <h2>{t('clientdesc')}</h2>
            </div>
          </div>
        </div>
        <div class="row align-items-center text_md_center" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
          <div class="col-lg-2 col-md-4 col-6" >
            <div>
              <img src="assets/images/client.png" alt="client_logo1" />
            </div>
          </div>
        </div>
      </div>
      <div class="rounded_shape rounded_shape1"></div>
    </section>
  );
};

export default Clients;
