//% blockId="reel_rotations_startMotor" block="start motor at speed %speed"
//% speed.min=0 speed.max=100
export function startMotor(speed: number): void {
    rotations = 0;
    startTime = control.millis();
    motorRunning = true;
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed);
}

//% blockId="reel_rotations_stopMotor" block="stop motor"
export function stopMotor(): void {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
    motorRunning = false;
}

//% blockId="reel_rotations_getRotations" block="get rotations with speed %speed"
//% speed.min=0 speed.max=100
export function getRotations(speed: number): number {
    if (motorRunning) {
        let elapsedTime = (control.millis() - startTime) / 1000;
        let rpm = (motorFullSpeedRPM * speed) / 100;
        rotations = (rpm / 60) * elapsedTime;
        return Math.floor(rotations);
    }
    return 0;
}
