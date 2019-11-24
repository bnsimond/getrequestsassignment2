'use strict';

function getDogImage (photoQuantity) {
    fetch (`https://dog.ceo/api/breeds/image/random/${photoQuantity}`)
    .then(response => response.json())
    .then(responseJson => display(responseJson))
    .catch(error => alert ('Error. Try again'));
}

function display (responseJson) {
    console.log (responseJson)
    
    var dogArray = responseJson.message
    for (let i=0; i<dogArray.length; i++) {
        let dogPhotos = dogArray[i]
        $(".results").append(`<img src="${dogPhotos}"/>`)
    }
}

function dogForm () {
    $('form').submit(e=> {
     e.preventDefault ();
     var dogQuantity = $("#amountRequested").val();
     getDogImage(dogQuantity);
    });
}

$(function() {
    alert('Get random dog pictures. Choose 1 to 50 pictures.');
    dogForm();
});