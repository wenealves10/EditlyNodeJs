const editly = require('editly');

const editSpec = {
  outPath: './musica2.mp4',
  allowRemoteRequests: true,
  keepSourceAudio: true,
  defaults: {
    layerType: {
      'fill-color': {
        color: '#00aa00'
      }
    }
  },
  clips: [{
    duration: 30,
    layers: [{
        type: 'image',
        path: 'https://i.ytimg.com/vi/LQ9XbPAowCQ/maxresdefault.jpg',
        resizeMode: 'contain-blur'
      },
      {
        type: 'title',
        position: 'top',
        text: 'MORENA',
      },
    ]
  }],
  audio: [{
    path: './music.mp3',
    mixVolume: 1,
    cutFrom: 0,
    cutTo: 30,
    start: 0,
  }, ],
}
async function main() {
  await editly(editSpec)
    .catch(console.error);
}
main()