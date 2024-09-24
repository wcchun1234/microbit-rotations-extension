//% weight=100 color=#0fbc11 icon="\uf013" block="Motor Rotations"
namespace motorRotations {
    let startTime = 0          // Time when the motor starts
    let motorRunning = false   // Flag to check if the motor is running
    let rotations = 0          // Total number of rotations
    let motorFullSpeedRPM = 120 // Assume motor is 120 RPM at full speed (adjust for your motor)

    /**
     * Start the motor at a given speed (0 to 100).
     * @param speed the speed of the motor from 0 (off) to 100 (full speed)
     */
    //% block="start motor at speed %speed"
    //% speed.min=0 speed.max=100
    export function startMotor(speed: number): void {
        rotations = 0  // Reset the rotation count
        startTime = control.millis()  // Record the current time when the motor starts
        motorRunning = true  // Set the motor running flag to true

        // Start the motor using Kitronik Move Motor package
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }

    /**
     * Stop the motor.
     */
    //% block="stop motor"
    export function stopMotor(): void {
        // Stop the motor by setting speed to 0
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0)
        motorRunning = false  // Set the motor running flag to false
    }

    /**
     * Show the number of rotations on the micro:bit display.
     */
    //% block="show number of rotations"
    export function showRotations(): void {
        if (motorRunning) {
            // Calculate elapsed time in seconds since the motor started
            let elapsedSeconds = (control.millis() - startTime) / 1000

            // Estimate the motor's RPM based on the current speed (speed as a percentage of full speed)
            // Assuming motorFullSpeedRPM is the RPM at 100% speed
            let rpm = (currentSpeed * motorFullSpeedRPM) / 100

            // Calculate the number of rotations based on RPM and elapsed time
            rotations = (rpm / 60) * elapsedSeconds

            // Display the integer part of the number of rotations on the micro:bit's LED display
            basic.showNumber(Math.floor(rotations))
        } else {
            // If the motor is not running, show 0
            basic.showNumber(0)
        }
    }
}
