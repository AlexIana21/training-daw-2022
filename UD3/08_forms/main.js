window.onload = function() {
    const preguntaSi = document.getElementById('pregunta_si');
    const preguntaNo = document.getElementById('pregunta_no');
    const preguntaNsnc = document.getElementById('pregunta_nsnc');
    const opciones = document.getElementById('opciones');
    const condiciones = document.getElementById('condiciones');
    const privacidad = document.getElementById('privacidad');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const descriptionInput = document.getElementById('description');
    const submitButton = document.getElementById('submit');
    const error = document.getElementById('error');

    preguntaSi.onchange = changeValue;
    preguntaNo.onchange = changeValue;

    //  botón de enviar
    function updateSubmitButton() {
        submitButton.disabled = !(condiciones.checked && privacidad.checked);
    }

    //  combo de opciones
    function updateCombo() {
        opciones.disabled = !preguntaSi.checked;
    }

     //form NO FUNCIONA 
     function validateForm(event) {
        

        if (!nameInput.value.trim() || !surnameInput.value.trim()) {
            event.preventDefault();
            error.textContent = 'Nombre y apellidos son obligatorios.';
            return false;
        }

        if (descriptionInput.value.trim().length > 80) {
            event.preventDefault();
            error.textContent = 'La descripción no puede tener más de 80 caracteres.';
            return false;
        }

        return true; 
    }
    

    function changeValue(e) {
        console.log('changed ' + e.target.value);
    }

    //para validar y actualizar asignandolos 
    condiciones.addEventListener('change', updateSubmitButton);
    privacidad.addEventListener('change', updateSubmitButton);
    preguntaSi.addEventListener('change', updateCombo);
    preguntaNo.addEventListener('change', updateCombo);
    preguntaNsnc.addEventListener('change', updateCombo);
    submitButton.addEventListener('click', validateForm);

    //ULTIMO PUNTO NI IDEA
}