
document.addEventListener('DOMContentLoaded', function() {
    // Função para enviar o formulário
    async function submitForm(event) {
        event.preventDefault();
        const form = document.getElementById('signinForm');
        const formData = new FormData(form);
        const accountType = document.getElementById('accountType').value;

        console.log(formData);
        let url = '';
        if (accountType === 'ong') {
            formData.append('role', 'ONG');
            url = 'http://localhost:3000/signin_ongs';
        } else if (accountType === 'user') {
            formData.append('role', 'USER');
            url = 'http://localhost:3000/signin_users';
        }

        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);

        try {
            console.log(url)
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                localStorage.setItem('token', data.token);
                if (accountType === 'ong') {
                    localStorage.setItem('role', "ONG");
                } else if (accountType === 'user') {
                    localStorage.setItem('role', "USER");
                }
                window.location.href = 'home.html';
            } else {
                var myModal = new bootstrap.Modal(document.getElementById('errorsigning'), {
                    keyboard: false
                });
                const text = await response.text()
                document.getElementById('errorMessage').textContent = text;
                myModal.show();
                event.preventDefault();
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Adiciona o event listener para o formulário de inscrição
    document.getElementById('signinForm').addEventListener('submit', submitForm);
});









