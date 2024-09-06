
function pesquisar() {
    // Obtém o elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o elemento de entrada de texto onde o usuário digita o termo a ser pesquisado
    let input = document.getElementById("nome-input");

    // Converte o termo de pesquisa para letras minúsculas para facilitar a comparação
    let termoPesquisa = input.value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let tags="";

    // Itera sobre cada elemento (objeto) do array de dados
    for (let dado of dados) {
        
        // Verifica se o título do objeto contém o termo pesquisado (ignorando maiúsculas e minúsculas)
        if (dado.titulo.toLowerCase().includes(termoPesquisa)) {
            // Se o título contém o termo, adiciona um novo elemento HTML à string de resultados 
            resultados += `
                <div class="item-resultado">
                    <a style="text-align: center;"href="${dado.link}"> Leia a Resenha</a>
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    
                    
                   
                    <img src="${dado.imagem}" alt="">
                </div>
            `;
        }
    }
     
    
    if (!resultados){
        resultados="<p>Nada foi encontrado</p>"
    }

    // Substitui o conteúdo da seção de resultados pelo HTML gerado
    section.innerHTML = resultados;
}

// Exibe no console a descrição do primeiro elemento do array de dados (para fins de depuração)
console.log(dados[0].descricao);












    

