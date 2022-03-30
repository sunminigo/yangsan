jQuery.browser = {};
(function () {
  jQuery.browser.msie = false;
  jQuery.browser.version = 0;
  if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
    jQuery.browser.msie = true;
    jQuery.browser.version = RegExp.$1;
  }
})();


$(function() {
  let Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    let links = this.el.find('.link');

    links.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    let $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  let accordion = new Accordion($('#accordion'), false);
});

/* Calendar */
$('#datepicker').datepicker({
  dateFormat: "yy.mm.dd",
  showOtherMonths: true,
  selectOtherMonths: true,
  showMonthAfterYear: true,
  gotoCurrent: true,
  yearSuffix: '년',
  dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
  dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
  monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  minDate: 0,
  maxDate: "+30D",
  onSelect:function(d){
    var arr = d.split(".");

    $("#year").text(arr[0]);
    $("#month").text(arr[1]);
    $("#day").text(arr[2]);

    //요일 가져오기
    //데이터를 먼저 가져오고 (숫자로 넘어옴)
    var date = new Date($("#datepicker").datepicker({dateFormat:"yy.mm.dd"}).val());
    var week = new Array("일","월","화","수","목","금","토");

    $("#selectDay").text(`${d} (${week[date.getDay()]})`);
  }
});



const handleSelect = function () {
  $('.calendar_box').hide();
  $('.time_box').hide();
  $('#selectDate').click(function () {
    $('.calendar_box').slideToggle();
    if ($('.time_box').is(':visible')) $('.time_box').slideUp(500);
  });
  $('#selectTime').click(function () {
    $('.time_box').slideToggle();
    if ($('.calendar_box').is(':visible')) $('.calendar_box').slideUp(500);
  });
}

handleSelect();