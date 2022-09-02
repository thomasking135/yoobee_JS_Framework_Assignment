function change() {
  var textbox = document.getElementById("textbox");
  var textarea = document.getElementById("textarea");
  localStorage.setItem('note', textbox.value, textarea.value);
};

export default change