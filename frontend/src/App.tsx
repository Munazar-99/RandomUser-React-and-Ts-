import React, {useState, useEffect} from 'react';
import './App.css';
import model from './model'

function App() {
  const [user, setUser] = useState<model>();
  useEffect(() => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((result)=>
     setUser(result))
  }, [])
  console.log(user);
  return (
    <>
    <div className='container'>
      <div className="picture"><img className='user-image' src={user?.results[0].picture.large} alt='here'></img></div>
      <h6 className='description'>{`${user?.results[0].name.title}: ${user?.results[0].name.first} ${user?.results[0].name.last}`}</h6>
      <h6>Lorem ipsum dolor sit amet.</h6>
      <button>Get Random User</button>
    </div>
    </>
  );
}

export default App;
