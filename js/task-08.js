
    const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const emailInput = event.target.elements.email;
    const passwordInput = event.target.elements.password;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Всі поля мають бути заповнені');
        return; 
    }

    const formData = {
        email,
        password
    };

    console.log(formData);
    loginForm.reset();
}
