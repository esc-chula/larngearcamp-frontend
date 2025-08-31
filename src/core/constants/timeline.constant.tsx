export interface TimelineModel {
  title: string
  duration: {
    start: Date
    end: Date
  }
}
// Month is 0-based index
const nowDate = new Date()
const endFakeDate = new Date(2568, 8, 14)
const timelineConstant: Array<TimelineModel> = [
  {
    duration: {
      start: new Date(2568, 8, 1),
      end: nowDate < endFakeDate ? new Date(2568, 8, 14) : new Date(2568, 8, 19)
    },
    title: "รับสมัคร"
  },
  {
    duration: {
      start: new Date(2568, 8, 20),
      end: new Date(2568, 9, 3)
    },
    title: "แก้ไขเอกสารประกอบการสมัคร"
  },
  {
    duration: {
      start: new Date(2568, 9, 8),
      end: new Date(2568, 9, 8)
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: new Date(2568, 9, 18),
      end: new Date(2568, 9, 18)
    },
    title: "สัมภาษณ์เข้าค่ายลานเกียร์"
  },
  {
    duration: {
      start: new Date(2568, 9, 31),
      end: new Date(2568, 9, 31)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย และรายชื่อตัวสำรอง อย่างไม่เป็นทางการ"
  },
  {
    duration: {
      start: new Date(2568, 9, 31),
      end: new Date(2568, 10, 4)
    },
    title: "แจ้งความสะดวกในการเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2568, 10, 5),
      end: new Date(2568, 10, 11)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่ายอย่างเป็นทางการ และยืนยันสิทธิ์การเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2568, 10, 13),
      end: new Date(2568, 10, 18)
    },
    title: "ประกาศรายชื่อตัวสำรอง และยืนยันสิทธิ์การเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2568, 11, 23),
      end: new Date(2568, 11, 26)
    },
    title: `ค่ายลานเกียร์ครั้งที่ ${process.env.REACT_APP_CAMP_YEAR}`
  }
]

export default timelineConstant
