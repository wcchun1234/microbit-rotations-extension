namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let intervalId: number = null;

    /**
     * Start the motor with the specified speed for forward movement.
     * @param speed Speed of the motor, eg: 100
     */
    //% blockId="reel_rotations_startMotor" block="start motor at speed %speed"
    //% speed.min=0 speed.max=100
    export function startMotor(speed: number): void {
        if (!motorRunning) {
            rotations = 0;
            motorRunning = true;

            // Set motors to move in opposite directions for forward movement
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed);
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed);

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

        // Stop both motors
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
