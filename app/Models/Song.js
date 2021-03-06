
export class Song {
  constructor(data) {
    this.artist = data.artistName
    this.album = data.collectionName
    this.title = data.trackName
    this.preview = data.previewUrl
    this.price = data.trackPrice
    this.albumArt = data.artworkUrl100
    this.user = data.user || "daniel"
  }

  get songsTemplate() {
    return `
    <tr class="row justify-content-between" onclick="app.songsController.selectSong('${this.preview}')">
    <th class="col-4">
        <img src="${this.albumArt}" >
    </th>
    <th class="col-8">
        <p class="d-flex flex-column">
            <span>${this.title} - ${this.album}</span>
        </p>
    </th>
</tr>
    `
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
}
