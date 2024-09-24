namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let startTime = 0;

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

    // Function to calculate rotations based on the motor's speed and time
    export function getRotations(): number {
        if (motorRunning) {
            let elapsedTime = (control.millis() - startTime) / 1000;  // seconds
            let rpm = Kitronik_Move_Motor.readWheelEncoder();  // This should read the wheel encoder from the Kitronik extension
            rotations = (rpm / 60) * elapsedTime;
            return Math.floor(rotations);
        }
        return rotations;
    }
}
