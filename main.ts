namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let startTime = 0;
    const motorFullSpeedRPM = 120;  // Assuming full-speed is 120 RPM

    // Function to start motor and track rotations
    export function startMotor(speed: number): void {
        rotations = 0;
        startTime = control.millis();
        motorRunning = true;
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed);
    }

    // Function to stop the motor
    export function stopMotor(): void {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
        motorRunning = false;
    }

    // Function to calculate rotations based on time and assumed speed
    export function getRotations(): number {
        if (motorRunning) {
            let elapsedTime = (control.millis() - startTime) / 1000;  // seconds
            let rpm = (motorFullSpeedRPM * speed) / 100;  // Calculate RPM based on speed percentage
            rotations = (rpm / 60) * elapsedTime;  // Rotations based on RPM and time
            return Math.floor(rotations);
        }
        return 0;
    }
}
