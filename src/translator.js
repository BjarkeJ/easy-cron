var patternBuilder = function(second, minute, hour, dayOfMonth, month, dayOfWeek) {
  'use strict';

  var astrics = {};
  astrics.second = second ? (second + ' '): ' ';
  astrics.minute = minute ? (minute + ' '): ' ';
  astrics.hour = hour ? (hour + ' '): ' ';
  astrics.dayOfMonth = dayOfMonth ? (dayOfMonth + ' '): ' ';
  astrics.month = month ? (month + ' '): ' ';
  astrics.dayOfWeek = dayOfWeek ? (dayOfWeek): '';

  var pattern = astrics.second + astrics.minute + astrics.hour + astrics.dayOfMonth + astrics.month + astrics.dayOfWeek;

  return pattern;
};


module.exports = function (string) {
    'use strict';



    var pattern; // ss mm hh dd mt wd
    pattern = patternBuilder('*', '*', '*', '*', '*', '*');



    return pattern;
};