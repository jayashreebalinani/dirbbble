
import './App.css'
export default function Footer()
{
  
  var id = document.getElementById('home-divid')
  id.innerHTML = ""
  id.classList.remove('home-div')
  var di1 = document.createElement("div")
  di1.style.direction = "grid"
  di1.innerHTML=`<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <nav class="navbar navbar-expand-lg navbar-light bg-light"width="100%">
  <img src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2014.png" alt="" height="40px" width="60px" style="margin-left: 30px;">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" style="margin-left: 20px;">Inspriation <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find Work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Learn Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Go Pro</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hire Designers</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0" style="padding-left: 350px;">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </form>
    <img src="https://cdn-icons-png.flaticon.com/512/201/201231.png" alt="" height="30px" width="40px" style="padding-left: 20px;">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" height="30px" width="50px"  style="padding-left: 20px;">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  style="margin-left: 20px; border: none;color:white;background-color:rgb(243, 72, 129);">Upload</button>
  </div>
</nav>
  <div class="email">
      <h2 style="font-weight:600;color: black;">Please verify your email...</h2><br>
      <img src="https://cdn.iconscout.com/icon/free/png-256/free-email-2026367-1713640.png" alt="" height="70px" width="70px"><br><br>
      <p>Please verify your email address.We've sent a confirmation email to:</p>
      <b style="color: black;">account@refero.design</b><br><br>
      <p>Click the confirmation link in that email to begin using dribbble.</p>
      <p>Didn't receive the email?Check your Spam folder,it may have been caught by a filter.If<br> you still don't see it,you can <a id="resend">resend the confirmation email.</a></p>
      <p>Wrong email address?<a id="resend">Change it.</a></p>

  </div>


<div class="container">
<div class="row">
  <div class="col-lg-2 col-md-6 col-sm-6 col-12">
    <div class="logo">
      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Dribbble3_colored_svg-512.png" alt="" height="100px" width="100px">
    </div>
    <p id="font">Dribbble is the world's leading<br>community for creatives to share, grow<br>and get hired</p>
    <div class="social">
      <img src="https://iconape.com/wp-content/png_logo_vector/dribbble-4.png" alt="" height="30px" width="30px">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png" alt="" height="30px" width="30px">
      <img src="https://www.shareicon.net/data/2016/07/13/606432_facebook_2048x2048.png" alt="" height="33px" width="33px">
      <img src="https://t3.ftcdn.net/jpg/05/24/94/88/360_F_524948861_45t7zSGFpphqa2jy2I8d5imBHq5A21H0.png" alt="" height="27px" width="27px">
      <img src="https://seeklogo.com/images/P/pinterest-logo-E994F3A9FB-seeklogo.com.png" alt="" height="27px" width="27px">
    </div>
  </div>
  <div class="col-lg-2 col-md-6 col-sm-6 col-example">
    <p id="head">For designers</p>
    <p id="font">Go Pro!<br><br>Explore design work<br><br>Design blog<br><br>Overtime podcast<br><br>Playoffs<br><br>Weekly Warm-up<br><br>Refer a friend<br><br>Code of conduct</p>
  </div>
  <div class="col-lg-2 col-md-6 col-sm-6 col-example">
    <p id="head">Hire deigners</p>
    <p id="font">Post a job opening<br><br>Post a freelance<br>project<br><br>search for designers</p>
    <p id="head">Brands</p>
    <p id="font">Advertise with us</p>
  </div>
  <div class="col-lg-2 col-md-6 col-sm-6 col-example">
    <p id="head">Company</p>
    <p id="font">About<br><br>Careers<br><br>Support<br><br>Media kit<br><br>Testimonials<br><br>API<br><br>Terms of service<br><br>Privacy policy<br><br>Cookie policy</p>
  </div>
  <div class="col-lg-2 col-md-6 col-sm-6 col-example">
    <p id="head">Directories</p>
    <p id="font">Design jobs<br><br>Deigners for hire<br><br>Freelance designers<br><br>for hire<br><br>Tags<br><br>Places</p>
    <p id="head">Design assests</p>
    <p id="font">Dribbble Marketplace<br><br>Creative Market<br><br>Fontspring<br><br>Font Squirrel</p>
  </div>
  <div class="col-lg-2 col-md-6 col-sm-6 col-example">
    <p id="head">Design Resources</p>
    <p id="font">Freelancing<br><br>Design Hiring<br><br>Design Portfolio<br><br>Design Education<br>Creative Process<br>Design Industry<br>Trends</p>
  </div>
</div>
</div>
<br><br>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
`


id.append(di1)
  
}


