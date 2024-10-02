namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let intervalId: number = null;

    /**
     * Start the motor with the specified speed and direction.
     * @param speed Speed of the motor, eg: 100
     * @param direction Direction of the motor, eg: Kitronik_Move_Motor.SpinDirections.Left
     */
    //% blockId="reel_rotations_startMotor" block="start motor at speed %speed direction %direction"
    //% speed.min=0 speed.max=100
    export function startMotor(speed: number, direction: Kitronik_Move_Motor.SpinDirections): void {
        if (!motorRunning) {
            rotations = 0;
            motorRunning = true;

            // Set motor speed and direction for both motors to move in the same direction
            Kitronik_Move_Motor.spin(direction, speed);

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
