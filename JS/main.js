"use strict";
/// <reference types="../@types/jquery" />
// *******************************************************
// Slider Menu
$(".open").on("click", function () {
  $(".slider").css({ left: 0 });
});
$(".closebtn").on("click", function () {
  $(".slider").css({ left: "-300px" });
});
// *******************************************************
// Slider Down
$(".toggle").on("click", function (e) {
  $(e.target).next().slideToggle();
});
// *******************************************************
// counter
$(document).ready(function () {
  $(".live").hide();
  let newYear = new Date();
  newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
  $(".tim .days ").countdown({
    until: newYear,
    format: "D", // Display only days
    layout: '{dn}<span class="label"> D</span>',
    onExpiry: function () {
      $(".tim").hide();
      $(".live").show();
    },
  });
  $(".tim .hours ").countdown({
    until: newYear,
    format: "H", // Display only hours
    onTick: function (event) {
      if (event[4] > 60) {
        let hoursWithinDay = Math.floor(event[4] % 60);
        $(this).html(`${hoursWithinDay} <span class="label"> H</span>`);
      }
    },
    layout: '{hn}',
    onExpiry: function () {
      $(".tim").hide();
    },
  });
  $(".tim .minutes ").countdown({
    until: newYear,
    format: "M", // Display only minutes
    onTick: function (event) {
      if (event[5] > 60) {
        let minutesWithinDay = Math.floor(event[5] % 60);
        $(this).html(`${minutesWithinDay} <span class="label"> M</span>`);
      }
    },
    layout: '{mn}',
    onExpiry: function () {
      $(".tim").hide();
    },
  });
  $(".tim .seconds").countdown({
    until: newYear,
    format: "S", // Display only seconds
    onExpiry: function () {
      $(".tim").hide();
    },
    onTick: function (event) {
      if (event[6] > 60) {
        let secondsWithinDay = Math.floor(event[6] % 60);
        $(this).html(`${secondsWithinDay} <span class="label">S</span>`);
      }
    },
    layout: "{sn}",
  });
});

// *******************************************************
// Chars Num
$("#areaText").on("input", function () {
  let txt = $("#areaText").val();
  let oldNum = 100;
  let newNum = oldNum - txt.length;
  if (newNum >= 0) {
    $("#chars").text(newNum);
    oldNum = newNum;
  }else{
    $("#chars").text("your available character finished");
  }
});
