
export class MySong {
  constructor(data) {
    this.id = data.id
    this.artist = data.artist
    this.album = data.album
    this.title = data.title
    this.preview = data.preview
    this.price = data.price
    this.albumArt = data.albumArt
    this.user = data.user || "daniel"
  }

  get activeTemplate() {
    return `
    <div class="sticky-top d-flex flex-column">
      <div class="text-start m-1">
        <span>now playing</span>
      </div>
      <img class="m-auto" src="${this.albumArt}" alt="no album art" style="height:auto; width:180px;">
      <h2 class="m-3">${this.artist} - ${this.title}</h2>
      <span class="mb-2">album: ${this.album} | Price: $${this.price}</span>
      <div class="d-flex">
        <audio class="m-auto" src="${this.preview}" type="audio" controls></audio>
        <button class="btn btn-success mr-5" onclick="app.songsController.addSong()">add song</button>
      </div>
    </div>
`
  }
  get playlistTemplate() {
    return `
    <tr class="row justify-content-between" onclick="app.songsController.selectSong('${this.preview}')">
    <th class="d-flex">
        <b class="d-flex flex-column">
            <span>${this.title} - ${this.album}</span>
        </b>
        <i class="text-danger" onclick="app.songsController.deleteSong('${this.id}')">X</i>
        </th>
</tr>
    `
  }
}
