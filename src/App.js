import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[data, getdata] = useState([])
  

  const req = function(){
    
    
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      
      getdata(json)
    })
    
  }
 
  console.log(data)
  return (
    <div className="App">
    <div>
      
        {data.map(function(item){
    
          return(
            <div className='main' key={Math.random()}>
              <img src={item.image} className="nkar"></img>
            <div className='title'>{item.title}</div>
            <div className='midle'>Director: {item.director}</div>
            <div className='midle'>Producer: {item.producer}</div>
            <div className='midle'>Release Date: {item.release_date}</div>
            <div className='desc'>{item.description}</div>
            </div>
          )
          
          
        })}
     </div>
      <button onClick={req} className="btn">Get List</button>
    </div>
    
  );
}

export default App;
