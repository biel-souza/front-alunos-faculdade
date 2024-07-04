document.addEventListener('DOMContentLoaded', async function() {
    // URL da API
    const apiUrl = 'http://localhost:8080/alunos';

    // Fazendo a chamada GET para a API
    const alunos = await fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.statusText);
            }

            return response.json();
        })
        .then(data => {
            console.log('Sucesso:', data);

            const tbody = document.getElementById('studentTableBody');

            data.forEach(aluno => {
                const tr = document.createElement('tr');

                const numeroMatricula = document.createElement('td');
                numeroMatricula.textContent = aluno.id;
                tr.appendChild(numeroMatricula);

                const nome = document.createElement('td');
                nome.textContent = aluno.nome;
                tr.appendChild(nome);

                const idade = document.createElement('td');
                idade.textContent = aluno.idade;
                tr.appendChild(idade);

                const cpf = document.createElement('td');
                cpf.textContent = aluno.cpf;
                tr.appendChild(cpf);

                const telefone = document.createElement('td');
                telefone.textContent = aluno.telefone;
                tr.appendChild(telefone);

                const turma = document.createElement('td');
                turma.textContent = aluno.turma;
                tr.appendChild(turma);

                const endereco = document.createElement('td');
                if(aluno.endereco) {
                    endereco.textContent = `${aluno.endereco?.cidade} | ${aluno.endereco?.estado}`;
                }
                tr.appendChild(endereco);

                const acoes = document.createElement('td');

                const buttonDelete = document.createElement('button');
                buttonDelete.className = 'fas fa-trash-alt icon-blue';
                buttonDelete.style.border = '0';
                buttonDelete.style.cursor = 'pointer';
                buttonDelete.addEventListener('click', async () => {
                    await fetch(`${apiUrl}/${aluno.id}`, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        }})
                    location.reload();
                }
                );

                acoes.appendChild(buttonDelete);

                const buttonEdit = document.createElement('button');
                buttonEdit.className = 'fas fa-pen icon-blue';
                buttonEdit.style.border = '0';
                buttonEdit.style.marginLeft = '15px'
                buttonEdit.style.cursor = 'pointer';
                buttonEdit.addEventListener('click', async () => {
                    openEditModal(aluno);
                }
                );

                acoes.appendChild(buttonEdit);

                tr.appendChild(acoes);

                tbody.appendChild(tr);
                
            });
        })

        function openEditModal(aluno) {
            document.getElementById('endereco_id').value = aluno.endereco.id;
            document.getElementById('id').value = aluno.id;
            document.getElementById('nome').value = aluno.nome;
            document.getElementById('idade').value = aluno.idade;
            document.getElementById('cpf').value = aluno.cpf;
            document.getElementById('telefone').value = aluno.telefone;
            document.getElementById('turma').value = aluno.turma;
            document.getElementById('rua').value = aluno.endereco?.rua;
            document.getElementById('bairro').value = aluno.endereco?.bairro;
            document.getElementById('cidade').value = aluno.endereco?.cidade;
            document.getElementById('estado').value = aluno.endereco.estado;
            document.getElementById('complemento').value = aluno.endereco.complemento;
            document.getElementById('cep').value = aluno.endereco.cep;
            document.getElementById('numero').value = aluno.endereco.numero;
        
            document.getElementById('list').style.display = 'none';
            document.getElementById('editModal').style.display = 'block';
        }
});


