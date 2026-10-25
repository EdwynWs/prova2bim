document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function limparValidacao() {
        document.getElementById("inputNome").style["border-color"] = "#ced4da";
        document.getElementById("inputEmail").style["border-color"] = "#ced4da";
        document.getElementById("inputData").style["border-color"] = "#ced4da";
        document.getElementById("inputAssento").style["border-color"] = "#ced4da";
        document.getElementById("inputSessaoId").style["border-color"] = "#ced4da";
    }

    function cadastrar() {
        limparValidacao();
        let nome = document.querySelector("#inputNome").value;
        let email = document.querySelector("#inputEmail").value;
        let data = document.querySelector("#inputData").value;
        let assento = document.querySelector("#inputAssento").value;
        let sessaoId = document.querySelector("#inputSessaoId").value;

        let listaErros = [];
        if(nome == "") {
            listaErros.push("inputNome");
        }
        if(email == "") {
            listaErros.push("inputEmail");
        }
        if(data == "") {
            listaErros.push("inputData");
        }
        if(assento == 0) {
            listaErros.push("inputAssento");
        }
        if(sessaoId == 0) {
            listaErros.push("inputSessaoId");
        }

        if(listaErros.length == 0) {
            //enviar ao backend com fetch

            let obj = {
                nome: data,
                email: email,
                data: data,
                assento: assento,
                sessaoId: sessaoId,
            }

            fetch("/", {
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
                    window.location.href="/";
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