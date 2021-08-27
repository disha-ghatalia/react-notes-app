import React  from "react";
import "./index.css";

const NotesApp = ({notes, onEditField }) => {

const [note, setNote] = React.useState({
    heading:'',
    status:'',
})



const [filterData, setFilterData] = React.useState('All');


   const handleSubmit =() =>{
       onEditField( note.heading, note.status, )
   } 

  
  

   const handleFilter = (e) => {
    const  value  = e.currentTarget.textContent.toLowerCase(); //assigns the target value      
    setFilterData(value)
     
  };

//console.log(filterData)

const filterdNotes = notes.filter((note) =>{
    if (filterData === 'active' || filterData === 'completed'){
        const newStatus = note.status.toLowerCase()
      return newStatus === filterData
    } else {
        return note
    }
  })

 

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
    
        <input data-testid="input-note-name" type="text" className="large mx-8"
              placeholder="Note Title"  onChange={(e)=>setNote({...note, heading: e.target.value})}   />

   
              
        <input data-testid="input-note-status" type="text" className="large mx-8"
              placeholder="Note Status"    onChange={(e)=>setNote({...note, status: e.target.value})}/>


        <button className="" data-testid="submit-button" onClick={handleSubmit}>Add Note</button>


      </section>


      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton" onClick={handleFilter}>All</li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={handleFilter}>Active</li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={handleFilter}>Completed</li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody data-testid="noteList">

          {filterdNotes.map((note)=> (
              
               <tr key={note.id}>
              <td>{note.heading}</td>
              <td>{note.status}</td>
            </tr>
          ))}

          </tbody>
        </table>
     
     
     </div>
    </div>
  );
}

export default NotesApp