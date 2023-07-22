function cardAdicionar() {
    const [valorImput, setValorImput] = useState('');

    var manipulaAlteracaoImput = (e) => {
        setValorImput(e.target.value);
    };
    var handleButtonClick =()=> {
        setValorImput(valorImput);
    };

    return (
      <>
        <div>
            <imput 
            type="text"
            placeholder ="adicionar tarefa"
            value={valorImput}
            onChange={manipulaAlteracaoImput}
            ></imput>
            <button onChange={() => setValorImput((valorImput) => {

            }
                )}>
            </button>
          
          
        </div>
        <h1>Tarefas</h1>
        
      </>
    )
  }
  export default cardAdicionar;