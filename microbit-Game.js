let degrees = 0
let random = 0
let direction = 0
let num = 0
function face_North() {
    num = 0
    while (num == 0) {
        degrees = input.compassHeading()
        if (degrees > 315 || degrees <= 45) {
            basic.showIcon(IconNames.Yes)
            num = 1
        } else {
            basic.showIcon(IconNames.No)
        }
    }
}
input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    direction = Math.random(3)
    if (random == 0) {
        basic.showString("Face East")
        if (degrees < 135) {
            basic.showIcon(IconNames.Happy)
        } else {
            face_North()
        }
    } else if (random == 1) {
        basic.showString("Face South")
        if (degrees < 225) {
            basic.showIcon(IconNames.Happy)
        } else {
            face_North()
        }
    } else {
        basic.showString("Face West")
        if (degrees < 315) {
            basic.showIcon(IconNames.Happy)
        } else {
            face_North()
        }
    }
})
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    random = Math.random(3)
    if (random == 2) {
        basic.showString("YES")
    } else if (random == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
    face_North()
})
face_North()
