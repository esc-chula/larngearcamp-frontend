export interface TimelineModel {
  title: string
  duration: {
    start: string
    end: string
  }
}

const timelineConstant: Array<TimelineModel> = [
  {
    duration: {
      start: "25 กันยายน 2563",
      end: "20 ตุลาคม 2563"
    },
    title: "รับสมัคร"
  },
  {
    duration: {
      start: "24 ตุลาคม 2563",
      end: "24 ตุลาคม 2563"
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: "31 ตุลาคม 2563",
      end: "31 ตุลาคม 2563"
    },
    title: "สัมภาษณ์รอบกรุงเทพ"
  },
  {
    duration: {
      start: "2 พฤศจิกายน 2563",
      end: "8 พฤศจิกายน 2563"
    },
    title: "สัมภาษณ์รอบต่างจังหวัด"
  },
  {
    duration: {
      start: "14 พฤศจิกายน 2563",
      end: "14 พฤศจิกายน 2565"
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย"
  },
  {
    duration: {
      start: "15 พฤศจิกายน 2565",
      end: "19 ธันวาคม 2565"
    },
    title: "ยืนยันสิทธิ์การเข้าร่วมค่าย"
  }
]

export default timelineConstant
