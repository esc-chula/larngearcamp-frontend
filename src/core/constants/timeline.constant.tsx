export interface TimelineModel {
  title: string
  duration: {
    start: Date
    end: Date
  }
}
// Month is 0-based index
const nowDate = new Date()
const endFakeDate = new Date(2566, 8, 29)
const timelineConstant: Array<TimelineModel> = [
  {
    duration: {
      start: new Date(2566, 8, 11),
      end: nowDate < endFakeDate ? new Date(2566, 8, 29) : new Date(2566, 8, 29)
    },
    title: "รับสมัคร"
  },
  {
    duration: {
      start: new Date(2566, 9, 6),
      end: new Date(2566, 9, 6)
    },
    title: "แก้ไขเอกสารประกอบการสมัครวันสุดท้าย"
  },
  {
    duration: {
      start: new Date(2566, 9, 14),
      end: new Date(2566, 9, 14)
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: new Date(2566, 9, 21),
      end: new Date(2566, 9, 21)
    },
    title: "สัมภาษณ์รอบกรุงเทพฯ และปริมณฑล"
  },
  {
    duration: {
      start: new Date(2566, 9, 21),
      end: new Date(2566, 9, 21)
    },
    title: "สัมภาษณ์รอบต่างจังหวัด"
  },
  {
    duration: {
      start: new Date(2566, 9, 30),
      end: new Date(2566, 9, 30)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2566, 9, 30),
      end: new Date(2566, 10, 19)
    },
    title: "ยืนยันสิทธิ์การเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2567, 0, 4),
      end: new Date(2567, 0, 7)
    },
    title: "ค่ายลานเกียร์ครั้งที่ 23"
  }
]

export default timelineConstant
