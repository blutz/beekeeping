const bees = document.getElementsByClassName('bee')
for (let bee of bees) {
  bee.onclick = () => window.alert('this is a bee')
}

const cursorBee = document.getElementById('cursor-bee')
window.onmousemove = (e) => {
  cursorBee.setAttribute(
    'style',
    'left: '+e.pageX+'px; top: '+e.pageY+'px;')
}

const title = document.getElementById('title')
let curHue = 0
window.setInterval(() => {
  curHue = curHue+10
  if(curHue >= 360) {
    curHue = curHue - 360
  }
  title.setAttribute(
    'style',
    'color: hsl('+curHue+',84%,60%);'
  )
}, 250)

