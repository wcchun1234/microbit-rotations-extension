namespace ReelRotationCounter {
    let motorRunning = false;
    let startTime = 0;
    let rotations = 0;
    let rpm = 0;
    let elapsedSeconds = 0;
    let motorFullSpeedRPM = 120;

    //% blockId="start_motor_and_track" block="start motor and track at speed %speed"
    export function startMotorAndTrackRotations(speed: number): void {
        rotations = 0;
        startTime = control.millis();
        motorRunning = true;
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed);
    }

    //% blockId="stop_motor" block="stop motor"
    export function stopMotor(): void {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
        motorRunning = false;
        startTime = 0;
    }

    //% blockId="get_rotations" block="get rotations"
    export function getRotations(): number {
        if (motorRunning) {
            elapsedSeconds = (control.millis() - startTime) / 1000;
            rpm = speed * (motorFullSpeedRPM / 100);
            rotations = (rpm / 60) * elapsedSeconds;
            return Math.floor(rotations);
        }
        return 0;
    }

    //% blockId="is_motor_running" block="is motor running"
    export function isMotorRunning(): boolean {
        return motorRunning;
    }
}
