namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let intervalId: number = null;

    /**
     * Start the motors for forward movement with the specified speed.
     * @param speed Speed of the motor, eg: 50
     */
    //% blockId="reel_rotations_startMotor" block="start motor at speed %speed"
    //% speed.min=0 speed.max=100
    export function startMotor(speed: number): void {
        if (!motorRunning) {
            rotations = 0;
            motorRunning = true;

            // Set left motor to turn in one direction and right motor in the opposite direction for forward movement
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed);
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed);

            // Start a timer to simulate counting rotations
            intervalId = control.setInterval(() => {
                if (motorRunning) {
                    // Rotation count will vary with speed
                    rotations += Math.round(speed / 10); // Assuming speed proportional to rotation speed
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
