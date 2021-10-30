export interface TimelineModel {
  title: string
  duration: string
}

const timelineConstant: Array<TimelineModel> = [
  { duration: "25 กันยายน - 20 ตุลาคม 2563", title: "รับสมัคร" },
  { duration: "24 ตุลาคม 2563", title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์" },
  { duration: "31 ตุลาคม 2563", title: "สัมภาษณ์รอบกรุงเทพ" },
  { duration: "2 - 8 พฤศจิกายน 2563", title: "สัมภาษณ์รอบต่างจังหวัด" },
  { duration: "14 พฤศจิกายน 2563", title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย" },
  { duration: "15 พฤศจิกายน - 19 ธันวาคม 2563", title: "ยืนยันสิทธิ์การเข้าร่วมค่าย" }
]

export default timelineConstant
