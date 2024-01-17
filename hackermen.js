function start() {
  namee = document.getElementById("name").value;
  console.log(namee);

  text = document.getElementsByClassName("t")[0];
  text2 = document.getElementsByClassName("t2")[0];

  hello = async () => {
    let a = async () => {
      setTimeout(() => {
        text.innerHTML = "Initializing username and password....";
      }, 1000);
    };

    await a();
    let b = async () => {
      setTimeout(() => {
        text.innerHTML = `Hacking ${namee}'s Username`;
      }, 6000);
    };

    await b();
    let c = async () => {
      setTimeout(() => {
        text.innerHTML = `Username found.[${namee}]`;
      }, 9000);
    };
    await c();
    let d = async () => {
      setTimeout(() => {
        text.innerHTML = "Connecting to facebook..";
      }, 12000);
    };
    await d();
    let e = async () => {
      setTimeout(() => {
        text.innerHTML = "The Facebook is hacked!";
      }, 15000);
    };
    await e();
    let f = async () => {
      setTimeout(() => {
        text2.innerHTML = "CONGRATULATIONS YOU HAVE HACKED SUCCESSFULLY!!";
      }, 15500);
    };
    await f();
  };
  hello();
}
