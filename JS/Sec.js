var clickMessage = "شما نمی‌توانید روی تصاویر کلیک راست انجام دهید!"
function disableClick(e) {
  if (document.all) {
    if (event.button == 2 || event.button == 3) {
      if (event.srcElement.tagName == "IMG") {
        alert(clickMessage);
        return false;
      }
    }
  }
  else if (document.layers) {
    if (e.which == 3) {
      alert(clickMessage);
      return false;
    }
  }
  else if (document.getElementById) {
    if (e.which == 3 && e.target.tagName == "IMG") {
      alert(clickMessage);
      return false;
    }
  }
}
function associateImages() {
  for (i = 0; i < document.images.length; i++) {
    document.images[i].onmousedown = disableClick;
  }
}
if (document.all) {
  document.onmousedown = disableClick;
}
else if (document.getElementById) {
  document.onmousedown = disableClick;
}
else if (document.layers) {
  associateImages()
}
