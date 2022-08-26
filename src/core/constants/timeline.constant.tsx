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
      start: new Date(2564, 10, 15),
      end: new Date(2564, 11, 15)
    },
    title: "รับสมัคร"
  },
  {
    duration: {
      start: new Date(2564, 11, 24),
      end: new Date(2564, 11, 24)
    },
    title: "แก้ไขเอกสารประกอบการสมัครวันสุดท้าย"
  },
  {
    duration: {
      start: new Date(2565, 0, 8),
      end: new Date(2565, 0, 8)
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: new Date(2565, 0, 29),
      end: new Date(2565, 0, 29)
    },
    title: "สัมภาษณ์รอบกรุงเทพฯ และปริมณฑล"
  },
  {
    duration: {
      start: new Date(2565, 0, 31),
      end: new Date(2565, 1, 6)
    },
    title: "สัมภาษณ์รอบต่างจังหวัด"
  },
  {
    duration: {
      start: new Date(2565, 1, 14),
      end: new Date(2565, 1, 14)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2565, 1, 14),
      end: new Date(2565, 2, 15)
    },
    title: "ยืนยันสิทธิ์การเข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2565, 5, 2),
      end: new Date(2565, 5, 5)
    },
    title: "ค่ายลานเกียร์ครั้งที่ 22"
  }
]

export default timelineConstant
