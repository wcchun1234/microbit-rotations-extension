# microbit-rotations-extension

## Overview

The **microbit-rotations-extension** is a custom extension for the BBC micro:bit, designed to control a motorized car using the Kitronik Motor Driver. This extension provides easy-to-use blocks for starting and stopping the motor, adjusting speed and direction, and counting the number of wheel rotations based on speed. It is perfect for learning how to integrate programming and hardware control to create interactive and fun robotics projects.

## Key Features

-  **Motor Control**: Start and stop motors using simple commands.

-  **Speed and Direction**: Control the speed and direction of each motor.

-  **Rotation Counting**: Keep track of wheel rotations, with speed-based adjustments for accurate estimation.

## Installation

To use this extension in the MakeCode editor:

1.  Open the [Microsoft MakeCode](https://makecode.microbit.org) editor.

2.  Go to **Extensions** under the gear icon menu.

3.  Search for your repository by entering the following URL: https://github.com/wcchun1234/microbit-rotations-extension/

4.  Click on the extension to add it to your MakeCode project.

5.  **Important**: Make sure you also download and add the **Kitronik :MOVE Motor** extension, as it is required for this extension to work correctly. You can find it by searching for "Kitronik :MOVE Motor" in the Extensions menu.

## Blocks Included

### Start Motor

-  **Block Name**: start motor at speed %speed

-  **Description**: Starts the motors at the specified speed, allowing the car to move forward.

-  **Parameters**:

-  speed (0-100): Sets the speed of the motors.

-  **Usage Example**:

``` javascript

ReelRotationCounter.startMotor(50);
```

This will start both motors moving forward at 50% speed, making the car move in a straight line.

### Stop Motor

-  **Block Name**: stop motor

-  **Description**: Stops both motors, bringing the car to a halt.

-  **Usage Example**:

``` javascript

ReelRotationCounter.stopMotor();
```

This will immediately stop both motors.

### Get Rotations

-  **Block Name**: get rotations

-  **Description**: Returns the current number of rotations since the motor was started.

-  **Usage Example**:
``` javascript

let rotations = ReelRotationCounter.getRotations();

basic.showNumber(rotations);
```

This will display the number of rotations counted while the motor was running.

## Example Usage

Here's a complete example of how you can use this extension to control the motors and display the number of rotations:

### Example Code

``` javascript
let rotations = 0;

input.onButtonPressed(Button.A, function () {

 // Start motor at speed 50 for forward movement

 ReelRotationCounter.startMotor(50);

 basic.showString("Motor Started");

});

input.onButtonPressed(Button.B, function () {

 // Stop the motor

 ReelRotationCounter.stopMotor();

 basic.showString("Motor Stopped");

});

input.onButtonPressed(Button.AB, function () {

 // Display the number of rotations

 rotations = ReelRotationCounter.getRotations();

 basic.showString("Rotations: ");

 basic.showNumber(rotations);

});
```

## Explanation

-  **Button A Pressed**: Starts the motors at speed 50, making the car move forward. A message "Motor Started" is displayed.

-  **Button B Pressed**: Stops the motors, and "Motor Stopped" is displayed.

-  **Button A+B Pressed**: Displays the number of rotations counted while the motors were running.

## Usage Tips

-  **Direction Control**: The motors are configured to move the car forward by default. If you want to change the direction, you can modify the motor directions in the startMotor() function.

-  **Speed Adjustment**: Adjust the speed parameter (0-100) to control how fast the car moves. A higher value will make the car move faster and will also impact the rotation count.

-  **Counting Rotations**: The rotation count is an estimate based on speed. If you need precise measurements, consider adding an encoder to the motor.

## Troubleshooting

-  **Car Turns Instead of Moving Forward**: Ensure that the motors are set to rotate in opposite directions for forward movement. The left motor should spin forward while the right motor should spin in the same forward direction.

-  **Inaccurate Rotation Count**: The count is speed-based and may vary depending on surface friction or battery levels. Fine-tune the rotation count factor (speed / 10) if needed for more accurate results.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve this extension.

**Contact**

If you have any questions or need further assistance, please feel free to reach out through the GitHub repository.

## Summary of Changes

1.  **Added an Important Step in Installation**: Mentioned that students also need to add the Kitronik :MOVE Motor extension for the project to function properly.

2.  **Improved Explanation and Usage Tips**: Clarified the direction control and speed adjustment in the **Usage Tips** section.

3.  **Formatting for Better Clarity**: Ensured consistent formatting with bullet points, bold text, and usage examples to make instructions easy to follow.
