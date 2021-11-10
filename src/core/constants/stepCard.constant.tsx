import StepCardModel from "../models/stepCard.model"
import React from "react"

const stepCardConstant: StepCardModel = {
  1: {
    incomplete: {
      true: {
        title: "สมัครเข้าค่ายลานเกียร์",
        contents:
          "ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ 21 นะ คลิกสมัครเข้าค่าย เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!"
      }
    },
    inProgress: {
      true: {
        title: "กำลังเขียนใบสมัครเข้าค่ายลานเกียร์",
        contents:
          "ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ 21 นะ คลิกสมัครเข้าค่าย เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!"
      }
    },
    complete: {
      true: {
        title: "ลงทะเบียนเสร็จเรียบร้อย",
        contents: "พวกเราได้รับเอกสารการสมัครของพวกคุณแล้ว ขอบคุณที่ให้ความสนใจในค่ายของเรา เราจะรีบดำเนินการตรวจเอกสารให้เร็วที่สุด!"
      }
    }
  },
  2: {
    incomplete: {
      true: {
        title: "รอการตรวจสอบเอกสาร",
        contents:
          "ขณะนี้อยู่ในขั้นตอนการรอตรวจสอบเอกสารที่น้อง ๆ ได้แนบเข้ามาอยู่ ขอให้น้องเข้ามาเช็คสถานะของเอกสารที่เว็บนี้เป็นประจำเผื่อในกรณีที่เอกสารที่น้องแนบมาไม่ผ่านเกณฑ์"
      }
    },
    inProgress: {
      true: {
        title: "รอการตรวจสอบเอกสาร",
        contents:
          "ขณะนี้อยู่ในขั้นตอนการรอตรวจสอบเอกสารที่น้อง ๆ ได้แนบเข้ามาอยู่ ขอให้น้องเข้ามาเช็คสถานะของเอกสารที่เว็บนี้เป็นประจำเผื่อในกรณีที่เอกสารที่น้องแนบมาไม่ผ่านเกณฑ์"
      },
      false: {
        title: "เอกสารที่แนบมา ไม่ผ่านข้อกำหนด",
        contents: (
          <>
            เอกสารดังต่อไปนี้ไม่ผ่านตามข้อกำหนด
            <ol>
              <li>รูปถ่ายหน้าตรง</li>
              <li>หนังสือรับรองจากผู้ปกครอง</li>
            </ol>
            ขอให้น้องแก้ไขเอกสารการสมัครและยืนยันการสมัครอีกครั้ง
            <span style={{ fontWeight: 500, color: "#941014" }}>ภายใน dd/mm/yyyy เวลา 23:59 น.</span>
          </>
        ),
        primaryButton: {
          label: "แก้ไขเอกสาร",
          opensDialog: false,
          path: "/application/step/5"
        }
      }
    },
    complete: {
      true: {
        title: (
          <>
            เอกสารที่แนบมา <span style={{ color: "#39B774" }}>ถูกต้อง</span>
          </>
        ),
        contents:
          "ขณะนี้อยู่ในขั้นตอนการรอตรวจสอบเอกสารที่น้อง ๆ ได้แนบเข้ามาอยู่ ขอให้น้องเข้ามาเช็คสถานะของเอกสารที่เว็บนี้เป็นประจำเผื่อในกรณีที่เอกสารที่น้องแนบมาไม่ผ่านเกณฑ์"
      }
    }
  },
  3: {
    incomplete: {
      true: {
        title: "ตรวจสอบสิทธิ์สัมภาษณ์",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    },
    inProgress: {
      true: {
        title: "ตรวจสอบสิทธิ์สัมภาษณ์",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    },
    complete: {
      true: {
        title: (
          <>
            ตรวจสอบสิทธิ์สัมภาษณ์ <span style={{ color: "#39B774" }}>ผ่าน</span>
          </>
        ),
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      },
      false: {
        title: (
          <>
            ตรวจสอบสิทธิ์สัมภาษณ์ <span style={{ color: "#941014" }}>ไม่ผ่าน</span>
          </>
        ),
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    }
  },
  4: {
    incomplete: {
      true: {
        title: "รอบสัมภาษณ์",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    },
    inProgress: {
      true: {
        title: "รอบสัมภาษณ์",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!",
        primaryButton: {
          label: "ตรวจสอบคิวสัมภาษณ์ทั้งหมด",
          opensDialog: false,
          path: "/"
        },
        secondaryButton: {
          label: "25/10/2564 เวลา 13:00",
          opensDialog: false
        }
      }
    },
    complete: {
      true: {
        title: (
          <>
            รอบสัมภาษณ์ <span style={{ color: "#39B774" }}>ผ่าน</span>
          </>
        ),
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      },
      false: {
        title: (
          <>
            รอบสัมภาษณ์ <span style={{ color: "#941014" }}>ไม่ผ่าน</span>
          </>
        ),
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    }
  },
  5: {
    incomplete: {
      true: {
        title: "ชำระค่าใช้จ่าย",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    },
    inProgress: {
      true: {
        title: "ชำระค่าใช้จ่าย",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!",
        primaryButton: {
          label: "ชำระค่าใช้จ่าย",
          opensDialog: true
        },
        secondaryButton: {
          label: "เลือกไซส์เสื้อ",
          opensDialog: true
        }
      }
    },
    complete: {
      true: {
        title: (
          <>
            ชำระค่าใช้จ่าย <span style={{ color: "#39B774" }}>เรียบร้อย</span>
          </>
        ),
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    }
  },
  6: {
    incomplete: {
      true: {
        title: <>ได้เวลาเข้าค่าย!</>,
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    },
    inProgress: {
      true: {
        title: <>ได้เวลาเข้าค่าย!</>,
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!",
        primaryButton: {
          label: "ตรวจสอบบ้านของตัวเอง",
          opensDialog: false,
          path: "/"
        },
        secondaryButton: {
          label: "แผนที่การเดินทาง",
          opensDialog: false,
          path: "/"
        }
      }
    },
    complete: {
      true: {
        title: <>ได้เวลาเข้าค่าย!</>,
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสอบสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    }
  }
}

export default stepCardConstant
