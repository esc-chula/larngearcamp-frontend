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
      start: new Date(2563, 9, 19),
      end: new Date(2563, 10, 23)
    },
    title: "รับสมัคร"
  },
  {
    duration: {
      start: new Date(2563, 10, 24),
      end: new Date(2563, 10, 24)
    },
    title: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์"
  },
  {
    duration: {
      start: new Date(2563, 10, 31),
      end: new Date(2563, 10, 31)
    },
    title: "สัมภาษณ์รอบกรุงเทพ"
  },
  {
    duration: {
      start: new Date(2563, 11, 2),
      end: new Date(2563, 11, 8)
    },
    title: "สัมภาษณ์รอบต่างจังหวัด"
  },
  {
    duration: {
      start: new Date(2563, 11, 14),
      end: new Date(2565, 11, 14)
    },
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย"
  },
  {
    duration: {
      start: new Date(2565, 12, 15),
      end: new Date(2565, 12, 19)
    },
    title: "ยืนยันสิทธิ์การเข้าร่วมค่าย"
  }
]

export default timelineConstant
