const editly = require('editly');



const editSpec = {
    outPath: './subtitle.mp4',
    defaults: {
      layerType: { 'fill-color': { color: '#00aa00' } }
    },
    clips: [
      { duration: 10, layers: [
        { type: 'rainbow-colors' },
        { type: 'subtitle', text: 'Aaaaiiiii que bolinho gostoso...' },
        { type: 'title', position: 'top', text: 'Subtitles', },
      ] },
      { duration: 20, layers: [
        { type: 'fill-color' },
        { type: 'title', position: { x: 0, y: 1, originY: 'bottom' }, text: 'Custom position', zoomDirection: null },
      ] },
    ],
  }
async function main() {
    await editly(editSpec)
  .catch(console.error);
}
main()