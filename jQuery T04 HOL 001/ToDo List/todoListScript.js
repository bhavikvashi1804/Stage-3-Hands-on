$(document).ready(() => {
  $("#addTaskBtn").click(() => {
    let taskName = $("#taskName").val();
    if (taskName == "") {
      alert("Enter task details!!");
    }
  });
});
