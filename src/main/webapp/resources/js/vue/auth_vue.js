"use strict";
var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x=>{
		return `<div id="s-header">
		
			<div class="topbar">
                <div class="topbar-left">
                    <a href="#" class="logo" id="btn_main">
                        <span>
                            GoodFor
                        </span>
                    </a>
                </div>
                <nav class="navbar-custom">
                    <ul class="list-unstyled topbar-right-menu float-right mb-0">
	                    <li class="nav-link dropdown-toggle arrow-none waves-light waves-effect">
                            <div id="btn_trading" style="display:inline-block;width:200px;color:white;font-size:15px">트레이딩</div>
							<div id="btn_stockinfo" style="display:inline-block;width:200px;color:white;font-size:15px">주식정보</div>
							<div id="btn_mypage" style="display:inline-block;width:200px;color:white;font-size:15px">마이페이지</div>
							<div id="btn_notice" style="display:inline-block;width:200px;color:white;font-size:15px">공지사항</div>
							<div id="btn_admin" style="display:inline-block;width:200px;color:white;font-size:15px">관리자</div>
							<div id="btn_login" style="display:inline-block;width:200px;color:white;font-size:15px">로그인</div>
							<div id="btn_join" style="display:inline-block;width:200px;color:white;font-size:15px">회원가입</div>
						</li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" href="#">
                                <i class="fi-bell noti-icon"></i>
                            </a>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fi-speech-bubble noti-icon"></i>
                            </a>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="ml-1"> . . . . <i class="mdi mdi-chevron-down"></i> </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" x-placement="bottom-end" style="position: absolute; transform: translate3d(130px, 70px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-head"></i> <span>My Account</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-cog"></i> <span>Settings</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-help"></i> <span>Support</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-lock"></i> <span>Lock Screen</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-power"></i> <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
		</div>
		<div>
        <div id="body_main" style="margin-top: 70px;">
            <div id="body_img" style=" width:auto; height:400px; margin-top: 110px;">
                <div class="container">
					<div id="myCarousel" class="carousel slide" data-ride="carousel">
						<!-- Indicators -->
						<ol class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						</ol>
						<!-- Wrapper for slides -->
						<div class="carousel-inner">
						<div class="item active">
							<img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMjBfMzkg/MDAxNTc5NTA2NTQ2MTIw.T4NtQ5DxbLOfFjPDbk-E6nYuYyvK9OgmTs8PrOg7A-gg.8JPLj8bzXREMAo7gL7Z-bfDD-yb25KE4Fi9K_AF2g8cg.JPEG/main_img2.jpg?type=w740" alt="img1" style="width:100%; height: 400px;">
							<div class="carousel-caption">
							</div>
						</div>
						<div class="item">
							<img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMjBfMjYg/MDAxNTc5NTA2NTQ1NTQz.xeC1tOWmxDhshk5WZjEgWFJJRV8YaGXzJlFz3TyyhzQg.XL5IeqbdNI9RVaHRRfzq9X0F88pNes1BXMihc6ruprMg.JPEG/main_img.jpg?type=w740" alt="img2" style="width:100%; height: 400px;">
							<div class="carousel-caption">
							</div>
						</div>
						</div>
						<!-- Left and right controls -->
						<a class="left carousel-control" href="#myCarousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
						<span class="sr-only">Previous</span>
						</a>
						<a class="right carousel-control" href="#myCarousel" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right"></span>
						<span class="sr-only">Next</span>
						</a>
					</div>
				</div>            
            </div>
             <div id="body_icon" style="margin-top: 10%; margin-left: 37%;">
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfMjAz/MDAxNTc5MTQwOTY3OTE0.95-bo0_ntpxsrIeoIqWUoHT-TVUYs0YDlNDtLZ8z92Ug.wz3LUDP5Kd0t0ekbeuTzgicMqpwGplqC_knxJrr3FL8g.PNG/account2.png?type=w740" alt="" style="width: 150px;">
                <div style="display: inline-block; width: 30px;"></div>
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfMTM5/MDAxNTc5MTQwOTY3NjMy.mZJis_aj0h2tU1VmFFoGZnj2Xo3N-oj7BI5ULU1NbdQg.l6pSBxTuVMfj4Z_eCCRL9ND1exLMYmYVFge1qmLTqv0g.PNG/mymoney2.png?type=w740" alt="" style="width: 150px;">
                <div style="display: inline-block; width: 30px;"></div>
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTdfMTY0/MDAxNTc5MjUxNTcwMTkz.PfILgtr9LAgoheS-NvBQSxDoFE-Oc_4xyAroHjY_h9gg.Xt_Q5DWb61N4M_-3nn9KlwQhuvNev3s_pDkS2mA3rCAg.PNG/info.png?type=w740" alt="" style="width: 150px;">
			</div>
			<div id="body_event" style="margin-top: 15%; margin-left: 25%;">
				<img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMjBfODQg/MDAxNTc5NTEyMjIxMTM3.ZvWdkwURj9qw6aQHOBXAPph-v_J5lFGxeHe725PPxSIg.5j6q6MQyMyl6ToCILOaSY0wumUzokEXfv3mki5_CYaEg.JPEG/event_img1.jpg?type=w740" alt="" style="width: 200px; margin-left: 3%;" />

				<img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMjBfMjA3/MDAxNTc5NTEyOTA3MDQz.f0pBrEa_SdGtvWgsSom4ZpWTRPZ2HM6IdY5_ebWMwswg.YC6DLFE7I6wjEflroLdhRupYVVUQMHrbFiVBZTZJ8c0g.JPEG/event_img2.jpg?type=w740" alt="" style="width: 200px; margin-left: 3%;" />
				
				<img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMjBfODQg/MDAxNTc5NTEyMjIxMTM3.ZvWdkwURj9qw6aQHOBXAPph-v_J5lFGxeHe725PPxSIg.5j6q6MQyMyl6ToCILOaSY0wumUzokEXfv3mki5_CYaEg.JPEG/event_img1.jpg?type=w740" alt="" style="width: 200px; margin-left: 3%;" />
				
				<img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMjBfMjA3/MDAxNTc5NTEyOTA3MDQz.f0pBrEa_SdGtvWgsSom4ZpWTRPZ2HM6IdY5_ebWMwswg.YC6DLFE7I6wjEflroLdhRupYVVUQMHrbFiVBZTZJ8c0g.JPEG/event_img2.jpg?type=w740" alt="" style="width: 200px; margin-left: 3%;" />
			</div>
		</div>
		<div id="s-footer" style="margin-top: 100px;">
			<h3 style="margin-left: 37%;">2019 - 2020 © Goodfor. - www.Goodfor.com</h3>
		</div>
		</div>`
	},
	
	join: () => {
	    return `
	    
	    <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
	<title>Bootstrap Elegant Sign Up Form</title>

	<style type="text/css">
		body {
			color: #999;
			background: #fafafa;
			font-family: 'Roboto', sans-serif;
		}
		.form-control {
	        min-height: 41px;
			box-shadow: none;
			border-color: #e6e6e6;
		}
		.form-control:focus {
			border-color: #007bff;
		}
	    .form-control, .btn {        
	        border-radius: 3px;
	    }
		.signup-form {
			width: 425px;
			margin: 0 auto;
			padding: 30px 0;
		}
		.signup-form h2 {
			color: #333;
			font-weight: bold;
	        margin: 0 0 25px;
	    }
	    .signup-form form {
	    	margin-bottom: 15px;
	        background: #fff;
			border: 1px solid #f4f4f4;
	        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	        padding: 40px 50px;
	    }
		.signup-form .form-group {
			margin-bottom: 20px;
		}
		.signup-form label {
			font-weight: normal;
			font-size: 13px;
		}
		.signup-form input[type="checkbox"] {
			margin-top: 2px;
		}    
	    .signup-form .btn {        
	        font-size: 16px;
	        font-weight: bold;
			background: #007bff;
			border: none;
			min-width: 140px;
	        outline: none !important;
	    }
		.signup-form .btn:hover, .signup-form .btn:focus {
			background: #00b3b3;
		}
		.signup-form a {
			color: #007bff;
			text-decoration: none;
		}	
		.signup-form a:hover {
			text-decoration: underline;
		}
	</style>
	</head>

	<body>
	<div class="signup-form">
	    <form action="/examples/actions/confirmation.php" method="post">
			<h2>회원가입</h2>
	        <div class="form-group">
	        	<input type="text" id="join_uid" class="form-control" name="username" placeholder="Username" required="required">
	        </div>
	        <div class="form-group">
	        	<input type="email" class="form-control" name="email" placeholder="Email Address" required="required">
	        </div>
			<div class="form-group">
	            <input type="password" id="join_upw" class="form-control" name="password" placeholder="Password" required="required">
	        </div>
			<div class="form-group">
	            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
	        </div>        
	        <div class="form-group">
				<label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
			</div>
			<div class="form-group">
	            <button id="btn_join" type="submit" class="btn btn-primary btn-lg">회원가입</button>
	        </div>
	    </form>
		<div class="text-center">Already have an account? </div>
	</div>

	</body>
	     
	       
	    `
	  },

	  login: ()=> {
	    return `
	        
	    <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bootstrap Simple Login Form</title>

	<style type="text/css">
		.login-form {
			width: 340px;
	    	margin: 50px auto;
		}
	    .login-form form {
	    	margin-bottom: 15px;
	        background: #f7f7f7;
	        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	        padding: 30px;
	    }
	    .login-form h2 {
	        margin: 0 0 15px;
	    }
	    .form-control, .btn {
	        min-height: 38px;
	        border-radius: 2px;
	    }
	    .btn {        
	        font-size: 15px;
	        font-weight: bold;
	    }
	</style>
	</head>

	<body>
		<div class="login-form">
		    <form action="/examples/actions/confirmation.php" method="post">
		        <h2 class="text-center">Log in</h2>       
		        <div class="form-group">
		            <input id="login_uid" type="text" class="form-control" placeholder="Username" required="required" value="kim">
		        </div>
		        <div class="form-group">
		            <input id="login_upw" type="password" class="form-control" placeholder="Password" required="required" value="1234">
		        </div>
		        <div class="form-group">
		            <button id="btn_login" type="submit" class="btn btn-primary btn-block">Log in</button>
		        </div>
		        <div class="clearfix">
		            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
		            <a href="#" class="pull-right">Forgot Password?</a>
		        </div>        
		    </form>
		    <p class="text-center"><a id="a_join"href="#">회원가입</a></p>
		     <p class="text-center"><a id="a_custMain"href="#">고객센터</a></p>
		     <p class="text-center"><a id="a_mypage"href="#">마이페이지</a></p>
	</div>

	</body>
	  
	  `    
	  
	  },

    	
};
