enum Compass {
  case South, West, East, North
}
var dir = Compass.West; //direction
print(dir)
print("type=",type(of:dir))
print("=?", Compass.South==Compass.West)