// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class ClassCuboidMaker {
    constructor (length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    classVolume () {
        return this.length * this.height * this.width
    }
    classSurfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

  const classCuboid = new ClassCuboidMaker (4, 5, 5);

  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log("CLASS: cuboid volume: ", classCuboid.classVolume()); // 100
  console.log("CLASS: cuboid sufaceArea: ", classCuboid.classSurfaceArea()); // 130
