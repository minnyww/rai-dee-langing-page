import {
  CreditCard,
  Headphones,
  PartyPopper,
  ShoppingBag,
  UtensilsCrossed,
  Wand2,
  type LucideIcon,
} from "lucide-react"

export interface RaiDeeApp {
  id: string
  word: string
  name: string
  tagline: string
  description: string
  bullets: string[]
  url?: string
  urlLabel?: string
  status: "live" | "soon"
  color: string
  icon: LucideIcon
  soonLine?: string
}

export const liveApps: RaiDeeApp[] = [
  {
    id: "gin",
    word: "กิน",
    name: "กินไรดี",
    tagline: "ไม่รู้จะกินอะไร ให้ดีลตัดสินใจแทน",
    description:
      "รวมโค้ดส่วนลดและดีลร้อนวันนี้จาก ShopeeFood และ LINE MAN ไว้ในหน้าเดียว เห็นราคาก่อน–หลังลด พร้อมลิงก์กดสั่งต่อไปยังแพลตฟอร์มได้ทันที",
    bullets: [
      "ดีลรวมจาก ShopeeFood และ LINE MAN ในหน้าเดียว",
      "โค้ดส่วนลดแพลตฟอร์ม สรุปให้พร้อมใช้ ไม่ต้องค้นเอง",
      "กดสั่งต่อไปยังร้านได้เลย ทันมื้อพอดี",
    ],
    url: "https://gin.rai-dee.com/",
    urlLabel: "gin.rai-dee.com",
    status: "live",
    color: "#f04e23",
    icon: UtensilsCrossed,
  },
  {
    id: "bat",
    word: "บัตร",
    name: "บัตรไรดี",
    tagline: "จ่ายทีไร เลือกบัตรที่คุ้มที่สุดก่อนเสมอ",
    description:
      "เปรียบเทียบโปรโมชั่นบัตรเครดิตทุกใบในที่เดียว เช็คก่อนจ่ายทุกครั้งว่าร้านนี้ใช้บัตรไหนได้ส่วนลดเพิ่ม ไม่พลาดสิทธิ์ที่ควรได้",
    bullets: [
      "รวมโปรบัตรเครดิต แยกตามร้านและหมวดสินค้า",
      "เทียบส่วนลดแบบเห็นตัวเลขผลต่างชัดๆ",
      "เปิดในเบราว์เซอร์ได้เลย ไม่ต้องติดตั้งแอป",
    ],
    url: "https://card.rai-dee.com/",
    urlLabel: "card.rai-dee.com",
    status: "live",
    color: "#2d5bff",
    icon: CreditCard,
  },
  {
    id: "pleng",
    word: "เพลง",
    name: "เพลงไรดี",
    tagline: "ไม่รู้จะฟังอะไรดี ให้คนในห้องช่วยเลือกให้",
    description:
      "ห้องฟังสดจาก Spotify เห็นว่านาทีนี้ใครฟังเพลงอะไรอยู่ มีใครทั่วโลกฟังเพลงเดียวกับเรา และให้คนในห้องช่วยเลือกเพลงแทน ไม่ต้องคิดเองอีก",
    bullets: [
      "ห้องสดแยกตามเมือง เห็นคนฟังเพลงเดียวกันแบบเดี๋ยวนี้",
      "สุ่มเพลงให้หน่อย เลือกตามอารมณ์ ชิลล์ วิ่ง หรือทำงาน",
      "แนะนำเพลงให้ห้อง แล้วดูว่าใครจะเลือกเพลงมาให้เรา",
    ],
    url: "https://pleng.rai-dee.com/",
    urlLabel: "pleng.rai-dee.com",
    status: "live",
    color: "#1db954",
    icon: Headphones,
  },
]

export const soonApps: RaiDeeApp[] = [
  {
    id: "tam",
    word: "ทำ",
    name: "ทำไรดี",
    tagline: "",
    description: "",
    bullets: [],
    status: "soon",
    color: "#7c4dff",
    icon: PartyPopper,
    soonLine: "วันหยุดหรือวันว่าง ไม่ต้องนั่งคิดนาน ขอไอเดียกิจกรรมได้ทันที",
  },
  {
    id: "zue",
    word: "ซื้อ",
    name: "ซื้อไรดี",
    tagline: "",
    description: "",
    bullets: [],
    status: "soon",
    color: "#00a88e",
    icon: ShoppingBag,
    soonLine: "ของใช้ประจำบ้านรายการเดิม บอกว่าควรซื้อจากไหนถูกและคุ้มที่สุด",
  },
  {
    id: "chai",
    word: "ใช้",
    name: "ใช้ไรดี",
    tagline: "",
    description: "",
    bullets: [],
    status: "soon",
    color: "#e6007e",
    icon: Wand2,
    soonLine: "เครื่องมือและบริการมากมาย เลือกให้เหมาะกับงานที่ทำ ไม่ต้องเปรียบเอง",
  },
]

export const heroWords: { word: string; color: string }[] = [
  { word: "กิน", color: "#f04e23" },
  { word: "เพลง", color: "#1db954" },
  { word: "ใช้", color: "#e6007e" },
  { word: "ซื้อ", color: "#00a88e" },
  { word: "ทำ", color: "#7c4dff" },
]
