/**
 * Type Imports
 *
 * @typedef {import('contentful').Asset} Asset
 * @typedef {import('contentful').EntitySys} EntitySys
 * @typedef {import('contentful').EntryFields.RichText} RichTextField
 * @typedef {import('contentful').EntryFields.Text} TextField
 */

/**
 * @typedef {object} ContentfulGame
 * @property {'game'} contentTypeId User-defined properties.
 * @property {object} fields User-defined properties.
 * @property {TextField} [fields.backgroundColor] The color to be used for the background of formatted blocks.
 * @property {RichTextField} fields.description A description of the game.
 * @property {TextField} fields.name The name of the game.
 * @property {TextField} [fields.epicGamesURL] The URL of the game on the Epic Games store.
 * @property {TextField} [fields.gogURL] The URL of the game on gog.com.
 * @property {Asset} [fields.heroImage] Properties of the hero image.
 * @property {Asset} [fields.logo] Properties of the logo.
 * @property {TextField} [fields.humbleBundleURL] The URL of the game on the Humble store.
 * @property {TextField} [fields.itchURL] The URL of the game on Itch.io.
 * @property {TextField} [fields.steamURL] The URL of the game on Steam.
 * @property {TextField} [fields.textColor] The color to be used for text in formatted blocks.
 * @property {TextField} [fields.websiteURL] The URL of the game's website.
 * @property {EntitySys} sys System managed metadata.
 */
export const ContentfulGame = {}
