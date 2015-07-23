var burger = document.getElementById('burgerIcon');
function toggleClose(sender) {
  sender = sender || window.event.target.parentNode;
  if (sender.hasAttribute('open')) {
    sender.removeAttribute('open');
  } else {
    sender.setAttribute('open', 'true');
  }
}
