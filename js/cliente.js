const enderecoForm = document.querySelector(".form-body")
const cepinput = document.querySelector("#cep")
const ruainput = document.querySelector("#rua")
const bairroinput = document.querySelector("#bairro")
const cidadeinput = document.querySelector("#cidade")
const estadoinput = document.querySelector("#estado")

cepinput.addEventListener("keypress",(e) =>{

const onlyNumbers = /[0-9]/;
const tecla = String.fromCharCode(e.keyCode);


if(onlyNumbers.test(tecla)){
   e.preventDefault();
   return;
}

} );

cepinput.addEventListener("keyup",(e) => {

    const inpuvalue = target.value;
if(inputvalue.length === 8){
    getEmdereco(inputvalue);
}
});

const getEmdereco = (cep) => {

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiURL)
    const data = await response.json();
    Console.log(data);
}
}
