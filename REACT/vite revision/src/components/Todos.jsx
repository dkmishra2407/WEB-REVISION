import React from 'react'
import Todo from './Todo'

const Todos = (props) => {

  console.log(props.Ondelete)

  return (
    <>
      {/* <Todo name="deva" rollno="1234"/> */}

      <div className='Container'>
        <h1 className='HeaderBolteSabkoKolte'> Devansh Bhai ka header</h1>

        {
          props.list.map((todo)=>{
            return <Todo key={todo.id} todo={todo} Ondelete={props.Ondelete}/>
          })
        }
      </div>
    </>
  )
}

export default Todos