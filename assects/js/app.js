// get elements
const student_form = document.getElementById('student_form');
const msg = document.querySelector('.msg');
const preloader = document.querySelector('.preloader');
const emailFeild = document.querySelector('input[name="email"]');
const phoneFeild = document.querySelector('input[name="phone"]');
const email_validation = document.getElementById('email_validation');
const phone_validation = document.getElementById('phone_validation');

// form submit
student_form.onsubmit = (e) => {
    e.preventDefault();

    // preloder show
    preloader.style.display = 'block';

    let timeout = setTimeout(() => {

        //preloader hide
        preloader.style.display = 'none';

        // student data form dom
        let form_data = new FormData(e.target);
        let {name, email, phone, username} = Object.fromEntries(form_data.entries());

        // form validation check
        if(!name || !email || !phone || !username){
            msg.innerHTML = setAlert('All feilds are requires');
        }else {
            msg.innerHTML = setAlert('Data stable', 'success');
            student_form.reset();
            phone_validation.innerHTML = '';
            email_validation.innerHTML = '';
        }

        clearTimeout(timeout)
    }, 2000);
}


// Email check for form
emailFeild.onkeyup = (e) => {
    let email = e.target.value;

    if(emailCheck(email)){
        email_validation.innerHTML = 'valide email address';
        email_validation.className = 'text-success';
    }else {
        email_validation.innerHTML = '* invalide email address';
        email_validation.className = 'text-danger';
    }
}

// Phone check for form 
phoneFeild.onkeyup = (e) => {
    let phone = e.target.value;

    if(phoneCheck(phone)){
        phone_validation.innerHTML = 'valide phone number';
        phone_validation.className = 'text-success';
    }else {
        phone_validation.innerHTML = '* invalide phone number';
        phone_validation.className = 'text-danger';
    }
}