document.getElementById('studentForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data)

    const endereco = await fetch('http://localhost:8080/endereco', {
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

    console.log(endereco)


    // fetch('https://localhost:8080/alunos', {
    //     method: 'POST', 
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data) 
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Sucesso:', data);
    // })
    // .catch((error) => {
    //     console.error('Erro:', error);
    // });
});
