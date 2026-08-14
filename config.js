// WILDKID VLOGS — public configuration
// 1) Create a YouTube Data API v3 key.
// 2) Put the key below.
// 3) Restrict the key to your GitHub Pages domain in Google Cloud.
// Never use an OAuth/private key here.
window.WILDKID_CONFIG = {
  youtubeApiKey: "PASTE_YOUR_YOUTUBE_DATA_API_KEY_HERE",
  youtubeHandle: "@wildkidvlogs",
  videosToShow: 12,
  refreshMinutes: 30,

  // Optional: put YouTube playlist IDs here if you want exact categories.
  // Leave blank and the site will use title/description-based classification.
  playlists: {
    vlogs: "",
    shorts: "",
    travel: "",
    moto: "",
    adventure: "",
    music: ""
  }
};
