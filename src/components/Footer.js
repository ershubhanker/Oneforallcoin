import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="top_footer bg_blue_dark text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div class="footer_logo">
                        <a href="index.html"> <img alt="logo" src="assets/images/logo.png"/> </a>
                    </div>
                    <div class="newsletter_form large_space">
                        <h4 class="footer_title">Subscribe Our Newsletter</h4>
                        <form>
                            <div class="outline_input">
                                <input type="text" required placeholder="Enter Email Address" />
                            </div>
                            <button type="submit" title="Subscribe" class="btn btn-default" name="submit" value="Submit">
                                <span class="ion-android-send"></span>Subscribe <i class="ion-ios-arrow-thin-right"></i>
                            </button>
                        </form>
                    </div>
                    <ul class="list_none footer_social">
                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                        <li><a href="#"><i class="ion-social-youtube-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rounded_shape rounded_shape2"></div>
    </div>
    <div class="bottom_footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="copyright">Copyright &copy; 2023 All Rights Reserved.</p>
                </div>
                <div class="col-md-6">
                    <ul class="list_none footer_menu">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;