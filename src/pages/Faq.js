import React from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <section
      id="team"
      class="team_wrap"
      data-parallax="scroll"
      data-image-src="assets/images/team_bg.png"
    >
      <div class="container">
        {/* <div class="row text-center">
                <div class="col-lg-8 col-md-12 offset-lg-2">
                    <div class="title_dark">
                        <span>Our Core Team</span>
                        <h2>Professional Experts</h2>
                        <p>we are proud of our great team.He is one of the most motivated and enthusiastic people we have, and is always ready and willing to help out where needed. </p>
                    </div>
                </div>
            </div>
            <div class="row small_space">
                <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30">
                    <div class="team_box">
                        <div class="team_img text-center">
                            <img src="assets/images/user_img.jpg" alt="user_img" />
                            <div class="social_team list_none">
                                <ul>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                    <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="team_info gradient_box text-center">
                            <h4><a href="#team1" class="content-popup">Walter Mark</a></h4>
                            <p>Director</p>
                        </div>
                        <div id="team1" class="team_pop mfp-hide">
                            <div class="row m-0">
                                <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                <div class="col-md-6">
                                    <div class="pt-3 pb-3">
                                        <div class="title_dark"> <span>Director</span>
                                            <h2>Walter Mark</h2>
                                        </div>
                                        <div class="social_single_team list_none">
                                            <ul>
                                                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                            </ul>
                                        </div>
                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30">
                    <div class="team_box">
                        <div class="team_img text-center">
                            <img src="assets/images/user_img.jpg" alt="user_img" />
                            <div class="social_team list_none">
                                <ul>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                    <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="team_info gradient_box text-center">
                            <h4><a href="#team2" class="content-popup">Lissa Tero</a></h4>
                            <p>Project Manager</p>
                        </div>
                        <div id="team2" class="team_pop mfp-hide">
                            <div class="row m-0">
                                <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                <div class="col-md-6">
                                    <div class="pt-3 pb-3">
                                        <div class="title_dark"> <span>Project Manager</span>
                                            <h2>Lissa Tero</h2>
                                        </div>
                                        <div class="social_single_team list_none">
                                            <ul>
                                                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                            </ul>
                                        </div>
                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 res_xs_mb_30">
                    <div class="team_box">
                        <div class="team_img text-center">
                            <img src="assets/images/user_img.jpg" alt="user_img" />
                            <div class="social_team list_none">
                                <ul>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                    <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="team_info gradient_box text-center">
                            <h4><a href="#team3" class="content-popup">Kartik Sef</a></h4>
                            <p>Programmer</p>
                        </div>
                        <div id="team3" class="team_pop mfp-hide">
                            <div class="row m-0">
                                <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                <div class="col-md-6">
                                    <div class="pt-3 pb-3">
                                        <div class="title_dark"> <span>Programmer</span>
                                            <h2>Kartik Sef</h2>
                                        </div>
                                        <div class="social_single_team list_none">
                                            <ul>
                                                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                            </ul>
                                        </div>
                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="team_box">
                        <div class="team_img text-center">
                            <img src="assets/images/user_img.jpg" alt="user_img" />
                            <div class="social_team list_none">
                                <ul>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                    <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="team_info gradient_box text-center">
                            <h4><a href="#team4" class="content-popup">Laura Sandel</a></h4>
                            <p>Market Analysis</p>
                        </div>
                        <div id="team4" class="team_pop mfp-hide">
                            <div class="row m-0">
                                <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                <div class="col-md-6">
                                    <div class="pt-3 pb-3">
                                        <div class="title_dark"> <span>Market Analysis</span>
                                            <h2>Laura Sandel</h2>
                                        </div>
                                        <div class="social_single_team list_none">
                                            <ul>
                                                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                            </ul>
                                        </div>
                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider large_divider"></div>
            <div class="row text-center">
                <div class="col-md-12">
                    <div class="title_dark">
                        <h2>Our Invester</h2>
                    </div>
                </div>
            </div>
            <div class="row small_space justify-content-center">
                <div class="col-lg-9 col-md-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 res_md_mb_30">
                            <div class="team_box">
                                <div class="team_img text-center">
                                    <img src="assets/images/user_img.jpg" alt="user_img" />
                                    <div class="social_team list_none">
                                        <ul>
                                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info gradient_box text-center">
                                    <h4><a href="#team5" class="content-popup">Joseph Conrad</a></h4>
                                    <p>Invester</p>
                                </div>
                                <div id="team5" class="team_pop mfp-hide">
                                    <div class="row m-0">
                                        <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                        <div class="col-md-6">
                                            <div class="pt-3 pb-3">
                                                <div class="title_dark"> <span>Invester</span>
                                                    <h2>Joseph Conrad</h2>
                                                </div>
                                                <div class="social_single_team list_none">
                                                    <ul>
                                                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                                    </ul>
                                                </div>
                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 res_md_mb_30">
                            <div class="team_box">
                                <div class="team_img text-center"> <img src="assets/images/user_img.jpg" alt="user_img" />
                                    <div class="social_team list_none">
                                        <ul>
                                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info gradient_box text-center">
                                    <h4><a href="#team6" class="content-popup">Julie Tokar</a></h4>
                                    <p>Invester</p>
                                </div>
                                <div id="team6" class="team_pop mfp-hide">
                                    <div class="row m-0">
                                        <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                        <div class="col-md-6">
                                            <div class="pt-3 pb-3">
                                                <div class="title_dark"> <span>Invester</span>
                                                    <h2>Julie Tokar</h2>
                                                </div>
                                                <div class="social_single_team list_none">
                                                    <ul>
                                                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                                    </ul>
                                                </div>
                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                            <div class="team_box">
                                <div class="team_img text-center"> <img src="assets/images/user_img.jpg" alt="user_img" />
                                    <div class="social_team list_none">
                                        <ul>
                                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info gradient_box text-center">
                                    <h4><a href="#team7" class="content-popup">Sandhya Rani</a></h4>
                                    <p>Invester</p>
                                </div>
                                <div id="team7" class="team_pop mfp-hide">
                                    <div class="row m-0">
                                        <div class="col-md-6"> <img class="w-100 pt-3 pb-3" src="assets/images/user_img-lg.jpg" alt="user_img-lg" /> </div>
                                        <div class="col-md-6">
                                            <div class="pt-3 pb-3">
                                                <div class="title_dark"> <span>Invester</span>
                                                    <h2>Sandhya Rani</h2>
                                                </div>
                                                <div class="social_single_team list_none">
                                                    <ul>
                                                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                                    </ul>
                                                </div>
                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        <div id="faq">
          <div class="divider large_divider"></div>
          <div class="row text-center">
            <div class="col-lg-8 col-md-12 offset-lg-2">
              <div class="title_dark">
                <span>{t('head')}</span>
                <h2>{t('faq')}</h2>
                <p>
                {t('fhead')}
                </p>
              </div>
            </div>
          </div>
          <div class="row small_space">
            <div class="col-lg-8 col-md-12 offset-lg-2">
              <div id="accordion" class="faq_content">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        data-toggle="collapse"
                        class="gradient_box"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {t('q1')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                      {" "}
                      {t('a1')}
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                         {t('q2')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                      {" "}
                      {t('a2')}
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {t('q3')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                      {" "}
                      {t('a3')}
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                         {t('q4')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                      {" "}
                      {t('a4')}
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                         {t('q5')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                    {t('a5')}
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingSix">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                         {t('q6')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseSix"
                    class="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                    {t('a6')}
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingSeven">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                         {t('q7')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseSeven"
                    class="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                    {t('a7')}
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingEight">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                         {t('q8')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseEight"
                    class="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                    {t('a8')}
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingNine">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        {t('q9')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseNine"
                    class="collapse"
                    aria-labelledby="headingNine"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                    {t('a9')}
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingTen">
                    <h6 class="mb-0">
                      {" "}
                      <a
                        class="collapsed gradient_box"
                        data-toggle="collapse"
                        href="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                      {t('q10')}
                      </a>{" "}
                    </h6>
                  </div>
                  <div
                    id="collapseTen"
                    class="collapse"
                    aria-labelledby="headingTen"
                    data-parent="#accordion"
                  >
                    <div class="card-body gradient_box">
                    {t('a10')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shape shap1"></div>
      <div class="shape shap2"></div>
    </section>
  );
};

export default Faq;
