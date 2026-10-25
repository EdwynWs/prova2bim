document.addEventListener("DOMContentLoaded", function() {

    carregarPedidos();

    let btnBuscar = document.querySelector("#btnBuscar");

    btnBuscar.addEventListener("click", function() {
        //lê o texto do input de busca;
        let parametro = document.querySelector("#txtBusca").value;
        carregarPedidos(parametro);
    })

    function carregarPedidos(parametro) {
        fetch("/admin/reservas" + (parametro ? "?busca=" + parametro : ""))
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(corpo) {
            montarTabela(corpo);
        })
    }

    function montarTabela(listaPedidos) {
        let html = "";

        for(let i = 0; i < listaPedidos.length; i++) {
            html += `<tr>
                        <td>${listaPedidos[i].id}</td>
                        <td>R$ ${listaPedidos[i].nome}</td>
                        <td>${listaPedidos[i].email}</td>
                        <td>${listaPedidos[i].date}</td>
                        <td>R$ ${listaPedidos[i].assento}</td>
                        <td>R$ ${listaPedidos[i].sessao}</td>
                    </tr>`;
        }

        document.querySelector("#tabelaPedidos > tbody").innerHTML = html;
    }
})