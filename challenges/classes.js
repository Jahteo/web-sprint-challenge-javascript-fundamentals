// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

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

  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends ClassCuboidMaker {
    constructor (attrs) {
        super (attrs);
    }
    //this is a really weird thing to do, bc it's really the exact same formula as above, with the understanding that width=length=height & that creating a cuboid with those dimenstions already creates a cube and does all the math properly. But for the sake of showing that I know how to add unique formulas to a child class, here goes this sopping wet, totally unnessesary code:
    cubeVolume () {
        return this.length ** 3
    }
    cubeSurfaceArea () {
        return 6 * this.length ** 2
    }
}
const classCube = new CubeMaker (4)

console.log("CLASS: cube volume: ", classCube.cubeVolume()); // 4 * 4 * 4 = 64
console.log("CLASS: cube sufaceArea: ", classCube.cubeSurfaceArea()); // 6 * 4 * 4 = 96