
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import New from './components/New';
import SimpleInterest from './components/SimpleInterest';
import File from './components/File';


function App() {
  return (
    <>
   <div className="container" style={{color:'grey',width:'auto'}}>
   <Navbar title="TextUtils" aboutText="About textutils"/>
   
   <div className="container" style={{backgroundColor:"grey"}}>
   <TextForm heading="Enter the text:--"/>
   </div>
  
  <div className='container'>
   <About/>
   </div>
   <div className='container'>
   <New/>
   </div>
   <div className='container'>
   <SimpleInterest/>
   </div>
   <div className='container'>
   <File/>
   </div>
   
   </div>
   </>
  )
}

export default App;
