window.onload = () => {
    //Show Email Modal
    let emailModal = document.getElementsByClassName("email-modal")[0];
    let modalState = false;
    document.documentElement.addEventListener("mouseleave", () =>{
        if(modalState == false){
            emailModal.classList.add("email-modal--visible");
            modalState = true;
        }
    })
    
    //Close Email Modal 
    let closeModal = () => {
        emailModal.classList.remove("email-modal--visible");
    }

    //Close Button Click
    let closeButton = document.getElementsByClassName("email-modal__close--btn")[0];
    closeButton.addEventListener("click", () => {
        closeModal();
    })


    //Email Validation
    function ValidateEmail(mail) 
    { return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))}

    //Email Button Click
    let emailButton = document.getElementsByClassName("email-modal__button")[0];
    let emailInput = document.getElementsByClassName("email-modal__input")[0];

    emailButton.addEventListener("click", () => {
        if(ValidateEmail(emailInput.value)){
            showThankMessage();
            removeErrorMesssage();
        } else {
            addErrorMesssage();
        }
    })


    //Show Thank you message
    let thankMessage = document.getElementsByClassName("email-modal__thank")[0];
    let showThankMessage = () => {
        thankMessage.classList.add("email-modal__thank--success");
        setTimeout( () => {
            closeModal();
        }, 3000)
    }

    //Add Error Message Email Validation
    let emailForm = document.getElementsByClassName("email-modal__form--group")[0];
    let errorMessageActive =  document.getElementsByClassName("email-modal__error-message")[0];
    
    let addErrorMesssage = () => {
        emailForm.classList.add("email-modal__form--group--error");
        errorMessageActive.classList.add("email-modal__error-message--active");
    }

    //Remove Error Message Email Validation
    let removeErrorMesssage = () => {
        emailForm.classList.remove("email-modal__form--group--error");
        errorMessageActive.classList.remove("email-modal__error-message--active");
    }

    //Decline Offer
    let declineOffer = document.getElementsByClassName("email-modal__decline--offer")[0];
    declineOffer.addEventListener("click", () => {
        closeModal();
    })
}