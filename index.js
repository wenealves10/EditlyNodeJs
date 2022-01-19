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
        type: 'audio',
        path: 'https://s3.eu-central-1.wasabisys.com/storage-lindasmensagens/audio/video.mp3',
        cutFrom: 27
      },
      {
        type: 'title',
        position: 'top',
        text: 'MORENA',
      },
    ]
  }],
}
async function main() {
  await editly(editSpec)
    .catch(console.error);
}
main()