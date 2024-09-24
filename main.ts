let rotations = 0
let motorRunning = false
let startTime = 0
let motorFullSpeedRPM = 120

// Start motor and track rotations
// speed is a percentage (0-100)
function startMotorAndTrackRotations(speed: number) {
    rotations = 0
    startTime = control.millis()
    motorRunning = true
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
}

// Stop motor and return the number of rotations
function stopMotorAndGetRotations(): number {
    motorRunning = false
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0)
    let elapsedSeconds = (control.millis() - startTime) / 1000
    let rpm = speed * (motorFullSpeedRPM / 100)
    rotations = rpm / 60 * elapsedSeconds
    return Math.floor(rotations)
}

//% block="start motor and track at speed %speed"
//% speed.min=0 speed.max=100
export function startMotor(speed: number): void {
    startMotorAndTrackRotations(speed)
}

//% block="stop motor and show rotations"
//% blockSetVariable="rotations"
export function getRotations(): number {
    return stopMotorAndGetRotations()
}
