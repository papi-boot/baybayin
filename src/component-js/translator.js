const baybayinInputChecker = document.querySelector(".baybayinInputChecker");
const baybayinOutput = document.querySelector(".baybayinOutput");
baybayinInputChecker.addEventListener("input", (e) => {
  if (e.target.value !== null) {
    let item = [
      { key: "a", value: "red" },
      { key: "b", value: "blue" },
      { key: "c", value: "green" },
      { key: "d", value: "orange" },
      { key: "e", value: "skyblue" },
      { key: "f", value: "teal" },
      { key: "g", value: "tomatoe" },
      { key: "h", value: "lavender" },
      { key: "i", value: "black" },
      { key: "j", value: "brown" },
      { key: "k", value: "maroon" },
      { key: "l", value: "navy" },
    ];
    item.forEach((value) => {
      if (
        e.target.value === value.key ||
        e.target.value === value.key.toLowerCase()
      ) {
        baybayinOutput.style.backgroundColor = value.value;
      }
    });
  }
});
