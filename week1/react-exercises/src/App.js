import './App.css';
import HobbyList from './components/HobbyList'
import Guarantee from './components/Guarantee';
import Counter from './components/Counter'
function App() {
  const gurantee = [
    {
      id : 1,
      img: '/images/f-delivery.png',
      title: 'Free shipping',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum aliquam beatae eligendi ad qui magni mollitia quaerat omnis'
  },
    {
      id : 2,
      img: '/images/coin.png',
      title: '100% Mondey back',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum aliquam beatae eligendi ad qui magni mollitia quaerat omnis'
  },
    {
      id : 3,
      img: '/images/chat.png',
      title: 'Online support 24/7',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum aliquam beatae eligendi ad qui magni mollitia quaerat omnis'
  }
  ]
  return (
    <div className="App">
      <h1>React Exercises HYF week 1</h1>
      <HobbyList />
      {gurantee.map((comp)=>(<Guarantee key={comp.id} component={comp}/>))}  
      <Counter/>
    </div>
  );
}

export default App;
