function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    let section = document.getElementById("resultados");
    
    if (!campoPesquisa) {
        section.innerHTML = "<p class='notFound'>Campo de pesquisa vazio.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    resultados = "";
    nome = "";
    esporte = "";
    modalidade = "";
    classificacao = "";
    descricao = "";
    tags = "";
    for (atleta of atletas){
        nome = atleta.nome.toLowerCase()
        esporte = atleta.esporte.toLowerCase()
        modalidade = atleta.modalidade.toLowerCase()
        classificacao = atleta.classificacao.toLowerCase()
        descricao = atleta.descricao.toLowerCase()
        tags = atleta.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || esporte.includes(campoPesquisa) || tags.includes(campoPesquisa))  {
            resultados += `
                <div class="item-resultado">
                    <div class="Nome-imagem">
                    <h2>${atleta.nome}</h2>
                    <img class="foto" src=${atleta.imagem}>
                    </div>
                    <h4>Esporte: ${atleta.esporte}</h4>
                    <h5>Modalidade: ${atleta.modalidade}</h5>
                    <h5>Classificação: ${atleta.classificacao}</h5>
                    <p>${atleta.descricao}</p>
                           
                </div>
            
            `;
        }
        else{
            section.innerHTML = "<p class='notFound'>Nenhum atleta encontrado.</p>"
            return
        }

    
    }
    section.innerHTML = resultados;
}


function exibir(){
    let section = document.getElementById("resultados");
    
    resultados = "";
    for (atleta of atletas){
        resultados += `
            <div class="item-resultado">
                 <div class="Nome-imagem">
                <h2>${atleta.nome}</h2>
                <img class="foto" src=${atleta.imagem}>
                </div>
                <h4>Esporte: ${atleta.esporte}</h4>
                <h5>Modalidade: ${atleta.modalidade}</h5>
                <h5>Classificação: ${atleta.classificacao}</h5>
                <p>${atleta.descricao}</p>
                           
            </div>
            
        `;
        }

    
        section.innerHTML = resultados;
    }


