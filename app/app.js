window.addEventListener("load", () =>{

    const form = document.querySelectorAll('form');
    const emailValidation = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    form.forEach(form =>{
        const alert = form.parentElement.querySelector('.alert');
        form.addEventListener('submit', (e) =>{
        e.preventDefault();
        query = e.target.querySelector('input').value;

        if(emailValidation.test(query) === true){
            alert.textContent = '';
           form.querySelector('input').style.borderColor = 'black';
           e.target.querySelector('input').value = '';

        }
        else{
            form.querySelector('input').style.borderColor = 'hsl(342, 54%, 50%)';
         
            if(form.classList.contains('flex-form1')){
            alert.classList.add('alert-red');
            }
            else if(form.classList.contains('flex-form2')){
            alert.classList.add('alert-white');    
            }
            alert.textContent = 'Please check your email';
            e.target.querySelector('input').value = '';
        }
        
    })

})

  



})