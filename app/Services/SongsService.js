import { ProxyState } from "../AppState.js";
import { Song } from "../Models/Song.js";
import { sandboxService } from "./SandboxService.js";

class SongsService {
  /**
   * Takes in a search query and retrieves the results that will be put in the playList
   * @param {string} query
   */
  getMusicByQuery(query) {
    //NOTE You will not need to change this method
    let url = "https://itunes.apple.com/search?callback=?&term=" + query;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        ProxyState.songs = res.results.map(rawData => new Song(rawData));
        console.log(res)
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  /**
   * Retrieves the saved list of songs from the sandbox
   */


  /**
   * Takes in a song id and sends it from the search results to the sandbox to be saved.
   * Afterwords it will update the store to reflect saved info
   * @param {string} id
   */

  /**
   * Sends a delete request to the sandbox to remove a song from the playlist
   * Afterwords it will update the store to reflect saved info
   * @param {string} id
   */
  removeSong(id) {
    //TODO Send the id to be deleted from the server then update the store
  }

  selectSong(id) {
    ProxyState.activeSong = ProxyState.songs.filter(s => s.preview == id)
    console.log(ProxyState.activeSong)
  }
}

export const songsService = new SongsService()