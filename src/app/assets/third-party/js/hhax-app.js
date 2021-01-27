$(document).ready(function () {
  $("textarea.withCharLimit").keyup(function () {
    var max = 500;
    var char = 0;
    var len = $(this).val().length;
    $(".hhax-hint-text.charLimit").html(len + "/" + max + " characters");
    if (len >= max) {
      var char = len - max;
      $(".hhax-hint-text.charLimit").addClass("hhax-form-error-text");
      $(".hhax-hint-text.charLimit").append(" - Limit exceeded");
    } else {
      $(".hhax-hint-text.charLimit").removeClass("hhax-form-error-text");
    }
  });

  var quill = new Quill(".textEditor", {
    theme: "snow",
  });

  /* Generic DataTables */
  $(".sortableTable").DataTable({
    paging: false,
    lengthMenu: false,
    info: false,
    searching: false,
    order: [[0, "asc"]],
    columnDefs: [{ orderable: false, targets: -1 }],
  });
  $(".selectableTable").DataTable({
    paging: false,
    lengthMenu: false,
    info: false,
    searching: false,
    order: [[1, "asc"]],
    columnDefs: [
      { orderable: false, targets: -1 },
      { orderable: false, targets: 0 },
    ],
  });
  $(".responsiveTable").DataTable({
    //scrollY: 300,
    paging: false,
    lengthMenu: false,
    info: false,
    searching: false,
    responsive: {
      details: { type: "column" },
    },
    order: [[1, "asc"]],
    columnDefs: [
      { className: "control", orderable: false, targets: 0 },
      { responsivePriority: 0, targets: 1 }, //,
      //{ responsivePriority: 1, targets: -1 },
      //{ 'orderable': false, 'targets': -1 },
      //{ 'visible': false, 'targets': 8 },
      //{ className: 'search-col', targets: 7 }
    ],
  });
});

// utility functions for prototyping
function showElement(element) {
  $(element).removeClass("hide");
}

function hideElement(element) {
  $(element).addClass("hide");
}

function saveSuccessMsg(msg) {
  console.log(msg);
  $(".toastSuccess").removeClass("hide");
  $(".toastSuccess .content").html(msg);
  successTimeout();
}

function saveSuccessMsgNoFade(msg) {
  console.log(msg);
  $(".toastSuccess").removeClass("hide");
  $(".toastSuccess .content").html(msg);
}

function saveErrorMsg(msg) {
  console.log(msg);
  $(".toastAlert").removeClass("hide");
  $(".toastAlert .content").html(msg);
}

function confirmDelete(ele) {
  $("#confirmDeletion .content").html(ele);
  $("#confirmDeletion").foundation("open");
}

function toggleElement(element) {
  $(element).toggleClass("hide");
}

// select all checkboxes
function selectAllCheckboxes(source, checkboxesName) {
  var checkboxes = document.getElementsByName(checkboxesName);
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = source.checked;
  }
}
//success and warning toast messages timeout
function successTimeout() {
  $(".toastSuccess")
    .fadeTo(10000, 0)
    .slideUp(5000, function () {
      $(this).addClass("hide");
    });
}
function warningTimeout() {
  $(".toastWarning")
    .fadeTo(5000, 0)
    .slideUp(3000, function () {
      $(this).addClass("hide");
    });
}

function startTimer() {
  var count = 30;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  function timer() {
    count = count - 1;
    $("#timeoutModal .stat span").html(count);
    if (count <= 0) {
      clearInterval(counter);
      //counter ended, do something here
      $("#timeoutModal .stat").html("Expired");
      $("#timeoutModal").foundation("close");
      return;
    }
    //Do code for showing the number of seconds here
  }
}

//table with child row
$("#demoChildRowTable").DataTable({
  lengthMenu: false,
  paging: false,
  info: false,
  searching: false,
  responsive: {
    details: { type: "column" },
  },
  order: [[1, "asc"]],
  columnDefs: [
    { className: "control", orderable: false, targets: 0 },
    { responsivePriority: 0, targets: 1 },
    { className: "none", targets: 6 },
  ],
});
