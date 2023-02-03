input.onPinPressed(TouchPin.P0, function () {
    Score += 1
})
let Score_image = [
images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `),
images.createImage(`
    . # # . .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `),
images.createImage(`
    . . # # .
    . # . . #
    . . . # .
    . . # . .
    . # # # #
    `),
images.createImage(`
    . # # # .
    . . . # .
    . # # . .
    . . . # .
    . # # # .
    `),
images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `),
images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
]
let Score = 0
basic.forever(function () {
    Score_image[Score].showImage(0)
})
