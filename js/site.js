var lambdaEndpoint = "https://qbarizicd6.execute-api.us-east-2.amazonaws.com/dev/changeimage";

function show_image() {
    var fileNum = Math.floor(Math.random() * 20 + 1);
    var myImg = $(".myImg");
    var currentScr = myImg.attr('src');
    var newImg = `images/${fileNum}.jpg`;
    console.log(currentScr);
    console.log(newImg);
    while (currentScr == newImg) {
        fileNum = Math.floor(Math.random() * 20 + 1);
        newImg = `images/${fileNum}.jpg`;
        console.log("Reload...");
    }
    myImg.attr('src', newImg);

    fetch(lambdaEndpoint,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: fileNum
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result.body);
            var caption = result.body;
            var myCaption = $(".myCaption");
            myCaption.html(newImg + " with caption:" + caption);
        })

}