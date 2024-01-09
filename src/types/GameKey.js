/**
 * @typedef {object} GameKey
 * @property {string} id The unique identifier of the game key.
 * @property {string} createdAt The timestamp when the game key was added to the database.
 * @property {string} appID The unique identifier of the application the game key will grant.
 * @property {string | null} ownerID The unique identifier of the owner of the game key.
 * @property {string | null} claimID The unique identifier of the claim that was used to issue this game key.
 * @property {string} key The game key.
 */
export const GameKey = {}
