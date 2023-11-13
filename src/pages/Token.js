import React from 'react'
import Metamask from '../components/Metamask'
import Ethcal from '../components/Ethcal'
import Tokenstabs from '../components/Tokenstabs'

const Token = () => {
  return (
    <section id="token" class="section_token">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12 text_md_center">
                <div class="title_dark">
                    <span>Tokens</span>
                    <h2>Pricing & values</h2>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="pr_box">
                            <h6>Starting time :</h6>
                            <p>April 23, 2018 (Monday 9:00 AM)</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="pr_box">
                            <h6>Ending time :</h6>
                            <p>June 18, 2018 (Monday 11:00 PM)</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="pr_box">
                            <h6>Market Caps :</h6>
                            <p>$ 118.23 (Billion)</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="pr_box">
                            <h6>Low - High 24h :</h6>
                            <p>$ 6,455.83 - $ 7,071.42</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="pr_box">
                            <h6>Available Token :</h6>
                            <p>$ 120 (Billion)</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="pr_box">
                            <h6>Acceptable Currency :</h6>
                            <p>BTC, Eth, Ltc</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-0 col-md-8 offset-md-2 text_md_center res_md_mt_30">
                <div class="title_dark">
                    <span>Start In</span>
                    <h2>ICO is On Live NOW!</h2>
                </div>
                <div class="tk_countdown text-center countdown_shape">
                    <div class="tk_counter_inner">
                        <div class="tk_countdown_time" data-time="2024/09/06 00:00:00"></div>
                      <Ethcal/>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider large_divider"></div>
        <div class="row text-center">
            <div class="col-md-12">
                <div class="title_dark">
                    <h2>Token Sale Proceeds</h2>
                </div>
            </div>
        </div>
        <div class="row align-items-center res_md_mt_20">
            <div class="col-md-7">
                <div class="res_sm_mb_30 text-center">
                    <img src="assets/images/sale-proceeds.png" alt="sale-proceeds" />
                </div>
            </div>
            <div class="col-md-5">
                <ul class="list_none chart_list">
                    <li class="color1">interconnection Dev.</li>
                    <li class="color2">Marketing & General</li>
                    <li class="color3">Mobile Ad Platform</li>
                    <li class="color4">Ad Platform Integration</li>
                    <li class="color5">Operational Overhead</li>
                </ul>
            </div>
        </div>
        <div class="divider large_divider"></div>
        <div class="row text-center">
            <div class="col-md-12">
                <div class="title_dark">
                    <h2>Token Distribution</h2>
                </div>
            </div>
        </div>
        <div class="row align-items-center flex-row-reverse res_md_mt_20">
            <div class="col-md-7">
                <div class="res_sm_mb_30 text-center">
                    <img src="assets/images/token-distribution.png" alt="token-distribution" />
                </div>
            </div>
            <div class="col-md-5">
                <ul class="list_none chart_list">
                    <li class="color4">ICO Sale</li>
                    <li class="color6">Build Out</li>
                    <li class="color7">Team & Advisers</li>
                    <li class="color3">Private Investors</li>
                    <li class="color2">Bounty</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="shape shap1"></div>
    <div class="shape shap2"></div>
</section>
  )
}

export default Token