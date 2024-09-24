let startTime = 0        // This will store the time when the motor starts
let rotations = 0        // This will store the number of rotations
let motorRunning = false // A flag to track if the motor is running
let motorFullSpeedRPM = 120 // Motor's RPM at full speed (adjust this based on your motor's specification)
let currentSpeed = 0     // Current speed of the motor

//% block="start motor at speed %speed"
//% speed.min=0 speed.max=100
export function startMotor(speed: number): void {
    currentSpeed = speed  // Store the current speed
    rotations = 0         // Reset the rotation count
    startTime = control.millis()  // Record the current time (in milliseconds) when the motor starts
    motorRunning = true    // Set the flag to true when the motor is running

    // Start the motor using the speed parameter (assuming the motor is controlled via PWM on Pin P0)
    pins.analogWritePin(AnalogPin.P0, Math.map(speed, 0, 100, 0, 1023))
    console.log("Motor started at speed: " + speed)
}

//% block="stop motor"
export function stopMotor(): void {
    motorRunning = false   // Set the flag to false to stop tracking rotations
    pins.analogWritePin(AnalogPin.P0, 0)  // Stop the motor by setting pin P0 to 0
    startTime = 0          // Reset the start time
    console.log("Motor stopped")
}

//% block="show number of rotations"
export function showRotations(): void {
    if (motorRunning) {
        // Calculate how many seconds have passed since the motor started
        let elapsedSeconds = (control.millis() - startTime) / 1000

        // Estimate the motor's RPM based on the current speed (motorFullSpeedRPM is the max RPM at full speed)
        let rpm = currentSpeed * (motorFullSpeedRPM / 100)

        // Calculate the number of rotations based on the RPM and time that has passed
        rotations = (rpm / 60) * elapsedSeconds

        // Display the integer part of the number of rotations on the micro:bit's LED display
        basic.showNumber(Math.floor(rotations))
        console.log("Rotations: " + Math.floor(rotations))
    } else {
        basic.showNumber(0)  // If the motor is not running, show 0
    }
}

//% block="reset rotations"
export function resetRotations(): void {
    rotations = 0  // Reset the rotation count to zero
    console.log("Rotations reset")
}
