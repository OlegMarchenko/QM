$(document).ready(function () {

  function copyToClipboard() {
    const str = document.getElementById('item-to-copy').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  const btnCl = document.querySelector('#btnCl');
  btnCl.addEventListener('click', () => {
    copyToClipboard();
    alert('Witcher has been copied to clipboard');
  });

});