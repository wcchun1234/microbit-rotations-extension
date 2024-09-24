let startTime = 0
let rotations = 0
let motorRunning = false
let motorFullSpeedRPM = 120
let currentSpeed = 0

//% block="start motor at speed %speed"
//% speed.min=0 speed.max=100
export function startMotor(speed: number): void {
    currentSpeed = speed
    rotations = 0
    startTime = control.millis()
    motorRunning = true
    pins.analogWritePin(AnalogPin.P0, Math.map(speed, 0, 100, 0, 1023))
}

//% block="stop motor"
export function stopMotor(): void {
    motorRunning = false
    pins.analogWritePin(AnalogPin.P0, 0)
    startTime = 0
}

//% block="show number of rotations"
export function showRotations(): void {
    if (motorRunning) {
        let elapsedSeconds = (control.millis() - startTime) / 1000
        let rpm = currentSpeed * (motorFullSpeedRPM / 100)
        rotations = (rpm / 60) * elapsedSeconds
        basic.showNumber(Math.floor(rotations))
    } else {
        basic.showNumber(0)
    }
}

//% block="reset rotations"
export function resetRotations(): void {
    rotations = 0
}
