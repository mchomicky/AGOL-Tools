var search = document.querySelector('.jimu-widget-search');
var topPlace;
search ? topPlace = 50 : topPlace = 10;

var popParent = document.querySelector('.esriPopup');
var parentStyle = popParent.getAttribute('style');
!parentStyle.includes('position: static') && (parentStyle += 'position: static');
popParent.setAttribute('style', parentStyle);

var popup = document.querySelector('.esriPopupWrapper');
popup.classList.contains('undock') && popup.classList.remove('undock');

popupDock();

var observer = new MutationObserver(function(muts)  {
    muts.forEach(function(mut) {
        if (mut.type == 'attributes' && popup.getAttribute('style') !== `position: absolute;right: 15px;top: ${topPlace}px` && !popup.classList.contains('undock')) {
            popupDock();
        }
    });
});

observer.observe(popup, {
    attributes: true
});

function popupDock() {
    popup.setAttribute('style', `position: absolute;right: 15px;top: ${topPlace}px`);
    // add pointer topRight, pointer topLeft, pointer bottomRight, pointer bottomLeft
    var popAnchor = document.querySelector('.outerPointer.left') 
        || document.querySelector('.outerPointer.right') 
        || document.querySelector('.pointer.top') 
        || document.querySelector('.pointer.bottom')
        || document.querySelector('.pointer.topRight')
        || document.querySelector('.pointer.topLeft')
        || document.querySelector('.pointer.bottomRight')
        || document.querySelector('.pointer.bottomLeft')  
        || false;
    popAnchor && popAnchor.setAttribute('style', 'display: none;');
}

