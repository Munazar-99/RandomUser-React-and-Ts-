import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Model } from './model'

function App() {
  const [user, setUser] = useState<Model>();

  const [enableEdit, setEnableEdit] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const editHandler = () => {
    setEnableEdit(prev => !prev);
  }
  const saveHandler = () => {
    console.log(inputRef.current?.value)
    if(user) {
      user.results[0].name.first = inputRef.current!?.value
    }
    setEnableEdit(prev => !prev);

  }
  const userGenerator = () => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((result) =>
      setUser(result))
  }
  useEffect(() => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((result) =>
      setUser(result))
  }, [])
  return (
    <>
      <div onDoubleClick={editHandler} className='container'>
        <div className="picture"><img className='user-image' src={user?.results[0].picture.large} alt='here'></img></div>
        {enableEdit ? <input type='text' ref={inputRef} className='name__input' defaultValue={user?.results[0].name.first} /> : <h3 className='description'>{user?.results[0].name.first}</h3>}
        <h3>${user?.results[0].email}: </h3>
        {enableEdit ? <button className='button' onClick={saveHandler}>Save</button> : <button className='button' onClick={userGenerator}>Get Random User</button>}
      </div>
    </>
  );
}

export default App;
