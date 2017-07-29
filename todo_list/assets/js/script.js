$(document).ready(function() {
   //  initButtons();


      // function() {
      //    $(this).children(".btn").addClass("remove")
      // }
   // );

   $("ul").on ("click", ".todo", function() {
      $(this).toggleClass("crossout");
   });

   $("input[type='text']").on("change", function() {
      var value = $(this).val();
      $("ul").append('<li class="todo list-group-item"><span class="remove btn">X</span><span class="item">' + " " + value + '</span></li>');
      $(this).val("");
   });

   $("ul").on("mouseover", ".todo", function() {
      $(this).children(".btn").removeClass("remove")
   });

   $("ul").on("mouseleave", ".todo", function() {
      $(this).children(".btn").addClass("remove")
   });

   $("ul").on("click", ".btn", function() {
      $(this).parent("li").remove();
   });
});
