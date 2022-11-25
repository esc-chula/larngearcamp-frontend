import { Link } from "react-router-dom"
import React from "react"
import StepCardModel from "../models/stepCard.model"

const stepCardConstant: StepCardModel = {
  1: {
    incomplete: {
      true: {
        title: "สมัครเข้าค่ายลานเกียร์",
        contents:
          "ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ 22 นะ คลิกสมัครเข้าค่าย เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!"
      }
    },
    inProgress: {
      true: {
        title: "กำลังเขียนใบสมัครเข้าค่ายลานเกียร์",
        contents:
          "ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ 22 นะ คลิกสมัครเข้าค่าย เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!"
      }
    },
    complete: {
      true: {
        title: "ลงทะเบียนเสร็จเรียบร้อย",
        contents:
          "พี่ ๆ ได้รับเอกสารการสมัครของน้อง ๆ แล้ว ขอขอบคุณน้อง ๆ ที่ให้ความสนใจในค่ายลานเกียร์ของเรา พี่ ๆ จะรีบดำเนินการตรวจเอกสารให้เร็วที่สุด !!"
      }
    }
  },
  2: {
    incomplete: {
      true: {
        title: "รอการตรวจสอบเอกสาร",
        contents:
          "ขณะนี้อยู่ในขั้นตอนการรอตรวจสอบเอกสารที่น้อง ๆ ได้แนบเข้ามา ขอให้น้อง ๆ เข้ามาเช็คสถานะของเอกสารที่เว็บนี้เป็นประจำเผื่อในกรณีที่เอกสารที่น้องแนบมาไม่ผ่านเกณฑ์"
      }
    },
    inProgress: {
      true: {
        title: "รอการตรวจสอบเอกสาร",
        contents:
          "ขณะนี้อยู่ในขั้นตอนการรอตรวจสอบเอกสารที่น้อง ๆ ได้แนบเข้ามา ขอให้น้อง ๆ เข้ามาเช็คสถานะของเอกสารที่เว็บนี้เป็นประจำเผื่อในกรณีที่เอกสารที่น้องแนบมาไม่ผ่านเกณฑ์"
      },
      false: {
        title: "เอกสารไม่ผ่านตามข้อกำหนด",
        contents: (
          <>
            พี่ ๆ ได้แจ้งรายละเอียดที่ต้องแก้ไขไว้ที่หน้าแก้ไขเอกสารแล้ว ขอให้น้องแก้ไขเอกสารการสมัครและยืนยันการสมัครอีกครั้ง
            <span style={{ fontWeight: 500, color: "#941014" }}>ภายในวันที่ 14 ตุลาคม 2565 เวลา 23:59 น.</span>
          </>
        ),
        primaryButton: {
          label: "แก้ไขเอกสาร",
          opensDialog: false,
          path: "/application/step/5",
          isExternalPath: false
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
        contents: "เอกสารของน้องได้รับการตรวจสอบเรียบร้อยแล้ว รอติดตามรายชื่อผู้มีสิทธิ์สัมภาษณ์ในวันที่ 23 ตุลาคม 2565 ได้เลย !!"
      },
      false : {
        title: "เอกสารไม่ผ่านตามข้อกำหนด",
        contents: "ขอแสดงความเสียใจด้วยนะครับ เอกสารของน้องไม่ผ่านตามข้อกำหนด แต่ไม่ต้องเสียใจไปนะ !! พวกพี่ยินดีให้คำปรึกษาได้ ทุก ๆ เรื่องเลย โดยน้องสามารถทักเข้ามาได้ที่เพจเฟสบุค LarnGear Camp ได้เสมอเลยนะ ขอบคุณที่ให้ความสนใจในค่ายลานเกียร์ครับ :)"
      }
    }
  },
  3: {
    incomplete: {
      true: {
        title: "ตรวจสอบสิทธิ์สัมภาษณ์",
        contents:
          "การสมัครเสร็จสิ้น !! ขอขอบคุณน้อง ๆ ที่ให้ความสนใจในค่ายลานเกียร์ของเรา ตั้งตารอติดตามรายชื่อผู้มีสิทธิ์สัมภาษณ์ในวันที่ 23 ตุลาคม 2565 ได้เลย !!"
      }
    },
    inProgress: {
      true: {
        title: "ตรวจสอบสิทธิ์สัมภาษณ์",
        contents:
          "การสมัครเสร็จสิ้น !! ขอขอบคุณน้อง ๆ ที่ให้ความสนใจในค่ายลานเกียร์ของเรา ตั้งตารอติดตามรายชื่อผู้มีสิทธิ์สัมภาษณ์ในวันที่ 23 ตุลาคม 2565 ได้เลย !!"
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
          "ขอแสดงความยินดี !! น้องเป็นหนึ่งในผู้มีสิทธิ์สัมภาษณ์ เตรียมตัวได้พบปะพูดคุยกับพี่ ๆ ผู้สัมภาษณ์สุดน่ารักและใจดีในวันที่ 30 ตุลาคม 2565 ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย สำหรับน้อง ๆ กรุงเทพฯ และปริมณฑล หรือ สัมภาษณ์ผ่านทางซูมสำหรับน้อง ๆ ต่างจังหวัด ได้เลย !!"
      },
      false: {
        title: (
          <>
            ตรวจสอบสิทธิ์สัมภาษณ์ <span style={{ color: "#941014" }}>ไม่ผ่าน</span>
          </>
        ),
        contents:
          "ขอแสดงความเสียใจด้วยนะครับ น้องไม่ผ่านการคัดเลือก แต่ไม่ต้องเสียใจไปนะ !! พวกพี่ยินดีให้คำปรึกษาได้ ทุก ๆ เรื่องเลย โดยน้องสามารถทักเข้ามาได้ที่เพจเฟสบุค LarnGear Camp ได้เสมอเลยนะ ขอบคุณที่ให้ความสนใจในค่ายลานเกียร์ครับ :)"
      }
    }
  },
  4: {
    incomplete: {
      true: {
        title: "รอบสัมภาษณ์",
        contents:
          "ในขั้นตอนนี้ น้อง ๆ จะต้องไปพบกับพวกเราที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เพื่อเข้าร่วมการสัมภาษณ์ แต่ไม่ต้องกังวลไปเพราะที่นี่พี่ ๆ ใจดีมาก ไม่กัดแน่นอน!"
      }
    },
    inProgress: {
      true: {
        title: "รอบสัมภาษณ์",
        contents: (
          <>
            การสัมภาษณ์จะเป็นในรูปแบบออนไลน์ โดยขอให้กดเข้าห้อง ZOOM ที่ปุ่มด้านล่างก่อนเวลาอย่างน้อย 10 นาทีนะครับ{" "}
            {/* <div style={{ marginTop: "0.75rem" }}>
              <Link to="/assets/file/virtualbg.png" className="no-underline" target="_blank" rel="noopener noreferrer" style={{ color: "#941014" }}>
                ดาวน์โหลดรูป Virtual Background ที่ใช้ในการสัมภาษณ์
              </Link>
            </div> */}
            <div style={{ marginTop: "0.75rem" }}>
              <a href="https://www.facebook.com/LARNGEARCAMP/posts/pfbid02Vhwr6ocq8a9tQCgEmeBAweejkbaWrkaCJvpv3jNwaUtsjdFT7Yx7sfc5QXo9oMcyl" className="no-underline" target="_blank" rel="noopener noreferrer" style={{ color: "#941014" }}>
                Checklist สำหรับการเตรียมตัวสัมภาษณ์
              </a>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <a
                className="no-underline"
                href="https://drive.google.com/drive/folders/1ep5HLhhtOoQZmeYC_72k-N5_R8uZ0OV7?fbclid=IwAR2D54svAORwa_eIZkqsqplJcYacucO4kBK6Pe40a6f5BpDBh7bNTIClkOE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#941014" }}>
                ศึกษาวิธีการใช้งานโปรแกรม ZOOM
              </a>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <div>นอกจากการเข้าทางปุ่มแล้ว ยังสามารถเข้า ZOOM ได้โดยการกรอก</div>
              <div style={{ fontWeight: 400 }}>Meeting ID: 740 994 8814</div>
              <div style={{ fontWeight: 400 }}>Password: 311510</div>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <div>
                หากมีปัญหาในการเข้าซูมหรือการสัมภาษณ์ สามารถโทรแจ้ง{" "}
                <div>
                  พี่ต้นกล้า:{" "}
                  <a className="no-underline" href="tel:+6693-156-9544" style={{ color: "#941014" }}>
                    093-156-9544
                  </a>
                </div>
              </div>
            </div>
          </>
        ),
        primaryButton: {
          label: "เข้าสู่ห้องสัมภาษณ์ (ZOOM)",
          opensDialog: false,
          path: "https://chula.zoom.us/j/7409948814?pwd=eE03cGc5YlRpWElCM3BNWWUwakhNZz09",
          isExternalPath: true
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
        contents: (
          <>
            ขอแสดงความยินดี !! น้องเป็นหนึ่งในผู้มีสิทธิ์เข้าร่วมค่ายลานเกียร์ ครั้งที่ 22 แต่ใด ๆ ก็ตาม อย่าลืมชำระค่าสนับสนุนกิจกรรมเป็นจำนวน 700 บาท ภายในวันที่ 25 พฤศจิกายน 2565 เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยหล่ะ !!
            <div style={{ marginTop: "0.75rem" }}>
              (หมายเหตุ หากน้องมีความประสงค์จะขอสละสิทธิ์ สามารถขอสละสิทธิ์ได้ โดยทำการแจ้งชื่อ นามสกุลและรหัส LG ผ่านทางเฟสบุ๊คเพจ LarnGear Camp)
            </div>
          </>
        )
      },
      false: {
        title: (
          <>
            รอบสัมภาษณ์ <span style={{ color: "#941014" }}>ไม่ผ่าน</span>
          </>
        ),
        contents:
          "ขอแสดงความเสียใจด้วยนะครับ น้องไม่ผ่านการคัดเลือก แต่ไม่ต้องเสียใจไปนะ !! พวกพี่ยินดีให้คำปรึกษาได้ ทุก ๆ เรื่องเลย โดยน้องสามารถทักเข้ามาได้ที่เพจเฟสบุค LarnGear Camp ได้เสมอเลยนะ ขอบคุณที่ให้ความสนใจในค่ายลานเกียร์ครับ :)"
      }
    }
  },
  5: {
    incomplete: {
      true: {
        title: "ชำระค่าใช้จ่าย",
        contents:
          "อย่าลืมชำระค่าสนับสนุนกิจกรรมเป็นจำนวน 700 บาท ก่อนวันที่ 25 พฤศจิกายน 2565 เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยล่ะ !!"
      }
    },
    inProgress: {
      true: {
        title: "ชำระค่าใช้จ่าย",
        contents: (
          <>
            ในขั้นตอนนี้ขอให้น้อง ๆ ชำระค่าสนับสนุนกิจกรรมเป็นจำนวน 700 บาท
            <div style={{ marginTop: "0.75rem" }}>
              อย่าลืมชำระเงิน<span style={{ fontWeight: 500, color: "#941014" }}>ก่อนวันที่ 25 พฤศจิกายน</span> เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยล่ะ !!
            </div>
          </>
        ),
        primaryButton: {
          label: "ชำระค่าใช้จ่าย",
          opensDialog: true,
          dialogType: "payment"
        },
        secondaryButton: {
          label: "เลือกไซส์เสื้อ",
          opensDialog: true,
          dialogType: "shirtSize"
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
        contents: (
          <>
            อย่าลืมกรอกฟอร์มยืนยันการฉีดวัคซีน
            <span style={{ fontWeight: 500, color: "#941014" }}>ก่อนวันที่ 22 ธันวาคม 2565</span> เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยล่ะ !!
          </>
        )
      },
      false: {
        title: "สละสิทธ์เข้าค่าย",
        contents: (
          <>
            ขอแสดงความเสียใจ น้องได้ทำการสละสิทธิ์การเข้าร่วมค่ายลานเกียร์ ครั้งที่ 22 พี่ ๆ ขอขอบคุณน้อง ๆ ที่ให้ความสนใจในค่ายลานเกียร์ของเรา ขอให้น้องโชคดีครับ{" "}
            <div style={{ marginTop: "0.75rem" }}>
              (หมายเหตุ หากน้องเกิดปัญหาในการยืนยันสิทธิ์หรือไม่ได้มีเจนตาที่จะสละสิทธิ์ ขอให้น้องติดต่อพี่ ๆ ผ่านทางเฟสบุ๊คเพจ LarnGear Camp โดยเร็วที่สุด)
            </div>
          </>
        )
      }
    }
  },
  6: {
    incomplete: {
      true: {
        title: "ได้เวลาเข้าค่าย !",
        contents: "วันค่ายจะจัดขึ้นในวันที่ 5 - 8 มกราคม 2566 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง"
      }
    },
    inProgress: {
      true: {
        title: "ได้เวลาเข้าค่าย !",
        contents: (
          <>
            ขอแสดงความยินดีด้วย !! น้องเป็นหนึ่งในผู้ที่มีสิทธิ์เข้าร่วมค่ายลานเกียร์ครั้งที่ 22 อย่างเป็นทางการแล้ว โดยวันค่ายจะจัดขึ้นในวันที่ 5 - 8 มกราคม 2566 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง 
            {/* <div style={{ marginTop: "0.75rem" }}>
              หลังจากนี้หากน้อง ๆ ยังไม่ได้กรอกฟอร์มยืนยันการฉีควัคซีนอย่างลืมกรอกกันด้วยหล่ะ และหากน้อง ๆ มีข้อสงสัยใด ๆ สามารถทักมาสอบถามได้ผ่านทางเฟสบุ๊คเพจ LarnGear Camp ตลอดเลยนะครับ ไว้เจอกันที่ลานเกียร์ค้าบบบบ :)
            </div> */}
            <div style={{ marginTop: "0.75rem" }}>
              สำหรับน้อง ๆ ที่ต้องการขอเอกสารเพื่อขอลาเรียนที่โรงเรียน ให้ดาวน์โหลดเอกสารด้านล่างได้เลย
              <ul>
                <li>
                  <Link
                    to="/assets/file/ใบขออนุเคราะห์เวลาเรียน ค่ายลานเกียร์ครั้งที่ 22.pdf"
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#941014" }}>
                    ใบขออนุเคราะห์เวลาเรียน ค่ายลานเกียร์ครั้งที่ 22.pdf
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ),
        // primaryButton: {
        //   label: "ตรวจสอบบ้านของตัวเอง",
        //   opensDialog: false,
        //   path: "/",
        //   isExternalPath: true
        // },
        primaryButton: {
          label: "แผนที่การเดินทาง",
          opensDialog: false,
          path: "https://goo.gl/maps/UTZFQZgm2PVaeKYT9",
          isExternalPath: true
        },
        // secondaryButton: {
        //   label: "ฟอร์มยืนยันการฉีดวัคซีน",
        //   opensDialog: false,
        //   path: "https://forms.gle/4tohXoUAPvbQDcNX7",
        //   isExternalPath: true
        // }
      }
    },
    complete: {
      true: {
        title: "ได้เวลาเข้าค่าย !",
        contents:
          "ขอแสดงความยินดีด้วย !! น้องเป็นหนึ่งในผู้ที่มีสิทธิ์เข้าร่วมค่ายลานเกียร์ครั้งที่ 22 อย่างเป็นทางการแล้ว โดยวันค่ายจะจัดขึ้นในวันที่ 5 - 8 มกราคม 2566 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง หลังจากนี้หากน้อง ๆ ยังไม่ได้กรอกฟอร์มยืนยันการฉีควัคซีนอย่างลืมกรอกกันด้วยล่ะ และหากน้อง ๆ มีข้อสงสัยใด ๆ สามารถทักมาสอบถามได้ผ่านทางเฟสบุ๊คเพจ LarnGear Camp ตลอดเลยนะครับ ไว้เจอกันที่ลานเกียร์ค้าบบบบ :)"
      }
    }
  }
}

export default stepCardConstant
