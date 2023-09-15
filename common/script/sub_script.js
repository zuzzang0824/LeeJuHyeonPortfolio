$(".btn_info").click(function () {
  $("#tab1").show();
  $("#tab2").hide();

  $(".btn_overview").css({ filter: "grayscale(0.7)" });
  $(".btn_info").css({ filter: "grayscale(0)" });
});

$(".btn_overview").click(function () {
  $("#tab2").show();
  $("#tab1").hide();

  $(".btn_info").css({ filter: "grayscale(0.7)" });
  $(".btn_overview").css({ filter: "grayscale(0)" });
});
