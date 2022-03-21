
import firebase from '../../firebase'
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import { useState } from 'react';

const db = getFirestore(firebase)

const col = collection(db, 'entregas');

// promise .then
async function listar()
{
  const res = await getDocs(col);

  let listagem = [];
  res.forEach(function(item){
    listagem.push(item.data())
  })

  return listagem;

}

export default function Listagem() {

  let valores = listar();
  let [tabela, setTabela] = useState([])

  valores.then(function(res){

    setTabela(res);
  
  }).catch(function(erro){
    console.log(erro)
  })

  function Listar(props)
  {
    let lista = props.tabela.map(function(item){
      return (
          <tr>
              <td>{item.data_entrega}</td>
              <td>{item.cliente_nome}</td>
              <td>{item.cliente_endereco}</td>
              <td>{item.cod_produto}</td>
              <td>statuss</td>
            </tr>
      )
    })

    return lista
  }


  return (
    <div>
      <h2>Entregas do Dia</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Data de Entrega</th>
              <th scope="col">Nome Cliente</th>
              <th scope="col">Endereço Entrega</th>
              <th scope="col">Cod Produto</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            
            

          </tbody>
        </table>
      </div>
    </div>
  );
}