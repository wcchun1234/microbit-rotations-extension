namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let intervalId: number = null;

    //% blockId="reel_rotations_startMotor" block="start motor"
    export function startMotor(): void {
        if (!motorRunning) {
            rotations = 0;
            motorRunning = true;

            // Set motor speed (assuming Kitronik motor driver or similar)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100);

            // Start a timer to simulate counting rotations
            intervalId = control.setInterval(() => {
                if (motorRunning) {
                    rotations++;
                }
            }, 1000, control.IntervalMode.Interval); // Adjust interval as needed for real motor speed
        }
    }

    //% blockId="reel_rotations_stopMotor" block="stop motor"
    export function stopMotor(): void {
        motorRunning = false;

        // Stop the motor
        Kitronik_Move_Motor.stop();

        if (intervalId !== null) {
            control.clearInterval(intervalId, control.IntervalMode.Interval);
            intervalId = null;
        }
    }

    //% blockId="reel_rotations_getRotations" block="get rotations"
    export function getRotations(): number {
        return rotations;
    }
}
