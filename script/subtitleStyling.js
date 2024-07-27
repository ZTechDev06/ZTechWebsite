function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const subtitle = document.querySelector('#subtitle');

function on() {
    subtitle.innerText = "ZTechDev06";
}

function off() {
    subtitle.innerText = "ZTechDev06" + '\xa0';
}

function updateSubtitleStyling() {
    on();
    sleep(1000).then(off);
}

setInterval(function() {
    updateSubtitleStyling();
    return arguments.callee;
}(), 2000);
