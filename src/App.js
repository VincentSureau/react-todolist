import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Task from './components/task';
import TaskForm from './components/form';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  /**
   * Fonction qui récupère depuis le local storage
   */
  function retrieveTasks()
  {
    const oldTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(oldTasks);
  }

  /**
   * Enregistre les tâches dans le local storage
   * @param {array} data 
   */
  function saveTasks(data)
  {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  /**
   * Change le statut d'une tâche
   * @param {int} id 
   */
  function toggleTaskStatus(id) {
    const newTasks = [...tasks];
    // retrouver l'index de la tâche dans à modifier dans le tableau
    const index = newTasks.findIndex(task => task.id === id);
    if(index == -1) {
      return;
    }  
    // modifier la propriété done de la tâche
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    saveTasks(newTasks);
  }

  /**
   * Supprime une tâche
   * @param {int} id 
   */
  function deleteTask(id) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
    saveTasks(newTasks);
  }

  /**
   * Ajoute une tâche dans le state
   */
  function addTask() {
    const task = newTask.trim();
    if(task === '') {
      return;
    }
    const newTasks = [...tasks, {
      id: Math.floor(Math.random() * 100),
      title: task,
      done: false
    }];
    setTasks(newTasks);
    setNewTask('');
    saveTasks(newTasks);
  }

  /**
   * Lance la récupération des tâches depuis le local storage au chargement de la page
   */
  useEffect(() => {
    retrieveTasks();
  },[]);

  return (
    <div className="App">
      <TaskForm addTask={addTask} setNewTask={setNewTask} newTask={newTask} />

      <div className="app-list container p-3">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
