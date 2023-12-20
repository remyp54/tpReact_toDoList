import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => { // Définit le composant fonctionnel 'AddTask' en utilisant une syntaxe de fonction fléchée
  const [newTask, setNewTask] = useState(''); // Utilise le hook d'état pour gérer la valeur de la nouvelle tâche et la fonction pour la mettre à jour

  const handleAddTask = () => { // Fonction appelée lorsqu'on clique sur le bouton "Ajouter"
    if (newTask.trim() !== '') { // Vérifie que la valeur de la nouvelle tâche n'est pas une chaîne vide ou ne contient que des espaces
      onAddTask(newTask); // Appelle la fonction 'onAddTask' (passée en tant que prop) avec la nouvelle tâche comme argument
      setNewTask(''); // Réinitialise la valeur de la nouvelle tâche à une chaîne vide après l'ajout
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Ajouter une nouvelle tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-success mt-2" onClick={handleAddTask}>
        Ajouter
      </button>
    </div>
  );
};

export default AddTask;
