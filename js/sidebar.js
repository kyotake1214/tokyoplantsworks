// Sidebar JS
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  // overlayをclickでsidebar消す
  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
  });
  // menu button clickでsidebar開く
  $('#sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').addClass('active');
    // fade in the overlay
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
  // sidebarのa属性 clickでsidebar消す
  $('#sidebar a').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
  });
});
