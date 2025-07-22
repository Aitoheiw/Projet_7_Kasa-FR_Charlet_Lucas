// src/hooks/useLogements.js
import { useState, useEffect } from "react";
import { getAllLogements } from "../../apiServices";

/**
 * Ce hook gère tout : état, loading, erreurs
 * Le composant n'a rien d'autre à faire que l'utiliser
 */
export function useAllLogements() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout de l’état loading
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true); // On démarre le chargement
    setError(null); // On réinitialise l'erreur
    getAllLogements()
      .then((result) => {
        if (isMounted) {
          setData(result);
          setLoading(false); // On arrête le chargement
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Erreur inconnue");
          setLoading(false);
        }
        console.error(err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
