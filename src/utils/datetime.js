import moment from 'moment';
import 'moment/locale/ru';
import { INPUT_DATETIME_FORMAT, VIEW_DATETIME_FORMAT, DATETIME_LOCALE } from '../settings';

export function getFormatDate(datetime) {
  return moment(datetime, INPUT_DATETIME_FORMAT).locale(DATETIME_LOCALE).format(VIEW_DATETIME_FORMAT);
}
