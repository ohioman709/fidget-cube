input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("C C - - - - - - ", 500)
    basic.showIcon(IconNames.Square)
    music.playMelody("F F - - - - - - ", 500)
    basic.showIcon(IconNames.SmallSquare)
    music.playMelody("A A - - - - - - ", 500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C5 C5 - - - - - - ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("C C - - - - - - ", 500)
    basic.showIcon(IconNames.Square)
    music.playMelody("F F - - - - - - ", 500)
    basic.showIcon(IconNames.SmallSquare)
    music.playMelody("A A - - - - - - ", 500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C5 C5 - - - - - - ", 500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C5 C5 - - - - - - ", 500)
    basic.showIcon(IconNames.SmallSquare)
    music.playMelody("A A - - - - - - ", 500)
    basic.showIcon(IconNames.Square)
    music.playMelody("F F - - - - - - ", 500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("C C - - - - - - ", 118)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C5 C5 - - - - - - ", 500)
    basic.showIcon(IconNames.SmallSquare)
    music.playMelody("A A - - - - - - ", 500)
    basic.showIcon(IconNames.Square)
    music.playMelody("F F - - - - - - ", 500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("C C - - - - - - ", 118)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 F C5 F C5 F C5 F ", 378)
    music.playMelody("C5 F C5 F C5 F C5 F ", 378)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("Hello!")
})
music.playMelody("A C5 E G A B G D ", 400)
music.playMelody("E G D B F A E C5 ", 400)
music.playMelody("A C5 E G A B G D ", 400)
music.playMelody("E G D B F A E C5 ", 400)
music.playMelody("A C5 E G A B G D ", 400)
music.playMelody("E G D B F A E C5 ", 400)
music.playMelody("A C5 E G A B G D ", 400)
music.playMelody("E G D B F A E C5 ", 400)
