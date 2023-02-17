import React,{useEffect} from "react";
import  {v4 as uuidv4} from "uuid";

const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) =>{
    const updateTodo = (title,id,completed)=>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title,id,completed} : todo
        
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    },[setInput,editTodo]);
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(!editTodo){
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
        setInput("");
        }else{
            updateTodo(input,editTodo,editTodo.completed)
        }
    }
    return(
       <Form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a Todo..." className="task-input" value={input} required onChange={onInputChange}/>
        <button  type="submit">
            {editTodo ? "OK" :"Add"}
        </button>
       </Form>
    )
}

export default Form