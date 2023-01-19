input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(450)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(350)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
