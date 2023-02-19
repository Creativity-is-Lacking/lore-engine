function loadFromServer(project_identifier, project_password) {
    argon2.hash({ pass: project_identifier, salt: ${{ secrets.TRANSFER_SALT }} })
    .then(hashid => {
        hashid = hashid.hashHex;
        argon2.hash({ pass: project_password, salt: ${{ secrets.TRANSFER_SALT }} })
        .then(hashpass => {
            hashpass = hashpass.hashHex;
            let request = new XMLHttpRequest();
            request.open("post", 'https://' + ${{ secrets.SERVER_IP }} + '/', true);
            request.onreadystatechange = () => { // Call a function when the state changes.
                if (!request.readyState === XMLHttpRequest.DONE){
                    return;
                }
                if(request.status === 200) {
                    // Request finished. Do processing here.
                }
            }
            request.send({id: hashid, pass: hashpass});
        })
        .catch(e => console.error(e.message, e.code)); //TODO notify user of failure to access
    })
    .catch(e => console.error(e.message, e.code)); //TODO notify user of failure to access
}

function saveToServer(project_identifier, project_password){

}

function uploadImage(){

}
