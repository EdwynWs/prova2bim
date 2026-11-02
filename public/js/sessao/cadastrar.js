document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function limparValidacao() {
        document.getElementById("datahora").style["border-color"] = "#ced4da";
        document.getElementById("preco").style["border-color"] = "#ced4da";
        document.getElementById("filme").style["border-color"] = "#ced4da";
        document.getElementById("sala").style["border-color"] = "#ced4da";
    }

    function cadastrar() {
        limparValidacao();
        let datahora = document.querySelector("#datahora").value;
        let preco = document.querySelector("#preco").value;
        let filme = document.querySelector("#filme").value;
        let sala = document.querySelector("#sala").value;

        let listaErros = [];
        if(datahora == "") {
            listaErros.push("datahora");
        }
        if(preco == "") {
            listaErros.push("preco");
        }
        if(filme == "") {
            listaErros.push("filme");
        }
        if(sala == 0) {
            listaErros.push("sala");
        }

        if(listaErros.length == 0) {
            //enviar ao backend com fetch

            let obj = {
                datahora: datahora,
                preco: preco,
                filme: filme,
                sala: sala,
            }

            fetch("/admin/sessao/cadastrar", {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(r=> {
                return r.json();
            })
            .then(r=> {
                if(r.ok) {
                    window.location.href="/admin/sessao";
                }   
                else {
                    alert(r.msg);
                }
            })
        }
        else{
            //avisar sobre o preenchimento incorreto
            for(let i = 0; i < listaErros.length; i++) {
                let campos = document.getElementById(listaErros[i]);
                campos.style["border-color"] = "red";
            }
            alert("Preencha corretamente os campos indicados!");
        }
    }

})