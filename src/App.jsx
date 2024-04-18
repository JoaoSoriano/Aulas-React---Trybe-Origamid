// EXERCÍCIO 1
import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };



// const App = () => {

//   const dados = mario;
  
//   const valoresArrayStr = dados.compras.map((item) => item.preco);

//   const clearArray = valoresArrayStr.map(sring => sring.replace('R$ ', ''));

//   const numbers = clearArray.map(Number);

//   function totalGasto() {

//     let soma = numbers.reduce((total, numero) => total + numero, 0);

//     return soma;
//   }


//   return (
//     <>
//       <h1>Nome: {dados.cliente}</h1>
//       <h1>Idade: {dados.idade}</h1>
//       <h1>
//         Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
//       </h1>
//       <h1>Total gasto: R$ {totalGasto()}</h1>
//       <span>{totalGasto() > 10000 ? 'Você está gastando muito' : ''}</span>
//     </>
//   );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------

// EXERCÍCIO 2

// Organize os produtos como mostrado no vídeo

// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {
//   return (
//     <>
//       <section>
//         {produtos.map(({ id, nome, preco, cores }) => (
//           <div key={id}>
//             <h1>{nome}</h1>
//             <p>Preço: {preco}</p>
//             <ul>
//               {cores.map((cor) => (
//                 <li style={{backgroundColor: cor, color: 'white'}} key={cor}>{cor}</li>
//               ))}
//             </ul>
//           </div>
//         ))}

        
//       </section>
//     </>
//   )
// };

// ------------------------------------------------------------------------------------------------------

//EXERCICIO 3
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
