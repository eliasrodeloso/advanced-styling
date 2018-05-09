'use strict'

// Variables
var x1 = 30
var y1 = 30
var x2 = 30
var y2 = 80
var x3 = 30
var y3 = 130
var dx1 = 3
var dy1 = 5
var dx2 = 4
var dy2 = 1
var dx3 = 2
var dy3 = 6
var radius = 20
var startAngle = 0
var endAngle = Math.PI * 2
var ctx = document.getElementById('canvas').getContext('2d')
var animationId
var canvas = {
  x: 750,
  y: 500,
  edgeX: 730,
  edgeY: 480
}
var sw = 0

function drawCircle1() {
  // Circle outer
  ctx.beginPath()
  ctx.fillStyle = '#F1C672'
  ctx.strokeStyle = '#CC901A'
  ctx.arc(x1, y1, radius, startAngle, endAngle, false)
  ctx.stroke()
  ctx.closePath()
  ctx.fill()

  // Circle inner
  ctx.beginPath()
  ctx.fillStyle = '#E9A41E'
  ctx.arc(x1, y1, radius / 2, startAngle, endAngle, false)
  ctx.fill()
  ctx.closePath()
  if (x1 < radius || x1 > canvas.edgeX) {
    dx1 = -dx1
  }

  if (y1 < radius || y1 > canvas.edgeY) {
    dy1 = -dy1
  }
  x1 += dx1
  y1 += dy1
}

function drawCircle2() {
  // Circle outer
  ctx.beginPath()
  ctx.fillStyle = '#E49460'
  ctx.strokeStyle = '#D35400'
  ctx.arc(x2, y2, radius, startAngle, endAngle, false)
  ctx.stroke()
  ctx.closePath()
  ctx.fill()

  // Circle inner
  ctx.beginPath()
  ctx.fillStyle = '#D35400'
  ctx.arc(x2, y2, radius / 2, startAngle, endAngle, false)
  ctx.fill()
  ctx.closePath()

  if (x2 < radius || x2 > canvas.edgeX) {
    dx2 = -dx2
  }

  if (y2 < radius || y2 > canvas.edgeY) {
    dy2 = -dy2
  }
  x2 += dx2
  y2 += dy2
}

function drawCircle3() {
  // Circle outer
  ctx.beginPath()
  ctx.fillStyle = '#689D92'
  ctx.strokeStyle = '#0E6251'
  ctx.arc(x3, y3, radius, startAngle, endAngle, false)
  ctx.stroke()
  ctx.closePath()
  ctx.fill()

  // Circle inner
  ctx.beginPath()
  ctx.fillStyle = '#0E6251'
  ctx.arc(x3, y3, radius / 2, startAngle, endAngle, false)
  ctx.fill()
  ctx.closePath()

  if (x3 < radius || x3 > canvas.edgeX) {
    dx3 = -dx3
  }

  if (y3 < radius || y3 > canvas.edgeY) {
    dy3 = -dy3
  }
  x3 += dx3
  y3 += dy3
}

function animate() {
  ctx.clearRect(0, 0, canvas.x, canvas.y)
  drawCircle1()
  drawCircle2()
  drawCircle3()
  animationId = requestAnimationFrame(animate)
}

document
  .getElementById('animateButton')
  .addEventListener('click', function(ev) {
    if (sw === 0) {
      sw = 1
      animationId = requestAnimationFrame(animate)
      this.value = 'Stop'
    } else {
      sw = 0
      this.value = 'Animate'
      window.cancelAnimationFrame(animationId)
    }
  })
