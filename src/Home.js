import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Profile from './Profile'
import logo from './logodirbble.png'
export default function Home()
{
    
(function () {
   
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  sessionStorage.setItem('homeid','home-div')
    return(
    <>
    <div className='home-div' id='home-divid'>
    <div class="img-div">
       
        <img src={logo} style={{marginLeft:'50px'}}></img> <br/>
        <p className='sub-text'>Discover the world's top <br></br>Designer & Creatives</p>
        
        <img id="main-img"src="https://media.licdn.com/dms/image/D4D12AQGoU-nQ8beeCg/article-cover_image-shrink_720_1280/0/1697681240903?e=2147483647&v=beta&t=R4Io-pxqAzE9z0BRkRWBQNWH1Wzuh4fr-RQV7fv3-K0"></img>
    </div>
    <div className='signup'>
    <div className='form'>
        <h3 style={{fontWeight:'800',fontFamily:'sans-serif'}}>Sign up to Dribbble</h3>
       
        
        <span id='ifuser_there'><br /></span>
        <span style={{color:'white'}}></span>
        <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-3">
    <label for="validationCustom01" class="form-label">Name</label>
    <input type="text" class="form-control" style={{backgroundColor:'#e3e2e2'}}   id="validationCustom01"  required></input>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div> 
  <div class="col-md-3">
    <label for="validationCustom02" class="form-label">Username</label>
    <input type="text" class="form-control" style={{backgroundColor:'#e3e2e2'}}   id="validationCustom02"  required></input>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
<span style={{color:'white'}}></span>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label" >Email</label>
    <input type="text" class="form-control" style={{backgroundColor:'#e3e2e2'}}  id="validationCustom03" required></input>
    <div class="invalid-feedback">
      Please provide a valid Email.
    </div>
  </div>
  <span style={{color:'white'}}></span>
  <div class="col-md-6">
    <label for="validationCustom05" class="form-label" placeholder="hbwehb">Password</label>
    <input type="password" class="form-control" style={{backgroundColor:'#e3e2e2'}}    id="validationCustom05" placeholder="6+characters" required></input>
    <div class="invalid-feedback">
      Please provide a Password.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
      <label class="form-check-label" for="invalidCheck">
       Creating an account you're okay with our <span style={{color:"blue"}}> Terms of <br /> Service, Privacy Policy</span>, and our default Notification <br /><span style={{color:"blue"}}> Settings</span>.      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-dark" onClick={Profile} style={{backgroundColor:"rgb(220, 68, 119)",padding:'5px 35px 5px 35px',border:'1px solid white'}} type="submit">Create Account</button>
   <p style={{color:'grey',fontSize:'13px'}}>This site is protected by reCAPTCHA and the Google<br></br><a href="" style={{textDecoration:"none"}}>Privacy Policy</a>,and our default <a href="" style={{textDecoration:"none"}}>Notification Settings</a></p>
  </div>
</form>
        
        
    </div>
    </div>
    <h3 style={{fontSize:"13px",marginTop:'3%',fontWeight:'600'}}>Already a member?
      <a href="#" style={{textDecoration:'none'}}>Sign in</a>
    </h3>
    </div>
    
    </>
    )
}