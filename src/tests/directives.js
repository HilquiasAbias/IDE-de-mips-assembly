function extrairDiretivas(codigo) {
  const regexData = /(\.data)/;
  const regexWord = /(\.word )(.*)\n/;
  const regexText = /(\.text)/;
  const linhas = codigo.split('\n');

  const objetoDiretivas = {};

  let ultimaDiretiva = '';

  linhas.forEach((linha) => {
      if (linha.match(regexData)) {
          objetoDiretivas['data'] = true;
          ultimaDiretiva = 'data';
      } else if (linha.match(regexWord)) {
          objetoDiretivas['word'] = linha.match(regexWord)[2];
          ultimaDiretiva = 'word';
      } else if (linha.match(regexText)) {
          objetoDiretivas['text'] = '';
          ultimaDiretiva = 'text';
      } else {
          if (ultimaDiretiva === 'text') {
              objetoDiretivas['text'] += linha + '\n';
          }
      }
  });

  return objetoDiretivas;
}