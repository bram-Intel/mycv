import React from 'react';

 const Home = () => {
	return (
		<div id="home" className="section">
			<div className="container">
				<div class="row">
				
					<div className="col-md-8 " >
						<h2 className="container" style={{fontSize: 60}}>Task</h2>
						<h1>Web version of my resume</h1>
						<h2 className="container">Okezie Abraham</h2>
						<div className="container">
						<a href="#work" class="btn btn-default " >Get started</a>
					  </div>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>
		);
  }

export default Home;