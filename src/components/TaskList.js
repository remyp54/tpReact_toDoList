import React, { useState } from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleTask, onEditTask, onToggleEdit }) => { // Définit le composant fonctionnel 'TaskList' en utilisant une syntaxe de fonction fléchée
  const [editedText, setEditedText] = useState(''); // Utilise le hook d'état pour gérer la valeur du texte édité et la fonction pour la mettre à jour

  const handleEditChange = (event, index) => { // Fonction appelée lorsqu'il y a un changement dans le champ d'édition du texte
    const newText = event.target.value; // Récupère le nouveau texte de la tâche depuis l'événement de changement
    setEditedText(newText); // Met à jour l'état du texte édité avec le nouveau texte
    onEditTask(index, newText); // Appelle la fonction 'onEditTask' (passée en tant que prop) avec l'index de la tâche et le nouveau texte
  };

  return (
    <div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
            {task.isEditing ? (
              <input
                type="text"
                className="form-control"
                value={editedText}
                onChange={(e) => handleEditChange(e, index)}
                onBlur={() => onToggleEdit(index)}
              />
            ) : (
              <span className={`text-lg ${task.completed ? 'text-muted' : ''}`} onClick={() => onToggleEdit(index)}>
                {task.text}
              </span>
            )}
            <div className="btn-group" role="group" aria-label="Actions">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDeleteTask(index)}
                disabled={task.completed || task.isEditing}
              >
                Supprimer
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onToggleTask(index)}
              >
                {task.completed ? 'Annuler' : 'Terminer'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
