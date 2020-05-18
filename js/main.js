function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
  }

  const tituloTopo = document.querySelector('h1');
  typeWriter(tituloTopo);



  function enviaEmail(){

    const nome = document.querySelector('#nome').value
    const telefone = document.querySelector('#telefone').value
    const mensagem = document.querySelector('#mensagem').value

    if(telefone && nome && mensagem){

        mail.href = `mailto:gabrielmatosgm99@gmail.com?subject=Ola!%20preciso%20de%20uma%20ajudinha&body=Oi%20,%20meu%20nome%20e%20${nome}.%0DMeu%20telefone%20e:%20${telefone}%20.%0D${mensagem}`

        alert(`Obrigado pelo contato, ${nome}! Seu app de e-mail abrirá agora e basta clicar em enviar que em pouco tempo te retornarei e espero que consiga te ajudar!.`)
    
    }else{

        alert(`Por favor, preencha todos os campos para que possamos ter um melhor contato!`)

    }


    return 0

  }