let startTime = 0
let rotations = 0

//% blockId="start_timer" block="start timer and reset rotation count"
export function startTimer(): void {
    rotations = 0
    startTime = control.millis()
}

//% blockId="stop_timer" block="stop timer"
export function stopTimer(): void {
    startTime = 0
}

//% blockId="calculate_rotations" block="calculate rotations at speed %speed"
export function calculateRotations(speed: number): number {
    let rpm = 0
    let elapsedSeconds = 0
    if (startTime > 0) {
        // Calculate the elapsed time in seconds
        elapsedSeconds = (control.millis() - startTime) / 1000
        // Estimate the motor's RPM based on the speed (adjust based on motor characteristics)
        // Assume the motor runs at 120 RPM at full speed (speed = 100)
        rpm = speed * (120 / 100)
        // Calculate the number of rotations based on RPM and elapsed time
        // Convert RPM to rotations per second
        rotations = rpm / 60 * elapsedSeconds
    }
    return Math.floor(rotations) // Return the integer number of rotations
}
