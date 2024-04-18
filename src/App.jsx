// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};



const App = () => {

  const dados = mario;
  
  const valoresArrayStr = dados.compras.map((item) => item.preco);

  const clearArray = valoresArrayStr.map(sring => sring.replace('R$ ', ''));

  const numbers = clearArray.map(Number);

  function totalGasto() {

    let soma = numbers.reduce((total, numero) => total + numero, 0);

    return soma;
  }


  return (
    <>
      <h1>Nome: {dados.cliente}</h1>
      <h1>Idade: {dados.idade}</h1>
      <h1>
        Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
      </h1>
      <h1>Total gasto: R$ {totalGasto()}</h1>
      <span>{totalGasto() > 10000 ? 'Você está gastando muito' : ''}</span>
    </>
  );
};

export default App;

