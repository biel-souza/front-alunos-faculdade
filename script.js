let students = [];


function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.getElementById('list').style.display = 'block';
}

async function saveStudent(event) {
    event.preventDefault();
    const id= document.getElementById('id').value
    const editedStudent = {
        id,
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        turma: document.getElementById('turma').value,
        endereco: {
            id: document.getElementById('endereco_id').value,
        }
    };

    await fetch(`http://localhost:8080/alunos`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedStudent) 
    })
    .then(() => {})
    .catch((error) => {
        console.error('Erro:', error);
    });

    location.reload();
}


document.getElementById('editForm').addEventListener('submit', saveStudent);

