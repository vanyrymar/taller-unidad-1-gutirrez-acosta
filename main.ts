for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # . #
        . # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(200)
    basic.showString("HIPATIA")
}
basic.forever(function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
