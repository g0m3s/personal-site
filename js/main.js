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

    const mail = document.querySelector('#mail')
    const nome = document.querySelector('#nome').value
    const telefone = document.querySelector('#telefone').value
    const mensagem = document.querySelector('#mensagem').value

    mail.href = `mailto:gabrielmatosgm99@gmail.com?subject=Ola!%20preciso%20de%20uma%20ajudinha&body=Ola,%20me%20chamo%20${nome}%20e%20tenho%20uma%20mensagem:%20${mensagem}%20%20meu%20telefone%20e%20${telefone}`

    alert(`obrigado pelo contato, ${nome}! em pouco tempo te retornarei o e-mail e espero que consiga te ajudar!.`)

    return 0

  }