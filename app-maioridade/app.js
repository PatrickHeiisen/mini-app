/**
 * validação da maioridade
 * @author Patrick G
 */

// função para validação de maioridade
function validar(event){
    // a linha abaixo desabilita o comportamento padrao de envio do formulario
    event.preventDefault()
    //alert("teste de envio")
    let nome = document.getElementById('nome').value
    //alert(nome)
    //console.log(nome)
    let idade = document.getElementById('idade').value
    //Saida
    document.getElementById('aluno').value=`Aluno: ${nome}`

    if (idade < 18){
        document.getElementById('status').value="Menor de idade"
    }else{
        document.getElementById('status').value="Maior de idade"
    }
}
