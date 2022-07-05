//Seu JavaScript de validação aqui
var form = document.querySelector('.formcontato__form');
var holders = {
    nome: [form.nome,     form.nome.placeholder],
   email: [form.email,    form.email.placeholder],
 assunto: [form.assunto,  form.assunto.placeholder],
    mens: [form.mensagem, form.mensagem.placeholder]
}
for(let i = 0; i < holders.length; i++) {
  holders[i][0].addEventListener('cilck', function(e) {
    holders[i][0].value="";
    holders[i][0].placeholder=holders[i][1];
    clearOtherClasses(holders[i][0]);
    holders[i][0].classList.add("grey");
    //e.stopPropagation();
  }); 
}      
var ebtn = document.querySelector('.formcontato__botao');
ebtn.addEventListener('click', function(e) {
  if(!validaForm(form)) {
     //setTimeout( () => {}, 2000); 
     //return false;
     e.preventDefault(); // this avoid page reload
  } else {
     alert(form.nome.value + ' sua mensagem foi enviada com sucesso !') 
  }
});

function validaForm(form) {
  var vret = true;
  var campos = [ 
    [form.nome, 50, false],
    [form.email, 50, true],
    [form.assunto, 50, false],
    [form.mensagem, 300, false]
  ]

  for(let i = 0; i < campos.length; i++) {
    var el = campos[i][0];
    var len = campos[i][1];
    var log = campos[i][2];

    if (!validaConteudo(el, len, log)) {
      vret = false;
      break;
    }
  }

  return vret;

}

//Nome, Assunto : não vazio/branco , max 50 caracteres
//Email : validar por Regex
//Mensagem : não vazio/branco , max 300caracteres
//Botão Submit disabled enquanto não valida
//var form = document.querySelector('.formcontato__form');
//var btn = document.querySelector('.formcontato__botao');
//btn.disabled = validaForm(form);
function validaConteudo(elem, tam, isEmail) {
  var holder = "";
  var ctrl = true;
  if (elem.value.trim().length == 0) {
    holder = "Campo nao pode ser vazio ou branco !";
    ctrl = false;
  } 
  
  if (elem.value.trim().length > tam) {
    holder = "Campo excede " + tam + " letras !";
    ctrl = false;
  } 

  if (isEmail) {
    if (!validaEmail(elem.value)) {
      holder = "Email invalido !";
      ctrl = false; 
    }
  }
  
  if (!ctrl) {
    elem.value = "";
    elem.placeholder = holder;
    elem.classList.add("red");
    elem.focus();
  }

  return ctrl; 
}

function validaEmail(email) {
  //https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  var vret = regex.test(email); 
   
  return vret;  
}
