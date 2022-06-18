const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`
}


// Email pattern for form 
const emailCheck = (email) => {
    let pattern = /^[a-z0-9\._]{3,}@[a-z0-9]{2,}\.[a-z]{2,5}$/;
    return pattern.test(email);
}

//Phone pattern for form
const phoneCheck = (phone) => {
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(phone);
}