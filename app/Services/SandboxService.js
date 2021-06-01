import { ProxyState } from "../AppState.js"
import { MySong } from "../Models/MySong.js"
import { Song } from "../Models/Song.js"

const sandBoxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/daniel"
})
class SandboxService {

  async getMyPlaylist() {
    let res = await sandBoxApi.get('songs')
    ProxyState.myPlaylist = res.data.map(s => new MySong(s))
  }

  async addSong() {
    let newSong = ProxyState.activeSong
    let duplicate = ProxyState.myPlaylist.find(s => s.preview == newSong[0].preview)
    if (duplicate) {
      window.alert("already got song brah")
    } else {
      let res = await sandBoxApi.post('songs', newSong)
      ProxyState.myPlaylist = [...ProxyState.myPlaylist, new MySong(res.data[0])]
    }
  }
  async deleteSong(id) {
    console.log(id)
    await sandBoxApi.delete('songs/' + id)
    ProxyState.myPlaylist = ProxyState.myPlaylist.filter(s => s.id != id)
  }
}

export const sandboxService = new SandboxService()