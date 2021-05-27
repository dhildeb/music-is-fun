import { ProxyState } from "../AppState.js";
import { songsService } from "../Services/SongsService.js"

function _drawSongs() {
  let template = ''

  ProxyState.songs.forEach(s => template += s.songsTemplate)

  document.getElementById('songs').innerHTML = template
}

function _drawActiveSongs() {
  document.getElementById('active-song').innerHTML = ProxyState.activeSong[0].activeTemplate

}
export class SongsController {

  constructor() {
    ProxyState.on('songs', _drawSongs)
    ProxyState.on('activeSong', _drawActiveSongs)
    // ProxyState.on('myPlaylist', _drawMyPlaylist)
  }

  search(event) {
    event.preventDefault()
    let query = event.target.query.value

    songsService.getMusicByQuery(query)
    console.log(ProxyState.songs)
  }

  selectSong(id) {
    songsService.selectSong(id)
  }
}