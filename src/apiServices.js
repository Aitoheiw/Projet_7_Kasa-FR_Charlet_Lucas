/**
 * Renvoie la liste de tous les logements.
 *
 * @throws {Error} Si une erreur survient lors du chargement des données.
 * @returns {Promise<Object[]>} La liste de tous les logements.
 */
export async function getAllLogements() {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des données");
  }
  return await response.json();
}

/**
 * Renvoie le logement correspondant à l'identifiant donné.
 *
 * @throws {Error} Si le logement n'est pas trouvé.
 * @param {string} id L'identifiant du logement.
 * @returns {Promise<Object>} Le logement correspondant.
 */
export async function getLogementById(id) {
  const logements = await getAllLogements();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    throw new Error("Logement non trouvé");
  }
  return logement;
}
