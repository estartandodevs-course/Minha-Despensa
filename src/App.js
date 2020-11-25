import {EmptyList} from './components/EmptyList/EmptyList'
import  ImgEmptyList  from './assets/img/ImgEmptyList.svg'
import './App.css';


function App() {
  return (
    <div className="App">
     <EmptyList 
     src={ImgEmptyList}
     alt="mulher fazendo"
     desc="Ops! A sua despensa está vazia."
     subTitle="Que tal adicionar itens agora?"
     />
    </div>
  );
}

export default App;
