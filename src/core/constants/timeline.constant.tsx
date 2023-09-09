export interface TimelineModel {
  title: string
  duration: {
    start: Date
    end: Date
  }
}
const nowDate = new Date()
const endFakeDate = new Date(2565, 8, 30)
const timelineConstant: Array<TimelineModel> = [
  {
    duration: {
      start: new Date(2565, 8, 12),
      end: nowDate < endFakeDate ? new Date(2565, 9, 7) : new Date(2565, 8, 30)
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
      start: new Date(2565, 9, 30),
      end: new Date(2565, 9, 30)
    },
    title: "สัมภาษณ์รอบกรุงเทพฯ และปริมณฑล"
  },
  {
    duration: {
      start: new Date(2565, 9, 30),
      end: new Date(2565, 9, 30)
    },
    title: "สัมภาษณ์รอบต่างจังหวัด"
  },
  {
    duration: {
      start: new Date(2565, 10, 5),
      end: new Date(2565, 10, 5)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2565, 10, 5),
      end: new Date(2565, 10, 25)
    },
    title: "ยืนยันสิทธิ์การเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2566, 0, 5),
      end: new Date(2566, 0, 8)
    },
    title: "ค่ายลานเกียร์ครั้งที่ 23"
  }
]

export default timelineConstant
