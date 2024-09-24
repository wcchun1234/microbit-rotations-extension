//% weight=100 color=#0fbc11 icon="\uf013" block="Motor Rotations"
namespace motorRotations {
    let startTime = 0
    let motorRunning = false
    let rotations = 0
    let motorFullSpeedRPM = 120 // RPM at full speed

    //% block="start motor at speed %speed"
    //% speed.min=0 speed.max=100
    export function startMotor(speed: number): void {
        rotations = 0
        startTime = control.millis()
        motorRunning = true
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }

    //% block="stop motor"
    export function stopMotor(): void {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0)
        motorRunning = false
    }

    //% block="show number of rotations"
    export function showRotations(): void {
        if (motorRunning) {
            let elapsedSeconds = (control.millis() - startTime) / 1000
            let rpm = motorFullSpeedRPM * (currentSpeed / 100)
            rotations = (rpm / 60) * elapsedSeconds
            basic.showNumber(Math.floor(rotations))
        }
    }
}
