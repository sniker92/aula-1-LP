$("#btOla").click(
    function(){
        //cadastro =
        //{
            //'Nome':document.getElementById('inputNome').value,
            //'Endereco':document.getElementById('inputEndereco').value,
            //'Email':document.getElementById('inputEmail').value
        //}
        
        //const nome = document.getElementById('inputnome').value;

       // alert("Meu nome é: " + cadastro.Nome + " Sou de " + cadastro.Endereco);
        //alert(cadastro.Endereco);
       //alert(cadastro.Email);
       calculo =
       {
           'a':document.getElementById('inputA').value,
           'b':document.getElementById('inputB').value
        
       }
       alert(parseInt(calculo.a) + parseInt(calculo.b));
    }
)