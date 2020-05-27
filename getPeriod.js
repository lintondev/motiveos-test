const moment = require('moment');
const FORMAT_STR = 'Do MMM YYYY';

const getPeriod = ({
  quota_period_interval: qpInterval,
  quota_period_day: qpDay,
  quota_period_week: qpWeek,
  quota_period_month: qpMonth,
}, unparsedData) => {
  const date = moment(unparsedData || void 0).format(FORMAT_STR)

  return date;
}


module.exports = getPeriod;