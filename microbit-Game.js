let degrees = 0
let random = 0
let direction = 0
let num = 0
let state = ""
function face_North()  {
    state = "face_north"
    num = 0
    while (state != "is_north") {
        degrees = input.compassHeading()
        if (degrees < 45) {
            basic.showString("N")
            basic.pause(200)
            basic.showString("")
            basic.showString("N")
            basic.pause(200)
            basic.showString("")
            basic.showString("N")
            basic.pause(200)
            basic.showString("")
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
    if (direction == 0) {
        basic.showString("East")
        if (degrees < 135) {
            basic.showIcon(IconNames.Happy)
            basic.showString("?")
        } else {
            face_North()
        }
    } else if (random == 1) {
        basic.showString("South")
        if (degrees < 225) {
            basic.showIcon(IconNames.Happy)
            basic.showString("?")
        } else {
            face_North()
        }
    } else {
        basic.showString("West")
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
    if (random == 0) {
        basic.showString("YES")
    } else if (random == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
}
input.onGesture(Gesture.Shake, () => {
    if (state == "is_north") {
        instruct_random_drtn()
    } else if (state == "qn_asked") {
        qn_answered()
    }
})
face_North()
