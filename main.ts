enum RadioMessage {
    message1 = 49434,
    ON = 43154,
    OFF = 23550
}
radio.onReceivedMessage(RadioMessage.OFF, function () {
    servos.P1.setAngle(-90)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.ON)
})
radio.onReceivedMessage(RadioMessage.ON, function () {
    servos.P1.setAngle(90)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.OFF)
})
basic.forever(function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
basic.forever(function () {
    basic.showString("R")
    basic.showNumber(input.rotation(Rotation.Roll))
    basic.showString("N")
    basic.showNumber(input.rotation(Rotation.Pitch))
})
