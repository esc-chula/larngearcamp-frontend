import { Link } from "react-router-dom"
import React from "react"
import StepCardModel from "../models/stepCard.model"

const absenceFileName = `/assets/file/ใบขออนุเคราะห์เวลาเรียน ค่ายลานเกียร์ครั้งที่ ${process.env.REACT_APP_CAMP_YEAR}.pdf`

const stepCardConstant: StepCardModel = {
  1: {
    incomplete: {
      true: {
        title: "สมัครเข้าค่ายลานเกียร์",
        contents: `ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ ${process.env.REACT_APP_CAMP_YEAR} นะ คลิกสมัครเข้าค่าย เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!`
      }
    },
    inProgress: {
      true: {
        title: "กำลังเขียนใบสมัครเข้าค่ายลานเกียร์",
        contents: `ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ ${process.env.REACT_APP_CAMP_YEAR} นะ คลิกสมัครเข้าค่าย เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!`
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
            <span style={{ fontWeight: 500, color: "#941014" }}>ภายในวันที่ 3 ตุลาคม 2568 เวลา 22:00 น.</span>
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
        contents: "เอกสารของน้องได้รับการตรวจสอบเรียบร้อยแล้ว รอติดตามรายชื่อผู้มีสิทธิ์สัมภาษณ์ในวันที่ 8 ตุลาคม 2568 ได้เลย !!"
      },
      false: {
        title: "เอกสารไม่ผ่านตามข้อกำหนด",
        contents:
          "ขอแสดงความเสียใจด้วยนะครับ เอกสารของน้องไม่ผ่านตามข้อกำหนด แต่ไม่ต้องเสียใจไปนะ !! พวกพี่ยินดีให้คำปรึกษาได้ ทุก ๆ เรื่องเลย โดยน้องสามารถทักเข้ามาได้ที่เพจเฟซบุ๊ก LarnGear Camp ได้เสมอเลยนะ ขอบคุณที่ให้ความสนใจในค่ายลานเกียร์ครับ :)"
      }
    }
  },
  3: {
    incomplete: {
      true: {
        title: "ตรวจสอบสิทธิ์สัมภาษณ์",
        contents:
          "การสมัครเสร็จสิ้น !! ขอขอบคุณน้อง ๆ ที่ให้ความสนใจในค่ายลานเกียร์ของเรา ตั้งตารอติดตามรายชื่อผู้มีสิทธิ์สัมภาษณ์ในวันที่ 8 ตุลาคม 2568 ได้เลย !!"
      }
    },
    inProgress: {
      true: {
        title: "ตรวจสอบสิทธิ์สัมภาษณ์",
        contents:
          "การสมัครเสร็จสิ้น !! ขอขอบคุณน้อง ๆ ที่ให้ความสนใจในค่ายลานเกียร์ของเรา ตั้งตารอติดตามรายชื่อผู้มีสิทธิ์สัมภาษณ์ในวันที่ 8 ตุลาคม 2568 ได้เลย !!"
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
          "ขอแสดงความยินดี !! น้องเป็นหนึ่งในผู้มีสิทธิ์สัมภาษณ์ เตรียมตัวได้พบปะพูดคุยกับพี่ ๆ ผู้สัมภาษณ์สุดน่ารักและใจดีในวันที่ 18 ตุลาคม 2568 ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย สำหรับน้อง ๆ กรุงเทพฯ และปริมณฑล หรือ สัมภาษณ์ผ่านทางซูมสำหรับน้อง ๆ ต่างจังหวัด ได้เลย !!"
      },
      false: {
        title: (
          <>
            ตรวจสอบสิทธิ์สัมภาษณ์ <span style={{ color: "#941014" }}>ไม่ผ่าน</span>
          </>
        ),
        contents:
          "ขอแสดงความเสียใจด้วยนะครับ น้องไม่ผ่านการคัดเลือก แต่ไม่ต้องเสียใจไปนะ !! พวกพี่ยินดีให้คำปรึกษาได้ ทุก ๆ เรื่องเลย โดยน้องสามารถทักเข้ามาได้ที่เพจเฟซบุ๊ก LarnGear Camp ได้เสมอเลยนะ ขอบคุณที่ให้ความสนใจในค่ายลานเกียร์ครับ :)"
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
            การสัมภาษณ์จะเป็นในรูปแบบออนไลน์ โดยขอให้กดเข้าห้อง ZOOM ก่อนเวลาอย่างน้อย <span style={{ fontWeight: 400 }}>10 นาที</span>นะครับ{" "}
            <div style={{ marginTop: "0.75rem" }}>
              <Link
                to="/assets/file/BG-zoom-LG24.jpg"
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#941014" }}>
                ดาวน์โหลดรูป Virtual Background ที่ใช้ในการสัมภาษณ์
              </Link>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <a
                href="https://www.facebook.com/share/p/ZXqd8NQBHzuqx8uS/"
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#941014" }}>
                Checklist สำหรับการเตรียมตัวสัมภาษณ์
              </a>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <a
                className="no-underline"
                href="https://drive.google.com/drive/folders/1J8suhI_8cDvV8aoZKcTNldUTldJGJDWf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#941014" }}>
                ศึกษาวิธีการใช้งานโปรแกรม ZOOM
              </a>
            </div>
            {
              <div style={{ marginTop: "0.75rem" }}>
                <div>นอกจากการเข้าทางปุ่มแล้ว ยังสามารถเข้า ZOOM ได้โดยการกรอก</div>
                <div style={{ fontWeight: 400 }}>Meeting ID: 987 8697 5771</div>
                <div style={{ fontWeight: 400 }}>Password: LG24</div>
              </div>
            }
            {
              <div style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
                <div>
                  หากมีปัญหาในการเข้าซูมหรือการสัมภาษณ์ สามารถโทรแจ้ง{" "}
                  <div>
                    พี่นอท :
                    <a className="no-underline" href="tel:+6695-825-1591" style={{ color: "#941014", paddingLeft: 0.5 }}>
                      095-825-1591
                    </a>
                    <span>(line: north4965)</span>
                  </div>
                  <div>
                    พี่หญิง :
                    <a className="no-underline" href="tel:+6682-713-5555" style={{ color: "#941014", paddingLeft: 0.5 }}>
                      082-713-5555
                    </a>
                    <span>(line: yingkosa)</span>
                  </div>
                </div>
              </div>
            }
          </>
        ),
        primaryButton: {
          label: "เข้าสู่ห้องสัมภาษณ์ (ZOOM)",
          opensDialog: false,
          path: "https://chula.zoom.us/j/94782207804?pwd=C7GMdv4oayv8cmNkDathOhTQON0N5i.1",
          isExternalPath: true
        },
        secondaryButton: {
          label: "เข้าสู่ห้องสัมภาษณ์รอบเก็บตก (ZOOM)",
          opensDialog: false,
          path: "https://chula.zoom.us/j/98786975771?pwd=TpTrucTj2ie2ajRlHwHeiOoSZ3fo52.1",
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
            ขอแสดงความยินดี !! น้องเป็นหนึ่งในผู้มีสิทธิ์เข้าร่วมค่ายลานเกียร์ ครั้งที่ {process.env.REACT_APP_CAMP_YEAR} แต่ใด ๆ ก็ตาม
            อย่าลืมชำระค่าสนับสนุนกิจกรรมเป็นจำนวน 750 บาท <span style={{ fontWeight: 500, color: "#941014" }}>ภายในวันที่ 11 พฤศจิกายน 2568</span>{" "}
            เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยหล่ะ !!
            <div style={{ marginTop: "0.75rem" }}>
              (หมายเหตุ หากน้องมีความประสงค์จะขอสละสิทธิ์ สามารถขอสละสิทธิ์ได้ โดยทำการแจ้งชื่อ นามสกุลและรหัส LG ผ่านทางเฟซบุ๊กเพจ LarnGear Camp)
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
          "ขอแสดงความเสียใจด้วยนะครับ น้องไม่ผ่านการคัดเลือก แต่ไม่ต้องเสียใจไปนะ !! พวกพี่ยินดีให้คำปรึกษาได้ ทุก ๆ เรื่องเลย โดยน้องสามารถทักเข้ามาได้ที่เพจเฟซบุ๊ก LarnGear Camp ได้เสมอเลยนะ ขอบคุณที่ให้ความสนใจในค่ายลานเกียร์ครับ :)"
      }
    }
  },
  5: {
    incomplete: {
      true: {
        title: "ชำระค่าใช้จ่าย",
        contents: "อย่าลืมชำระค่าสนับสนุนกิจกรรมเป็นจำนวน 750 บาท ก่อนวันที่ 11 พฤศจิกายน 2568 เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยล่ะ !!"
      }
    },
    inProgress: {
      true: {
        title: "ชำระค่าใช้จ่าย",
        contents: (
          <>
            ในขั้นตอนนี้ขอให้น้อง ๆ ชำระค่าสนับสนุนกิจกรรมเป็นจำนวน 750 บาท
            <div style={{ marginTop: "0.75rem" }}>
              อย่าลืมชำระเงิน<span style={{ fontWeight: 500, color: "#941014" }}>ก่อนวันที่ 11 พฤศจิกายน 2568</span>{" "}
              เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยล่ะ !!
            </div>
            {/* <div style={{ marginTop: "0.75rem" }}>หากไม่เห็นปุ่มชำระค่าใช้จ่าย ให้เลือกไซส์เสื้อก่อน แล้ว Refresh อีกครั้ง</div> */}
          </>
        ),
        primaryButton: {
          label: "ชำระค่าใช้จ่าย",
          opensDialog: true,
          dialogType: "payment"
        }
        // secondaryButton: {
        //   label: "เลือกไซส์เสื้อ",
        //   opensDialog: true,
        //   dialogType: "shirtSize"
        // }
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
            ขอแสดงความยินดีด้วย !! น้องเป็นหนึ่งในผู้ที่มีสิทธิ์เข้าร่วมค่ายลานเกียร์ครั้งที่ {process.env.REACT_APP_CAMP_YEAR} อย่างเป็นทางการแล้ว
            โดยวันค่ายจะจัดขึ้นในวันที่ 23 - 26 ธันวาคม 2568 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง
            {/* อย่าลืมกรอกฟอร์มยืนยันการฉีดวัคซีน
            <span style={{ fontWeight: 500, color: "#941014" }}>ก่อนวันที่ 22 ธันวาคม 2565</span> เพื่อยืนยันสิทธิ์การเข้าร่วมค่ายด้วยล่ะ !! */}
          </>
        )
      },
      false: {
        title: "สละสิทธ์เข้าค่าย",
        contents: (
          <>
            ขอแสดงความเสียใจ น้องได้ทำการสละสิทธิ์การเข้าร่วมค่ายลานเกียร์ ครั้งที่ {process.env.REACT_APP_CAMP_YEAR} พี่ ๆ ขอขอบคุณน้อง ๆ
            ที่ให้ความสนใจในค่ายลานเกียร์ของเรา ขอให้น้องโชคดีครับ{" "}
            <div style={{ marginTop: "0.75rem" }}>
              (หมายเหตุ หากน้องเกิดปัญหาในการยืนยันสิทธิ์หรือไม่ได้มีเจนตาที่จะสละสิทธิ์ ขอให้น้องติดต่อพี่ ๆ ผ่านทางเฟซบุ๊กเพจ LarnGear Camp
              โดยเร็วที่สุด)
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
        contents: "วันค่ายจะจัดขึ้นในวันที่ 23 - 26 ธันวาคม 2568 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง"
      }
    },
    inProgress: {
      true: {
        title: "ได้เวลาเข้าค่าย !",
        contents: (
          <>
            ขอแสดงความยินดีด้วย !! น้องเป็นหนึ่งในผู้ที่มีสิทธิ์เข้าร่วมค่ายลานเกียร์ครั้งที่ {process.env.REACT_APP_CAMP_YEAR} อย่างเป็นทางการแล้ว
            โดยวันค่ายจะจัดขึ้นในวันที่ 23 - 26 ธันวาคม 2568 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง
            <div style={{ marginTop: "0.75rem" }}>
              หลังจากนี้หากน้อง ๆ มีข้อสงสัยใด ๆ สามารถทักมาสอบถามได้ผ่านทางเฟซบุ๊กเพจ LarnGear Camp ตลอดเลยนะครับ ไว้เจอกันที่ลานเกียร์ฮ๊าฟฟฟฟ :)
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              สำหรับน้อง ๆ ที่ต้องการขอเอกสารเพื่อขอลาเรียนที่โรงเรียน ให้ดาวน์โหลดเอกสารด้านล่างได้เลย
              <ul>
                <li>
                  <Link to={absenceFileName} className="no-underline" target="_blank" rel="noopener noreferrer" style={{ color: "#941014" }}>
                    ใบขออนุเคราะห์เวลาเรียน ค่ายลานเกียร์ครั้งที่ {process.env.REACT_APP_CAMP_YEAR}.pdf
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
        }
        // secondaryButton: {
        //   label: "ฟอร์มยินยอมปฏิบัติตามมาตรการป้องกันโควิด",
        //   opensDialog: false,
        //   path: "https://forms.gle/3RCX8AhD5c6JjDo87",
        //   isExternalPath: true
        // }
      }
    },
    complete: {
      true: {
        title: "ได้เวลาเข้าค่าย !",
        contents: `ขอแสดงความยินดีด้วย !! น้องเป็นหนึ่งในผู้ที่มีสิทธิ์เข้าร่วมค่ายลานเกียร์ครั้งที่ ${process.env.REACT_APP_CAMP_YEAR} อย่างเป็นทางการแล้ว โดยวันค่ายจะจัดขึ้นในวันที่ 23 - 26 ธันวาคม 2568 นี้ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยนั่นเอง หลังจากนี้หากน้อง ๆ มีข้อสงสัยใด ๆ สามารถทักมาสอบถามได้ผ่านทางเฟซบุ๊กเพจ LarnGear Camp ตลอดเลยนะครับ ไว้เจอกันที่ลานเกียร์ค้าบบบบ :)`
      }
    }
  }
}

export default stepCardConstant
