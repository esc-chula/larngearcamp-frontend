export interface TimelineModel {
  title: string
  duration: {
    start: Date
    end: Date
  }
}

const timelineConstant: Array<TimelineModel> = [
  {
    duration: {
      start: new Date(2565, 8, 12),
      end: new Date(2565, 9, 7)
    },
    title: "รับสมัคร"
  },
  {
    duration: {
      start: new Date(2565, 9, 14),
      end: new Date(2565, 9, 14)
    },
    title: "แก้ไขเอกสารประกอบการสมัครวันสุดท้าย"
  },
  {
    duration: {
      start: new Date(2565, 9, 23),
      end: new Date(2565, 9, 23)
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: new Date(2565, 9, 29),
      end: new Date(2565, 9, 29)
    },
    title: "สัมภาษณ์รอบกรุงเทพฯ และปริมณฑล"
  },
  {
    duration: {
      start: new Date(2565, 9, 29),
      end: new Date(2565, 9, 29)
    },
    title: "สัมภาษณ์รอบต่างจังหวัด"
  },
  {
    duration: {
      start: new Date(2565, 10, 4),
      end: new Date(2565, 10, 4)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2565, 11, 4),
      end: new Date(2565, 11, 4)
    },
    title: "ยืนยันสิทธิ์การเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2566, 0, 26),
      end: new Date(2566, 0, 29)
    },
    title: "ค่ายลานเกียร์ครั้งที่ 22"
  }
]

export default timelineConstant
