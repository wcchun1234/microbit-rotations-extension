# microbit-rotations-extension

This extension allows you to control a motor and track its rotations using the BBC micro:bit. It provides simple blocks for starting, stopping, and monitoring motor rotations, making it easier to create projects involving motor control.

---

## Features

- **Start and stop a motor** at a specific speed.
- **Track the number of rotations** completed by the motor.
- **Display** the rotation count on the micro:bit's LED matrix.

---

## How to Use

### Step 1: Import the Extension

1. Open the [MakeCode Editor for micro:bit](https://makecode.microbit.org/).
2. Create a new project.
3. Click on the **gear icon (⚙️)** in the top-right corner of the editor and select **Extensions**.
4. In the search box, paste the following URL and press Enter:
https://github.com/wcchun1234/microbit-rotations-extension
5. Select the **microbit-rotations-extension** from the list to import it into your project.

### Step 2: Use the Blocks

Once the extension is imported, you will see a new category called **Rotations** in the block editor. You can use the blocks from this category to control and monitor motor rotations.

---

## Blocks Overview

### 1. **Start Motor**

```typescript
startMotor(speed: number)
Description: Starts the motor at the specified speed. The speed can be positive or negative to control the direction of the motor.
Example:
// Start the motor at speed 100
startMotor(100);

2. Stop Motor
stopMotor()
Description: Stops the motor from running.
Example:
// Stop the motor
stopMotor();

3. Show Rotations
showRotations()
Description: Displays the number of rotations completed by the motor on the micro:bit's LED display.
Example:

// Show the number of rotations on the micro:bit
showRotations();
