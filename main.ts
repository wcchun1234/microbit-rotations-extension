// Variables to track rotations and motor state
let rotations = 0
let motorRunning = false
let startTime = 0
let motorFullSpeedRPM = 120

// Function to start motor and track rotations
function startMotorAndTrack(speed: number) {
    rotations = 0
    startTime = control.millis()
    motorRunning = true
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
}

// Function to stop the motor
function stopMotor() {
    motorRunning = false
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0)
}

// Function to get the number of rotations
function getRotations(): number {
    if (motorRunning) {
        let elapsedSeconds = (control.millis() - startTime) / 1000
        let rpm = 50 * (motorFullSpeedRPM / 100)  // assuming speed 50% for example
        rotations = rpm / 60 * elapsedSeconds
    }
    return Math.floor(rotations)
}

// Make the functions available to students
namespace ReelRotationCounter {
    export function startMotorAndTrack(speed: number) {
        startMotorAndTrack(speed)
    }

    export function stopMotor() {
        stopMotor()
    }

    export function getRotations(): number {
        return getRotations()
    }
}
