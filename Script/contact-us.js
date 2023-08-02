let btn_comment = document.getElementById("btn-send-comment");
let close_alert = document.getElementById("icon-x");

let alert_comment = document.getElementById("parent-alert-comment");
let value_last_name = document.getElementById("last-name").value;
let value_first_name = document.getElementById("first-name").value;
let last_name = document.getElementById("last-name-user");
let first_name = document.getElementById("first-name-user");

let first_name_text = document.createTextNode(value_first_name);
let last_name_text = document.createTextNode(value_last_name);

btn_comment.onclick = function () {
  let alert_comment = document.getElementById("parent-alert-comment");
  let value_last_name = document.getElementById("last-name").value;
  let value_first_name = document.getElementById("first-name").value;
  let last_name = document.getElementById("last-name-user");
  let first_name = document.getElementById("first-name-user");

  let first_name_text = document.createTextNode(value_first_name);
  let last_name_text = document.createTextNode(value_last_name);

  first_name.appendChild(first_name_text);
  last_name.appendChild(last_name_text);
  alert_comment.setAttribute("style","position:fixed;top:1%;transition:.5s");

  setTimeout(function () {
    // alert_comment.style.position = "fixed";
    // alert_comment.style.top = "-100%";
    // alert_comment.style.transition = "1s";
    alert_comment.setAttribute("style","position:fixed;top:-100%;transition:1s");
  }, 3000);

  btn_comment.onclick = function() {
    first_name.removeChild(first_name_text);
    last_name.removeChild(last_name_text);
  }

  // setTimeout(function () {
  //   window.location.reload();
  // }, 3500);

  // btn_comment.onclick = function () {
  //   window.location.reload();
  // };
};

close_alert.onclick = function () {
  let alert_comment = document.getElementById("parent-alert-comment");

  alert_comment.setAttribute("style","position:fixed;top:-100%;transition:1s");

  // setTimeout(function () {
  //   window.location.reload();
  // }, 500);
};
