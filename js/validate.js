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
  var ctrl = true;  
  
  if (form.nome.value.length == 0) {
    form.nome.value="";
    form.nome.placeholder="Preencha o Nome";
    //clearOtherClasses(form.nome);
    form.nome.classList.add("red");
    form.nome.focus();
    ctrl = false;
  }
  
  if (form.email.value.length == 0) {
    form.email.value="";
    form.email.placeholder="Preencha o Email";
    //clearOtherClasses(form.email);
    form.email.classList.add("red");
    form.email.focus();
    ctrl = false;
  }
  if (form.assunto.value.length == 0) {
    form.assunto.value="";
    form.assunto.placeholder="Preencha campo Assunto";
    //clearOtherClasses(form.assunto);
    form.assunto.classList.add("red");
    form.assunto.focus();  
    ctrl = false;
  }
  if (form.mensagem.value.length == 0) {
    form.mensagem.value="";
    form.mensagem.placeholder="Preencha campo Mensagem";
    //clearOtherClasses(form.mensagem);
    form.mensagem.classList.add("red");
    form.mensagem.focus();  
    ctrl = false;
  }
  return ctrl;
}
function clearOtherClasses(element){
  element.className="";
}