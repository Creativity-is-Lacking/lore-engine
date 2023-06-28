Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "none"});
Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "none"});
Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "none"});

document.getElementById("edittextcolor").value = "#ffffff";

document.getElementById("edittype").addEventListener("change", (event)=> {
    etype = document.getElementById("edittype").value;
    switch (etype) {
      case "1":
        Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "block"});
        Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "none"});
        Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "none"});
        break;
      case "2":
        Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "none"});
        Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "block"});
        Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "none"});
        break;
      case "3":
        Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "none"});
        Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "none"});
        Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "block"});
        break;
      default:
        console.log("default");
        break;
    }
});

document.getElementById("EditConfirm").addEventListener("click", (event) => {
    switch (etype) {
      case "1":
        boxes[eactive].blankFlag = false;
        break;
      case "2":
        boxes[eactive].blankFlag = false;
        boxes[eactive].text = document.getElementById("edittext").value;
        boxes[eactive].textColor = document.getElementById("edittextcolor").value;
        break;
      case "3":
        boxes[eactive].blankFlag = true;
        break;
      default:
        console.log("default");
        break;
    }
    document.getElementById('Editmodal').style.display = "none";
    document.getElementById("edittext").value = "";
    renderObjs();
});