const getPeriod = require('./getPeriod');
const moment = require('moment');

const FORMAT_STR = 'Do MMM YYYY';


it('should get weekly period', () => {
  const periods = [
    getPeriod({ quota_period_interval: 'WEEKLY' }, moment("25 May 20", 'D MMM YY')),
    getPeriod({ quota_period_interval: 'WEEKLY', quota_period_day: 2 }, moment("25 May 20", 'D MMM YY')),
    getPeriod({ quota_period_interval: 'WEEKLY', quota_period_day: 3 }, moment("1 Jan 15", 'D MMM YY'))
  ];

  expect(periods[0]).toEqual("25th May 2020");
  expect(periods[1]).toEqual("19th May 2020");
  expect(periods[2]).toEqual("31st Dec 2014");
});

it('should get monthly period', () => {
  const periods = [
    getPeriod({ quota_period_interval: 'MONTHLY', quota_period_week: 1 }, moment("25 Mar 20", 'D MMM YY')),
    getPeriod({ quota_period_interval: 'MONTHLY', quota_period_day: 2, quota_period_week: 1 }, moment("25 Apr 20", 'D MMM YY')),
    getPeriod({ quota_period_interval: 'MONTHLY', quota_period_day: 3, quota_period_week: 2 }, moment("25 Apr 20", 'D MMM YY')),
    getPeriod({ quota_period_interval: 'MONTHLY', quota_period_day: 1, quota_period_week: 4 }, moment("1 Jan 16", 'D MMM YY'))
  ];

  expect(periods[0]).toEqual("2nd Mar 2020");
  expect(periods[1]).toEqual("7th Apr 2020");
  expect(periods[2]).toEqual("8th Apr 2020");
  expect(periods[3]).toEqual("28th Dec 2015");
});

it('should get quarterly period', () => {
  const periods = [
    getPeriod({
      quota_period_interval: 'QUARTERLY',
      quota_period_day: 3,
      quota_period_week: 2,
      quota_period_month: 3
    }, moment("25 Apr 20", 'D MMM YY')),
    getPeriod({
      quota_period_interval: 'QUARTERLY',
      quota_period_day: 3,
      quota_period_week: 2,
      quota_period_month: 11
    }, moment("25 Apr 20", 'D MMM YY')),
    getPeriod({
      quota_period_interval: 'QUARTERLY',
      quota_period_day: 4,
      quota_period_week: 3,
      quota_period_month: 6
    }, moment("2 Feb 15", 'D MMM YY'))
  ];

  expect(periods[0]).toEqual("11th Mar 2020");
  expect(periods[1]).toEqual("12th Feb 2020");
  expect(periods[2]).toEqual("18th Dec 2014");
});

it('should get annual period', () => {
  const periods = [
    getPeriod({
      quota_period_interval: 'ANNUALLY',
      quota_period_day: 3,
      quota_period_week: 2,
      quota_period_month: 3
    }, moment("25 Apr 20", 'D MMM YY')),
    getPeriod({
      quota_period_interval: 'ANNUALLY',
      quota_period_day: 3,
      quota_period_week: 2,
      quota_period_month: 10
    }, moment("25 Apr 20", 'D MMM YY'))
  ];

  expect(periods[0]).toEqual("8th Apr 2020");
  expect(periods[1]).toEqual("13th Nov 2019");
});