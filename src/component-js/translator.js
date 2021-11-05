const baybayinInputChecker = document.querySelector(".baybayinInputChecker");
const baybayinOutput = document.querySelector(".baybayinOutput");
baybayinInputChecker.addEventListener("input", (e) => {
  if (e.target.value !== null) {
    let item = [
      { value: "a", key: "A"  },
      { value: "ba", key: "B" },
      { value: "ka", key: "C" },
      { value: "da", key: "C" },
      { value: "ga", key: "C" },
      { value: "ha", key: "C" },
      { value: "la", key: "C" },
      { value: "ma", key: "C" },
      { value: "a", key: "C" },
      { value: "Cat", key: "C" },
      { value: "Cat", key: "C" },
      { value: "Cat", key: "C" },
      { value: "Cat", key: "C" },
      { value: "Cat", key: "C" },
    ]
    item.forEach(value => {
      if(e.target.value === value.key || e.target.value === value.key.toLowerCase()){
        baybayinOutput.innerHTML = value.value;
      }
    });
  }
 
})