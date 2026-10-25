document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function limparValidacao() {
        document.getElementById("inputData").style["border-color"] = "#ced4da";
        document.getElementById("inputPreco").style["border-color"] = "#ced4da";
        document.getElementById("inputFilmeId").style["border-color"] = "#ced4da";
        document.getElementById("inputSalaId").style["border-color"] = "#ced4da";
    }

    function cadastrar() {
        limparValidacao();
        let data = document.querySelector("#inputData").value;
        let preco = document.querySelector("#inputPreco").value;
        let filmeId = document.querySelector("#inputFilmeId").value;
        let salaId = document.querySelector("#inputSalaId").value;

        let listaErros = [];
        if(data == "") {
            listaErros.push("inputData");
        }
        if(preco == 0) {
            listaErros.push("inputPreco");
        }
        if(filmeId == 0) {
            listaErros.push("inputFilmeId");
        }
        if(salaId == 0) {
            listaErros.push("inputSalaId");
        }

        if(listaErros.length == 0) {
            //enviar ao backend com fetch

            let obj = {
                data: data,
                preco: preco,
                filmeId: filmeId,
                salaId: salaId,
            }

            fetch("/admin/sessoes/cadastrar", {
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
                    window.location.href="/admin/sessoes";
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