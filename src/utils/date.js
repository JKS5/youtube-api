import { format, register } from "timeago.js";
// 한국어를 사용할 경우 아래 koLocale import 후
import koLocale from "timeago.js/lib/lang/ko";
//register에 적용후, format 두번쨰 인자에
register("ko", koLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
