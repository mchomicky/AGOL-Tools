var popParent = document.querySelector('.esriPopup');
var parentStyle = popParent.getAttribute('style');
parentStyle = parentStyle.replaceAll('position: static', '');
popParent.setAttribute('style', parentStyle);

var popup = document.querySelector('.esriPopupWrapper');
popup.setAttribute('style', `position: absolute;`);
popup.classList.add('undock');

var popAnchor = document.querySelector('.outerPointer.left') 
    || document.querySelector('.outerPointer.right') 
    || document.querySelector('.pointer.top') 
    || document.querySelector('.pointer.bottom')
    || document.querySelector('.pointer.topRight')
    || document.querySelector('.pointer.topLeft')
    || document.querySelector('.pointer.bottomRight')
    || document.querySelector('.pointer.bottomLeft')  
    || false;
popAnchor && popAnchor.getAttribute("style");
popAnchor && popAnchor.removeAttribute("style");