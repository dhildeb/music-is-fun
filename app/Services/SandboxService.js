import { ProxyState } from "../AppState.js"
import { Song } from "../Models/Song.js"

const sandBoxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/daniel"
})
let url = "//bcw-sandbox.herokuapp.com/api/daniel"
class SandboxService {

  async getMyPlaylist() {
    let res = await sandBoxApi.get('songs')
    ProxyState.myPlaylist = res.data.map(s => new Song(s))
  }

  async addSong() {
    let duplicate = ProxyState.myPlaylist.find(s => s.preview == activeSong[0].preview)

    if (duplicate) {
      throw new error("already got song")
    }
    console.log(ProxyState.activeSong[0])
    let res = await sandBoxApi.post('songs', ProxyState.activeSong)
    ProxyState.myPlaylist = [...ProxyState.myPlaylist, new Song(res.data)]
  }
  async deleteSong(id) {
    await sandBoxApi.delete('songs' + id)
    ProxyState.myPlaylist = ProxyState.myPlaylist.filter(s => s.preview != id)
  }
}

export const sandboxService = new SandboxService()