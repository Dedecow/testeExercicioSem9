import CardAdicionar from './components/CardAdicionar';
import {useState} from 'react';

function App() {
  const [listaTarefas, setListaTarefas] = useState ([
    {textoTarefa: "Tarefa 1", finalizado: false}
  ])

  return (
    <>
      <div>
        <h1>Tarefa 1 </h1>
        <CardAdicionar />
      </div>
    </>
  );
}

export default App;
