function scrolltoHowWeWork() {
    var elmnt = document.getElementById("section_how_we_work");
    elmnt.scrollIntoView();
}

function scrolltoEvents() {
    var elmnt = document.getElementById("section_events");
    elmnt.scrollIntoView();
}

function EmailValidation(enteredEmail) {
    var mail_format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (enteredEmail.value.match(mail_format)) {
        document.getElementById("email").value = "";
        return true;
    }
    else {
        alert("Sorry! An invalid email!");
        document.form.email.focus();
        mail_format.test();
        return false;
    }
}

const scrollBtn = document.querySelector('.isShownBtn')
window.onscroll = () => {
    if (window.scrollY > 700) {
        scrollBtn.classList.remove('isShownBtn_hide')
    }
    else if (window.scrollY < 700) {
        scrollBtn.classList.add('isShownBtn_hide')
    }
}

scrollBtn.onclick = () => {
    window.scrollTo (0, 0);
}