let flash_off = ""
let degrees = 0
let flash_on = ""
let flash_times = 0
let random = 0
let num = 0
let state = ""
function face_North()  {
    state = "face_north"
    num = 0
    while (state != "is_north") {
        degrees = input.compassHeading()
        if (degrees < 30 || degrees > 330) {
            flash_on = "N"
            flash_off = ""
            flash_times = 3
            flasher()
            basic.showIcon(IconNames.Yes)
            state = "is_north"
        } else {
            basic.showIcon(IconNames.No)
        }
    }
}
function instruct_random_drtn()  {
    basic.clearScreen()
    random = Math.random(3)
    if (random == 0) {
        basic.showString("Go East")
    } else if (random == 1) {
        basic.showString("Go South")
    } else {
        basic.showString("Go West")
    }
    num = 0
    while (num == 0) {
        degrees = input.compassHeading()
        if (random == 0) {
            if (degrees < 120 && degrees > 60) {
                basic.showIcon(IconNames.Happy)
                basic.showString("?")
                num = 1
            } else {
                basic.showIcon(IconNames.No)
            }
        } else if (random == 1) {
            if (degrees < 210 && degrees > 150) {
                basic.showIcon(IconNames.Happy)
                basic.showString("?")
                num = 1
            } else {
                basic.showIcon(IconNames.No)
            }
        } else {
            if (degrees < 300 && degrees > 240) {
                basic.showIcon(IconNames.Happy)
                basic.showString("?")
                num = 1
            } else {
                basic.showIcon(IconNames.No)
            }
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
function flasher()  {
    for (let i = 0; i < flash_times; i++) {
        basic.showString(flash_on)
        basic.pause(200)
        basic.showString(flash_off)
        basic.pause(50)
    }
}
face_North()
