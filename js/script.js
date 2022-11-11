// Javascript template

var images,
    loadedImage = 0;

function preload() {
    images = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'img/woman-subject-mono.png';

    imgArray[1] = new Image();
    imgArray[1].src = 'img/headline.png';

    
    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false)
    }
}

function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {
        
        // set the background for each div by calling the images declared on the array
        for (var i = 0; i< images.length; i++)
        {
            imageObj = new Image();
            imageObj.style.background 
        }

        init();
    }
}

function init() {
    main.style.visibility = "visible";
}

// image preload function should be called upon banner load.
