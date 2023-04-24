import { useState, useEffect } from "react";
// How long 날짜를 알려주는 로직의 재사용 custom Hooks
export default function useUploadDate(videoDate) {
  const [uploadDate, setUploadDate] = useState(null);

  useEffect(() => {
    // videoDate 값의 경우 2023-03-26T19:00:12Z :
    // ISO 8601 format으로 Z는  UTC timezone d을 나타낸
    const publishedAt = new Date(videoDate);
    // new Date("2023-03-26T19:00:12Z")와 같이 Date 생성자 함수의 인수로 전달하면,
    //JavaScript는 내부적으로 해당 문자열을 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초가 지난 시간인지 변환
    //이 값을 사용하여 동일한 날짜와 시간을 나타내는 Date 객체를 생성
    console.log(publishedAt);
    //Mon Mar 27 2023 23:02:13 GMT+0900 (한국 표준시)
    const today = new Date();
    const diffTime = Math.abs(today - publishedAt);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    let uploadDateString;
    if (diffDays >= 365) {
      const diffYears = Math.floor(diffDays / 365);
      uploadDateString = `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    } else if (diffDays >= 30) {
      const diffMonths = Math.floor(diffDays / 30);
      uploadDateString = `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    } else if (diffDays >= 7) {
      const diffWeeks = Math.floor(diffDays / 7);
      uploadDateString = `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
    } else if (diffDays > 1) {
      uploadDateString = `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else if (diffHours > 0) {
      uploadDateString = `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else if (diffMinutes > 0) {
      uploadDateString = `${diffMinutes} minute${
        diffMinutes > 1 ? "s" : ""
      } ago`;
    } else {
      uploadDateString = `${diffSeconds} second${
        diffSeconds > 1 ? "s" : ""
      } ago`;
    }
    setUploadDate(uploadDateString);
  }, [videoDate]);

  return uploadDate;
}
