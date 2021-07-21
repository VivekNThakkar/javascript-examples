// var temp = "temp1"
// this.temp = "temp1";

const video = {
  title: "Vivek",
  tags: ["v", "i", "e"],
  showTags() {
    console.log(this.tags);
    const insideShowTags = () => {
      console.log(this); // video object. // '.' "this" value inside of an arrow function always equals "this" value from the outer function.
    };
    insideShowTags();
  },
  showTags2: () => {
    console.log(this); // {} => refers to global object '.' "this" value inside of an arrow function always equals "this" value from the outer function. And here, outer function is the global function having "this"'s value as {}.
  },
};

video.showTags(); // ['v', 'i', 'e']
video.showTags2(); // {}
console.log(this);
