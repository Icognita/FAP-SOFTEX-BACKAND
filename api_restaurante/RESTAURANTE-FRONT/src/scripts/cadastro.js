document.addEventListener('DOMContentLoaded', function() {
        const addItemForm = document.getElementById('add-item-form');
        addItemForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const id = parseInt(document.getElementById('id').value);
            const nome = document.getElementById('nome').value;
            const preco = parseFloat(document.getElementById('preco').value);

            if (!nome || isNaN(preco) || !id ) {
                alert('Por favor, preencha o ID, nome e o preço corretamente.');
                return;
            }

            const novoItem = {
                id: id,
                nome: nome,
                preco: preco
            };

            fetch('http://localhost:3000/menu/cardapio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoItem)
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                // Limpa o formulário após o cadastro
                document.getElementById('id').value = '';
                document.getElementById('nome').value = '';
                document.getElementById('preco').value = '';
            })
            .catch(error => console.error('Erro ao adicionar item:', error));
    });
});