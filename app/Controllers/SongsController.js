import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";
import { songsService } from "../Services/SongsService.js"

function _drawSongs() {
  let template = ''
  ProxyState.songs.forEach(s => template += s.songsTemplate)
  document.getElementById('songs').innerHTML = template
}

function _drawActiveSongs() {
  document.getElementById('active-song').innerHTML = ProxyState.activeSong[0].activeTemplate
}

function _drawMyPlaylist() {
  let template = ''
  ProxyState.myPlaylist.forEach(s => template += s.playlistTemplate)
  document.getElementById('my-songs').innerHTML = template
}
export class SongsController {

  constructor() {
    ProxyState.on('songs', _drawSongs)
    ProxyState.on('activeSong', _drawActiveSongs)
    ProxyState.on('myPlaylist', _drawMyPlaylist)
    sandboxService.getMyPlaylist()
  }

  search(event) {
    event.preventDefault()
    let query = event.target.query.value

    songsService.getMusicByQuery(query)
  }

  selectSong(id) {
    songsService.selectSong(id)
  }

  addSong() {
    sandboxService.addSong()
  }

  deleteSong(id) {
    sandboxService.deleteSong(id)
  }
}