const name = "Star It Ltd.";
let times = 1;

const printName = (name) => {
  if (times <= 10) {
    console.log(name);
    times++;
    printName(name);
  };
};

printName(name);