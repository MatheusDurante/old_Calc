function idade() {
    let dataDeNascimento = parseInt(prompt("Digite sua data de nascimento"));
    const anoAtual = new Date();
    const esteAno = anoAtual.getFullYear();
    let abaixoTaMorto = esteAno - 130;
  
    if (dataDeNascimento > esteAno) {
      alert("Data de nascimento acima do ano atual");
      return;
    } else if (dataDeNascimento < abaixoTaMorto) {
      alert("Data de nascimento muito antiga para ser validada");
      return;
    } else {
      let idadeDoUsuario = esteAno - dataDeNascimento;
      alert("O usuário tem " + idadeDoUsuario + " anos");
    }
  }
  idade();