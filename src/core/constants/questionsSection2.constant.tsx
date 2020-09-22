import QuestionModel from "../models/question.model"

const questionsSection2Constant: Array<QuestionModel> = [
  {
    question:
      "ให้น้องเล่าเรื่องที่ทำให้น้องมีความสุขมากที่สุดมา 1 เรื่องทำไมถึงเป็นเช่นนั้นและความสุขนั้นส่งผลดีต่อชีวิตน้องในทางใดบ้าง อย่างไร (150 - 250 คำ)",
    type: "multiline",
    wordCount: {
      min: 150,
      max: 250
    }
  },
  {
    question: "จากรูปที่กำหนดให้ น้องเห็นรูปแล้วนึกถึงอะไร เพราะอะไร",
    imagePath: require("../../assets/images/sunflower.jpg"),
    caption: "ที่มา : https://wallpapersite.com/creative-graphics/astronaut-sunflowers-4k-15924.html",
    type: "multiline"
  },
  {
    question: "ให้น้องเลือกสีที่บรรยายตัวของน้องได้ดีที่สุด เพราะอะไรถึงเป็นสีนั้น",
    type: "multiline"
  },
  {
    question: "ให้น้องเล่าเรื่องที่มีคนทำให้น้องไม่พอใจและให้น้องอธิบายเหตุผลของคู่กรณี ว่าทำไมเขาถึงทำอย่างนั้น (100 - 200 คำ)",
    type: "multiline",
    wordCount: {
      min: 100,
      max: 200
    }
  },
  {
    question: "หากไฟไหม้บ้าน แล้วน้องสามารถหยิบของออกมาได้เพียงชิ้นเดียวน้องจะเลือกหยิบอะไร เพราะอะไร",
    type: "multiline"
  },
  {
    question: "ถ้าเพื่อนทะเลาะกันจนทำให้งานหรือกิจกรรมดำเนินต่อไปไม่ได้น้องจะทำอย่างไร เพราะอะไรถึงทำแบบนั้น",
    type: "multiline"
  }
]

export { questionsSection2Constant }
