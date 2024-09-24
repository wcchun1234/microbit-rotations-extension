namespace ReelRotation {
    let motorFullSpeedRPM = 120;
    
    // Function to calculate the number of rotations
    export function calculateRotations(speed: number, elapsedTime: number): number {
        let rpm = speed * (motorFullSpeedRPM / 100);
        let rotations = (rpm / 60) * elapsedTime;
        return Math.floor(rotations);  // Return the integer part of the rotations
    }
}
