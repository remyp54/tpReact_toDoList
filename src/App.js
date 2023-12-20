import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { // Définit le composant principal de l'application
  const [tasks, setTasks] = useState(() => { // Utilise le hook d'état pour gérer la liste des tâches
    const storedTasks = localStorage.getItem('tasks'); // Initialise la liste des tâches à partir du stockage local ou un tableau vide si aucune donnée n'est présente
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleAddTask = (newTask) => { // Fonction pour ajouter une nouvelle tâche à la liste
    const updatedTasks = [...tasks, { text: newTask, completed: false, isEditing: false }]; // Crée une nouvelle tâche avec le texte fourni, non complétée par défaut et non en cours d'édition
    setTasks(updatedTasks); // Met à jour l'état des tâches avec la nouvelle liste
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Stocke la liste mise à jour dans le stockage local
  };

  const handleDeleteTask = (index) => { // Fonction pour supprimer une tâche de la liste
    const updatedTasks = [...tasks]; // Crée une copie de la liste des tâches
    updatedTasks.splice(index, 1); // Supprime la tâche à l'index spécifié
    setTasks(updatedTasks); // Met à jour l'état des tâches avec la nouvelle liste
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Stocke la liste mise à jour dans le stockage local
  };

  const handleToggleTask = (index) => { // Fonction pour basculer l'état de complétion d'une tâche
    const updatedTasks = [...tasks]; // Crée une copie de la liste des tâches
    updatedTasks[index].completed = !updatedTasks[index].completed; // Inverse l'état de complétion de la tâche à l'index spécifié
    setTasks(updatedTasks); // Met à jour l'état des tâches avec la nouvelle liste
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Stocke la liste mise à jour dans le stockage local
  };

  const handleToggleEdit = (index) => { // Fonction pour basculer l'état d'édition d'une tâche
    const updatedTasks = [...tasks]; // Crée une copie de la liste des tâches
    updatedTasks[index].isEditing = !updatedTasks[index].isEditing; // Inverse l'état d'édition de la tâche à l'index spécifié
    setTasks(updatedTasks); // Met à jour l'état des tâches avec la nouvelle liste
  };

  const handleEditTask = (index, newText) => { // Fonction pour éditer le texte d'une tâche
    const updatedTasks = [...tasks]; // Crée une copie de la liste des tâches
    updatedTasks[index].text = newText; // Met à jour le texte de la tâche à l'index spécifié avec le nouveau texte
    setTasks(updatedTasks); // Met à jour l'état des tâches avec la nouvelle liste
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Stocke la liste mise à jour dans le stockage local
  };

  useEffect(() => { // Utilise le hook useEffect pour mettre à jour le stockage local à chaque modification des tâches
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Ma Todo List</h1>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
            onToggleEdit={handleToggleEdit}
            onEditTask={handleEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
