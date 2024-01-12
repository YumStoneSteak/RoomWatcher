import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/ko";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale("ko");

const formatDate = (dateString) => {
  const date = dayjs(dateString);
  const dayOfWeekName = date.format("ddd");
  return `${date.format("YYYY년 MM월DD일")} (${dayOfWeekName})`;
};

export default formatDate;
