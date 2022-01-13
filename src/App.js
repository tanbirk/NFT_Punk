import Header from './components/Header'
import './App.css';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
   <div className='app'>
     <Header />
     <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image='https://lh3.googleusercontent.com/Q1Y5C8jdc828wkjPuNf_DAz3cm90bh9CK6LZQLZzB3thOdegbRt3600vz5PhMnVggKddQD3rCH6JEGOd3VxidQ5H54SmBMg64eMpzw=w600'/>
   </div>
    
  );
}

export default App;
