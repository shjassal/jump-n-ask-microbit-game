let degrees = 0
let random = 0
let direction = 0
let num = 0
let state = ""
input.onGesture(Gesture.Shake, () => {
    if (state == "is_north") {
        instruct_random_drtn()
    } else if (state == "qn_asked") {
        qn_answered()
    }
})
function face_North()  {
    state = "face_north"
    num = 0
    while (state != "is_north") {
        degrees = input.compassHeading()
        basic.showString("Face North")
        if (degrees > 315 || degrees <= 45) {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
            basic.showIcon(IconNames.Yes)
            state = "is_north"
        } else {
            basic.showIcon(IconNames.No)
        }
    }
}
function instruct_random_drtn()  {
    basic.clearScreen()
    direction = Math.random(3)
    if (random == 0) {
        basic.showString("Face East")
        if (degrees < 135) {
            basic.showIcon(IconNames.Happy)
            basic.showString("?")
        } else {
            face_North()
        }
    } else if (random == 1) {
        basic.showString("Face South")
        if (degrees < 225) {
            basic.showIcon(IconNames.Happy)
            basic.showString("?")
        } else {
            face_North()
        }
    } else {
        basic.showString("Face West")
        if (degrees < 315) {
            basic.showIcon(IconNames.Happy)
            basic.showString("?")
        } else {
            face_North()
        }
    }
    state = "qn_asked"
}
function qn_answered()  {
    basic.clearScreen()
    random = Math.random(3)
    if (random == 2) {
        basic.showString("YES")
    } else if (random == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
}
face_North()
