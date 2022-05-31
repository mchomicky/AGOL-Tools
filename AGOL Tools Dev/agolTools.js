document.addEventListener('DOMContentLoaded', function() {
    const dockButton = document.getElementById('dock');
    dockButton.addEventListener('click', function() {
        dockButton.classList.contains('active') ? 
        (dockButton.classList.remove('active'), chrome.tabs.executeScript(null, {file: 'popupUndock.js'}))
        : (dockButton.classList.add('active'), chrome.tabs.executeScript(null, {file: 'popupDock.js'}))
    });

    const resizeButton = document.getElementById('resize');
    resizeButton.addEventListener('click', function() {
        let x = document.getElementById('width').value;
        let y = document.getElementById('height').value;
        chrome.tabs.executeScript(null, {code: '(' + resizePopup + ')(' + x + ',' + y +');'});
    });
});

function resizePopup(width=400, height=600) {
    var sizers = document.querySelectorAll('.esriPopupWrapper .sizer');
    var content = document.querySelector('.sizer.content .contentPane');
    for (i of sizers) {
        i.setAttribute('style', `width: ${width}px`);
    }
    content.setAttribute('style', `max-height: ${height}px`);
}
