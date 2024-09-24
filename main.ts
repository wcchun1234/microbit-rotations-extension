// Import necessary modules
//% blockId="start_motor_and_track" block="start motor at speed %speed with counting rotations"
export function startMotorWithRotation(speed: number): void {
    let rpm = 0;
    let elapsedSeconds = 0;
    let startTime = 0;
    let rotations = 0;
    
    // Button A: Start motor and reset rotation tracking
    input.onButtonPressed(Button.A, function () {
        rotations = 0;
        // Set the start time
        startTime = control.millis();
        // Start the motor moving forward at the defined speed
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed);
    });
    
    // Button B: Stop the motor
    input.onButtonPressed(Button.B, function () {
        // Stop the motor
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
        // Stop counting time when the motor is off
        startTime = 0;
    });

    basic.forever(function () {
        if (startTime > 0) {
            // Only calculate rotations if the motor is running
            // Calculate the elapsed time in seconds
            elapsedSeconds = (control.millis() - startTime) / 1000;
            // Estimate the motor's RPM based on the speed (adjust the full-speed RPM based on your motor's characteristics)
            // Assume the motor runs at 120 RPM at full speed (speed = 100)
            rpm = speed * (120 / 100);
            // Calculate the number of rotations based on RPM and elapsed time
            // Convert RPM to rotations per second
            rotations = rpm / 60 * elapsedSeconds;
            // Display the integer number of rotations on the micro:bit display
            basic.showNumber(Math.floor(rotations));
        }
        // Small delay to prevent overwhelming the display
        basic.pause(200);
    });
}
