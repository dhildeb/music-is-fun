export class Song {
  constructor(data) {
    this.artist = data.artistName
    this.album = data.collectionName
    this.title = data.trackName
    this.preview = data.previewUrl
    this.price = data.trackPrice
    this.albumArt = data.artworkUrl30
    this.songId = data.trackId
    this.user = data.user || "daniel"
  }

  get songsTemplate() {
    return `
    <div class="row justify-content-between" onclick="app.songsController.selectSong('${this.songId}')">
    <div class="col-3">
        <img src="${this.albumArt}" >
    </div>
    <div class="col-6">
        <b class="d-flex flex-column">
            <span>${this.album}</span>
            <span>${this.title}</span>
        </b>
    </div>
</div>
    `
  }

  get activeTemplate() {
    return `
    <span>now playing</span>
    <img src="${this.albumArt}" alt="" style>
    <h2>${this.artist} - ${this.title}</h2>
    <span>album: ${this.album} | Price: $${this.price.toFixed(2)}</span>
    <audio src="${this.preview}" type="audio" controls></audio>
`
  }
  get playlistTemplate() {
    return `
    
    `
  }
}
