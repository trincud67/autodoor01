let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P16,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    if (distance > 0 && distance <= 5) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(500)
    } else {
        pins.servoWritePin(AnalogPin.P1, 3)
    }
})
