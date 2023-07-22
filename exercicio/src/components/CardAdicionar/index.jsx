import React, { useState } from 'react';

function CardAdicionar() {
  const [valorImput, setValorImput] = useState('');

  const manipulaAlteracaoImput = (e) => {
    setValorImput(e.target.value);
  };

  const handleButtonClick = () => {
    setValorImput(valorImput);
  };

  return (
    <>
      <div>
        <input 
          type="text"
          placeholder="adicionar tarefa"
          value={valorImput}
          onChange={manipulaAlteracaoImput}
        />
        <button onClick={handleButtonClick}>Adicionar</button>
      </div>
      <h1>Tarefas</h1>
    </>
  );
}

export default CardAdicionar;
