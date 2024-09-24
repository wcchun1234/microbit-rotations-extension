//% weight=100 color=#0fbc11 icon="\uf013" block="Motor Rotations"
namespace motorRotations {
    let startTime = 0               // Time when the motor started
    let motorRunning = false        // To check if the motor is running
    let rotations = 0               // Number of rotations
    let motorFullSpeedRPM = 120     // Motor's RPM at full speed

    /**
     * Start the motor at the specified speed (0-100%).
     * @param speed the speed of the motor from 0 (off) to 100 (full speed)
     */
    //% block="start motor at speed %speed"
    //% speed.min=0 speed.max=100
    export function startMotor(speed: number): void {
        rotations = 0                  // Reset rotations
        startTime = control.millis()    // Get the current time in milliseconds
        motorRunning = true             // Indicate that the motor is running

        // Start the motor using the Kitronik Move Motor library
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }

    /**
     * Stop the motor.
     */
    //% block="stop motor"
    export function stopMotor(): void {
        // Stop the motor by setting speed to 0
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0)
        motorRunning = false             // Indicate that the motor is not running
    }

    /**
     * Display the number of rotations since the motor started.
     */
    //% block="show number of rotations"
    export function showRotations(): void {
        if (motorRunning) {
            // Calculate the elapsed time in seconds since the motor started
            let elapsedSeconds = (control.millis() - startTime) / 1000

            // Calculate the motor's RPM based on the speed (as a percentage of full speed)
            let rpm = (motorFullSpeedRPM * Kitronik_Move_Motor.getSpeed() / 100)

            // Calculate the number of rotations based on RPM and elapsed time
            rotations = (rpm / 60) * elapsedSeconds

            // Display the number of rotations rounded down to the nearest whole number
            basic.showNumber(Math.floor(rotations))
        } else {
            // If the motor isn't running, display 0
            basic.showNumber(0)
        }
    }
}
