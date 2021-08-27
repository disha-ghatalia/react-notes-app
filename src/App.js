import React, { useState }  from 'react';
import './App.css';
import 'h8k-components';
import NotesApp from './components/index.js';


function App() {
  const [notes, setNotes] = useState ([]);
  
  //const [newNotes, setNewNotes] = useState([]);
 



const handleAddNote = ( heading, status) =>{
  //console.log(heading)
  const newNote = {
    id: Math.random(),
    heading: heading,
    status: status,
  }
  setNotes([newNote, ...notes]);
  
}




  return (
    <div>
      <NotesApp notes={notes} onEditField={handleAddNote} />
    </div>
  );
}

export default App;
