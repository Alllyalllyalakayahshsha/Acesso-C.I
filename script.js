const members = [
    { name: 'Anne Bella', ci: '010-12-67-00', age: 10, friend: 'Amiga do coração', foguinho: 35, status: 'Seu Cartão C.I está sendo processado' },
    { name: 'Wesley', ci: '013-26-78-92', age: 13, friend: 'Legítimo', foguinho: 67, status: 'Não disponível' }
];

// Função de Login
document.getElementById('loginBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const ci = document.getElementById('ci').value;
    const member = members.find(m => m.name === name && m.ci === ci);
    if (member) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Dados incorretos. Tente novamente.');
    }
});

// Função de Consultar
document.getElementById('consultBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const ci = document.getElementById('ci').value;
    const member = members.find(m => m.name === name && m.ci === ci);
    if (member) {
        document.getElementById('personalData').innerText = `Nome: ${member.name}\nC.I: ${member.ci}\nIdade: ${member.age}\nAmigo: ${member.friend}\nFoguinho: ${member.foguinho}\nStatus: ${member.status}`;
    } else {
        alert('Membro não encontrado.');
    }
});

// Função de Esqueci meu C.I
document.getElementById('forgotCIBtn').addEventListener('click', function() {
    document.getElementById('forgotCIForm').style.display = 'block';
});

document.getElementById('recoverCIBtn').addEventListener('click', function() {
    const name = document.getElementById('forgotName').value;
    const age = document.getElementById('forgotAge').value;
    const foguinho = document.getElementById('forgotFoguinho').value;
    const member = members.find(m => m.name === name && m.age == age && m.foguinho == foguinho);
    if (member) {
        alert(`Seu C.I é: ${member.ci}`);
    } else {
        alert('Informações incorretas. Tente novamente.');
    }
});

// Função de Cadastrar Membros
document.getElementById('registerMemberBtn').addEventListener('click', function() {
    const password = prompt('Digite a senha para cadastrar:');
    if (password === '2580') {
        document.getElementById('registerMemberForm').style.display = 'block';
    } else {
        alert('Senha incorreta.');
    }
});

document.getElementById('confirmRegisterBtn').addEventListener('click', function() {
    const name = document.getElementById('registerName').value;
    const ci = document.getElementById('registerCI').value;
    const age = document.getElementById('registerAge').value;
    const friend = document.getElementById('registerAmigo').value;
    const foguinho = document.getElementById('registerFoguinho').value;
    const status = document.getElementById('registerStatus').value;

    members.push({ name, ci, age, friend, foguinho, status });
    alert('Membro cadastrado com sucesso!');
    document.getElementById('registerMemberForm').style.display = 'none';
});

// Função de Alterar Informações
document.getElementById('editMemberBtn').addEventListener('click', function() {
    const password = prompt('Digite a senha para alterar:');
    if (password === '6115') {
        document.getElementById('editMemberForm').style.display = 'block';
    } else {
        alert('Senha incorreta.');
    }
});

document.getElementById('confirmEditBtn').addEventListener('click', function() {
    const name = document.getElementById('editName').value;
    const ci = document.getElementById('editCI').value;
    const age = document.getElementById('editAge').value;
    const friend = document.getElementById('editAmigo').value;
    const foguinho = document.getElementById('editFoguinho').value;
    const status = document.getElementById('editStatus').value;

    const member = members.find(m => m.name === name && m.ci === ci);
    if (member) {
        member.name = name;
        member.age = age;
        member.friend = friend;
        member.foguinho = foguinho;
        member.status = status;
        alert('Informações atualizadas com sucesso!');
    } else {
        alert('Membro não encontrado.');
    }

    document.getElementById('editMemberForm').style.display = 'none';
});