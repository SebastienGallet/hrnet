import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';


// Définition du composant PikadayPicker
const PikadayPicker = ({ value, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Création d'une instance de Pikaday avec les options spécifiées
    const picker = new Pikaday({
      field: ref.current, // Utilisation de la référence pour cibler l'élément input
      onSelect: onChange, // Appel de la fonction onChange lorsqu'une date est sélectionnée
    });

    // Destruction de l'instance de Pikaday lors du démontage du composant
    return () => picker.destroy();
  }, [onChange]);

  // Rendu du composant avec un champ de texte en lecture seule
  return <input type="text" ref={ref} value={value} readOnly />;
};
export default PikadayPicker;
