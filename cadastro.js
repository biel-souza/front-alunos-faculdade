document.getElementById('studentForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const endereco = await fetch('http://localhost:8080/endereco', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch((error) => {
        console.error('Erro:', error);
    });

    data = {
        ...data,
        endereco: {
            id: endereco.id,
        }
    }

    await fetch('http://localhost:8080/alunos', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });

    window.location.href = '/lista.html'
});
