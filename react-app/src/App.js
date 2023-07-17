import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Card_Container from './Card_Container';
function App() {

  const players=[
    {
      photo:'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg',
      name:'Mbappé',
      age:22,
      country:'france'
    },


    {
      photo:'https://th.bing.com/th/id/R.d0efc59d532428b969ac3a611db9eb6a?rik=wXb%2bdVkYexy1HQ&pid=ImgRaw&r=0',
      name:'Ronaldo',
      age:38,
      country:'Portugal'
    },

    
    {
      photo:'https://th.bing.com/th/id/R.46b7194d80262b0ef56ef12dd1f45465?rik=Fs8i57RGLell2g&pid=ImgRaw&r=0',
      name:'Benzima',
      age:36,
      country:'france'
    }
  ]
  return (
    <div className="App">
      <Card_Container players={players} />
    </div>
  );
}

export default App;