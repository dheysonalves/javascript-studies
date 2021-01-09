function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

/* loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the ${script.src} is loaded`); 
    alert(_); // function declared in the loaded script
}); */

// Error handling

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

loadScript('/my/script.js', function (error, script) {
    if (error) {
        // handle error
    } else {
        // script loaded successfully
    }
});

