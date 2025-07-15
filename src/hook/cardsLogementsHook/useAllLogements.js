// src/hooks/useLogements.js
import { useState, useEffect } from "react";
import { getAllLogements } from "../../apiServices";

/**
 * Ce hook gère tout : état, loading, erreurs
 * Le composant n'a rien d'autre à faire que l'utiliser
 */
export function useAllLogements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllLogements()
      .then((result) => {
        if (isMounted) {
          setData(result);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { data };
}
