namespace ReelRotationCounter {
    let rotations = 0;
    let motorRunning = false;
    let startTime = 0;

    //% blockId="reel_rotations_startMotor" block="start motor"
    export function startMotor(): void {
        rotations = 0;
        startTime = control.millis();
        motorRunning = true;
    }

    //% blockId="reel_rotations_stopMotor" block="stop motor"
    export function stopMotor(): void {
        motorRunning = false;
    }

    //% blockId="reel_rotations_getRotations" block="get rotations"
    export function getRotations(): number {
        if (motorRunning) {
            let elapsedTime = (control.millis() - startTime) / 1000;  // seconds
            rotations = elapsedTime;  // Assume 1 rotation per second for simplicity
            return Math.floor(rotations);
        }
        return 0;
    }
}
