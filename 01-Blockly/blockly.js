//Insert level 9 code below
moveForward();
turnLeft();
while (notDone()) {
  moveForward();
  if (isPathForward()) {
    moveForward();
  } else {
    turnLeft();
  }
}
