// Simulação de dados de alunos (pode ser substituído pela integração com o backend)
let students = [];

// Função para carregar os alunos na tabela
function loadStudents() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.cpf}</td>
            <td>${student.phone}</td>
            <td>${student.class}</td>
            <td>${student.address.street}, ${student.address.neighborhood}, ${student.address.city} - ${student.address.state}</td>
            <td>
                <button class="edit-btn" onclick="openEditModal(${index})"><i class="fas fa-edit"></i> Editar</button>
                <button class="delete-btn" onclick="deleteStudent(${index})"><i class="fas fa-trash-alt"></i> Remover</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para abrir o modal de edição com os dados do aluno selecionado
function openEditModal(index) {
    const student = students[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = student.name;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editCpf').value = student.cpf;
    document.getElementById('editPhone').value = student.phone;
    document.getElementById('editClass').value = student.class;
    document.getElementById('editStreet').value = student.address.street;
    document.getElementById('editNeighborhood').value = student.address.neighborhood;
    document.getElementById('editCity').value = student.address.city;
    document.getElementById('editState').value = student.address.state;
    document.getElementById('editComplement').value = student.address.complement;
    document.getElementById('editZipcode').value = student.address.zipcode;

    document.getElementById('editModal').style.display = 'block';
}

// Função para fechar o modal de edição
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Função para salvar as alterações feitas no aluno
function saveStudent(event) {
    event.preventDefault();
    const index = document.getElementById('editIndex').value;
    const editedStudent = {
        name: document.getElementById('editName').value,
        age: document.getElementById('editAge').value,
        cpf: document.getElementById('editCpf').value,
        phone: document.getElementById('editPhone').value,
        class: document.getElementById('editClass').value,
        address: {
            street: document.getElementById('editStreet').value,
            neighborhood: document.getElementById('editNeighborhood').value,
            city: document.getElementById('editCity').value,
            state: document.getElementById('editState').value,
            complement: document.getElementById('editComplement').value,
            zipcode: document.getElementById('editZipcode').value
        }
    };

    students[index] = editedStudent;
    closeEditModal();
    loadStudents(); // Recarrega a tabela após editar
}

// Função para deletar um aluno da lista
function deleteStudent(index) {
    students.splice(index, 1);
    loadStudents(); // Recarrega a tabela após deletar
}

// Event listener para o formulário de edição
document.getElementById('editForm').addEventListener('submit', saveStudent);

// Carrega os alunos inicialmente (pode ser substituído pela integração com o backend)
loadStudents();
