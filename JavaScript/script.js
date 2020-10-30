//Handling  the continue without login click
let withoutLogin = document.getElementById('without-login');

if(withoutLogin != null){
	withoutLogin.addEventListener("click",()=>alert("continue without login!!"))
}

// Handling the FB Google Email method of login
let fb = document.getElementById('fb')
let google = document.getElementById('google')
let email = document.getElementById('email')

if (fb != null) {
	fb.addEventListener('click',()=>alert('FB Login'))
}

if (google != null) {
	google.addEventListener('click',()=>alert('Google Login'))
}

if (email != null) {
	email.addEventListener('click',()=>alert('E-mail Login'))
}

// Handling Terms and Policy Click
let term = document.getElementById('term-service')
let policy = document.getElementById('policy')

if (term != null) {
	term.addEventListener('click',()=>alert("Term of service"))
}

if (policy != null) {
	policy.addEventListener('click',()=>alert("Privacy Policy"))
}




// Hadling Form
let form = document.getElementById('form');
let mobileNo = document.getElementById('mobile-no')
let otp = document.getElementById('OTP')
let sentMobile = document.getElementById('sent-mobile')
let changeMobile = document.getElementById('change-mobile')
let resendOtp = document.getElementById('resend-otp')

if(form != null){
	form.addEventListener('submit',(e)=>{
	// Preventing form to refresh page on submit
	e.preventDefault();

	//Baisc Input Validation
	if(mobileNo.value == ""){
		alert("Enter the correct Mobile No.")
		return false;
	}

 	else if(otp.value == ""){
		alert("Enter the correct OTP")
		return false
	}
	else{
		sentMobile.innerText = mobileNo.value
		mobileNo.disabled = true
        display = document.querySelector('#timmer')
   		startTimer(120, display)
   		changeMobile.addEventListener('click',()=>mobileNo.disabled = false)
   		resendOtp.addEventListener('click',()=>alert("OTP Resended!"))
	}

})
}


//Countdown Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds

        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}		