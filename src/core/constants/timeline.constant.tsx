export interface TimelineModel {
  title: string
  duration: {
    start: Date
    end: Date
  }
}
// Month is 0-based index
const nowDate = new Date()
const endFakeDate = new Date(2567, 8, 15)
const timelineConstant: Array<TimelineModel> = [
  {
    duration: {
      start: new Date(2567, 8, 2),
      end: nowDate < endFakeDate ? new Date(2567, 8, 15) : new Date(2567, 8, 20)
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
      start: new Date(2567, 9, 9),
      end: new Date(2567, 9, 9)
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: new Date(2567, 9, 19),
      end: new Date(2567, 9, 19)
    },
    title: "สัมภาษณ์รอบกรุงเทพฯ และปริมณฑล"
  },
  {
    duration: {
      start: new Date(2567, 9, 19),
      end: new Date(2567, 9, 19)
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
      start: new Date(2568, 0, 2),
      end: new Date(2568, 0, 5)
    },
    title: `ค่ายลานเกียร์ครั้งที่ ${process.env.REACT_APP_CAMP_YEAR}`
  }
]

export default timelineConstant
