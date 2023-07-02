function loadFromServer(project_identifier) {
    globalRunFlag = false;
    // I have decided that I do not care about security
    let request = new XMLHttpRequest();
    request.open("post", 'https://150.136.114.136:1000/load', true);
    request.onreadystatechange = () => { // Call a function when the state changes.
        if (!request.readyState === XMLHttpRequest.DONE){
            return;
        }
        if(request.status === 200 && request.response != "" && !globalRunFlag) {
            // Request finished. Do processing here.
            console.log("load success");
            tempArr = JSON.parse(request.response);
            tempArr = JSON.parse(tempArr);
            tempArr.forEach(element => {
                if(element.type == "square")
                    uiElements[element.id] = new uiBox(element.id, element.x, element.y, element.w, element.h, element.color, element.parent, element.locked, element.etype, element.text, element.textColor, element.innerImage);
                if(element.type == "circle")
                    uiElements[element.id] = new uiCircle(element.id, element.x, element.y, element.r, element.color, element.parent, element.locked, element.etype, element.text, element.textColor, element.innerImage);
                if(element.type == "diamond")
                    uiElements[element.id] = new uiDiamond(element.id, element.x, element.y, element.h, element.w, element.color, element.parent, element.locked, element.etype, element.text, element.textColor, element.innerImage);
            });
            elems = uiElements.length;
            renderObjs();
            globalRunFlag = true;
        } else if(request.response != "" && ! globalRunFlag){
            console.log("load failure");
        }
    }
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({"id": project_identifier}));
}

function saveToServer(project_identifier, data){
    // I have decided that I do not care about security
    let request = new XMLHttpRequest();
    request.open("post", 'https://150.136.114.136:1000/store', true);
    request.onreadystatechange = () => { // Call a function when the state changes.
        if (!request.readyState === XMLHttpRequest.DONE){
            return;
        }
        if(request.status === 200) {
            // Request finished. Do processing here.
            console.log(request.response);
        } else {
            console.log("save failed");
        }
    }
    request.setRequestHeader('Content-Type', 'application/json');
    const outgoingData = JSON.stringify({[project_identifier]:JSON.stringify(data)});
    console.log(outgoingData);
    request.send(outgoingData);
}

function uploadImage(){

}
