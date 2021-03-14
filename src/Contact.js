import React from 'react';

const Contact = () => {
	return(
		<div id="contact" class="section">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-lg-offset-1 col-md-6 " >
						<address>
							<p class="contact-title">CONTACT ME</p>
							<p><i class="fa fa-phone"></i> +2348108961908, 07051728337</p>
							<p><i class="fa fa-envelope-o"></i> abrahamsmooth41@gmail.com</p>
							<p><i class="fa fa-map-marker"></i> No.14 ewlum street ago palace, okota, isolo, Lagos</p>
						</address>
					</div>
					<div class="col-lg-6 col-md-6 col-xs-10 " >
						<form role="form" method="post" action="#">
							<input name="name" type="text" class="form-control" id="name" placeholder="Your Name"/>
							<input name="email" type="email" class="form-control" id="email" placeholder="Your Email"/>
							<textarea name="message" rows="5" class="form-control" id="message" placeholder="Your Message"></textarea>
							<input name="send" type="submit" class="form-control" id="send" value="SEND ME"/>
						</form>
					</div>
					<div class="col-md-1 col-sm-1"></div>
				</div>
			</div>
		</div>
		);

}

export default Contact;