const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;
    
    if (!email || !password) {
        alert('Всі поля мають бути заповнені');
    } else { 
        const listenerForm = {
            email,
            password
        };
        console.log(listenerForm);
        loginForm.reset();
     }
    }
