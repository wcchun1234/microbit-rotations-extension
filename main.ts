namespace ReelRotation {
    let motorFullSpeedRPM = 120;
    let motorRunning = false;
    let rotations = 0;
    let startTime = 0;

    // Function to start the motor and track rotations
    export function startMotorAndTrack(speed: number): void {
        rotations = 0;
        startTime = control.millis();
        motorRunning = true;
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed);
    }

    // Function to stop the motor
    export function stopMotor(): void {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
        motorRunning = false;
        startTime = 0;
    }

    // Function to calculate rotations
    export function calculateRotations(): number {
        if (motorRunning) {
            let elapsedTime = (control.millis() - startTime) / 1000;  // in seconds
            let rpm = motorFullSpeedRPM;
            rotations = (rpm / 60) * elapsedTime;
            return Math.floor(rotations);
        }
        return 0;
    }
}
