// new Viewer 可以直接使用
const viewer = new Viewer(document.getElementById('images'), {
  // inline: true,
  toolbar: {
    zoomIn: 4,
    zoomOut: 4,
    oneToOne: 4,
    reset: 4,
    prev: 4,
    play: {
      show: 4,
      size: 'large',
    },
    next: 4,
    rotateLeft: 4,
    rotateRight: 4,
    flipHorizontal: 4,
    flipVertical: 4,
  },
  // fullscreen: false,
  // keyboard: false,
  // backdrop: false,
})

/**
 * 参考
 * https://github.com/fengyuanchen/viewerjs
 */
