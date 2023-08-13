import React, { useEffect, useState } from 'react';

import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    if(tasks.length ===0) return;
    
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);
  
  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks)
    setTasks(tasks);
  },[]);


  function addTask(name){
    console.log(tasks);
    setTasks(prev=>{
      return [...prev,{name:name,done:false}];
    });

  }

  function removeTask(indexToRemove){
    setTasks(prev=>{
      return prev.filter((taskObject,index)=> index!== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex,newDone){
    setTasks(prev=>{
      const newTasks =[...prev];
      newTasks[taskIndex].done=newDone;
      return newTasks;
    });
  }

  function renameTask(index,newName){
    setTasks(prev=>{
      const newTasks = [...prev];
      newTasks[index].name=newName;
      return newTasks;
    })
  }

  const numberComplete = tasks.filter(t=>t.done).length;
  const numberTotal = tasks.length;

  function getMessage(){
    const percentage = numberComplete/numberTotal*100;
    if(percentage===0){
      return "Try to do at least one!";
    }
    if(percentage===100){
      return "Nice job for today"
    }
    return "Keep it going"
  }

  
  return (
    <div className="app">
      <div className='container'>
        <div className='todo-list'>
          <h1 className='todo-title'>{numberComplete}/{numberTotal} complete</h1>
          <h2>{getMessage()}</h2>
          <TaskForm onAdd={addTask}/>
          {tasks.map((task,index)=>{
            return(<Task {...task} 
                          onRename={newName=> renameTask(index,newName)}
                          onToggle={done=>updateTaskDone(index,done)}
                          onTrash={()=>removeTask(index)}
                    />)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
