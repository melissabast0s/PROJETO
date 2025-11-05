function iniciarSimulacao() {

    // Mensagens iniciais
    alert("Bem-vindo(a) à Loja!");
    alert("Você pode adicionar produtos ao carrinho e ver o total com desconto!");

    // Lista de produtos, nome e preço
    let produtos = [
        ["Sabonete Natural", 9.90],
        ["Esfoliante de Maracujá", 19.90],
        ["Hidratante Corporal", 29.90],
        ["Óleo de Coco", 24.90],
        ["Cera de Abelha", 14.90],
        ["Shampoo Vegano", 27.90]
    ];

    let carrinho = [];
    let continuar = true;

    // Loop
    while (continuar === true) {

        // Monta a lista de produtos para o usuário escolher
         let lista = "Escolha um produto para adicionar ao carrinho:\n\n";
        let indiceProduto = 0; 
        while (indiceProduto < produtos.length) {
            lista = lista + (indiceProduto + 1) + " - " + produtos[indiceProduto][0] + " (R$ " + produtos[indiceProduto][1].toFixed(2) + ")\n";
            indiceProduto++;
        }
        lista += "\nDigite o número do produto que deseja comprar ou 0 para finalizar.";

        // Lê a resposta do usuário
        let resposta = prompt(lista);

        // Usuário apertou cancelar
        if (resposta === null) {
            continuar = false;
            break;
        }

        // Converte a resposta em número
        let escolha = Number(resposta);

        // Verifica se é válido
        if (escolha !== escolha || escolha < 0 || escolha > produtos.length) {
            alert("Escolha inválida. Tente novamente!");
            continue;
        }

        // Escolha 0 = encerrar
        if (escolha === 0) {
            continuar = false;
            break;
        }

        // Adiciona produto ao carrinho (usando a função)
        adicionarAoCarrinho(carrinho, produtos[escolha - 1]);
    }

    // Calcula subtotal, desconto e total (usando a função)
    calcularTotal(carrinho);
}


//  Função para adicionar produto ao carrinho
function adicionarAoCarrinho(carrinho, produtoEscolhido) {
    carrinho.push(produtoEscolhido);
    alert(produtoEscolhido[0] + " adicionado ao carrinho!");
}


//  Função para calcular subtotal, desconto e total final
function calcularTotal(carrinho) {
    if (carrinho.length > 0) {
        let subtotal = 0;
        let indiceCarrinho = 0;

        while (indiceCarrinho < carrinho.length) {
            subtotal = subtotal +  carrinho[indiceCarrinho][1];
            indiceCarrinho++;
        }

        // Desconto dos itens
        let desconto = 0;
        if (carrinho.length >= 3) {
            desconto = subtotal * 0.10; 
        }

        let totalFinal = subtotal - desconto;

        // Resumo da compra
        let resumo = "Itens no Carrinho:\n\n";
        indiceCarrinho = 0; 
        while (indiceCarrinho < carrinho.length) {
            resumo = resumo + "- " + carrinho[indiceCarrinho][0] + " (R$ " + carrinho[indiceCarrinho][1].toFixed(2) + ")\n";
            indiceCarrinho++;
        }

        resumo = resumo + "\nSubtotal: R$ " + subtotal.toFixed(2);
        resumo = resumo + "\nDesconto: R$ " + desconto.toFixed(2);
        resumo = resumo + "\nTotal Final: R$ " + totalFinal.toFixed(2);

        alert(resumo);
        console.log(resumo);
    } else {
        alert("Nenhum item adicionado ao carrinho.");
    }
}

