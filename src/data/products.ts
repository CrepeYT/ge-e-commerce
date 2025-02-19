import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'น้ำตาลตาลผง',
    category: 'food',
    basePrice: 35,
    description: 'น้ำตาลตาลผงบริสุทธิ์ 100% จากต้นตาลโตนดธรรมชาติ หวานละมุน กลิ่นหอม',
    imageUrl: 'https://www.matichon.co.th/wp-content/uploads/2023/11/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%B2%E0%B8%A5-%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A-1.jpg',
    stock: 150,
    isBestSeller: true,
    packagingSizes: [
      { size: '100g', price: 35 },
      { size: '250g', price: 80 },
      { size: '500g', price: 150 },
      { size: '1kg', price: 280 }
    ]
  },
  {
    id: '2',
    name: 'น้ำผึ้งดอกตาล',
    category: 'food',
    basePrice: 120,
    description: 'น้ำผึ้งดอกตาลแท้ 100% เก็บจากดอกตาลธรรมชาติ รสชาติหวานละมุน',
    imageUrl: 'https://cdn.gencraft.com/prod/user/ff6fc534-65e5-4565-b94c-9b38f29a50a2/98f2dcc4-6e06-402d-9e5e-e671f3263708/image/image1_0.jpg?Expires=1740059599&Signature=Y70sb4i2FgTOnCT9oX5RZYbNJJMM-Akl6JUEdTKIiThBDzMlUoWN0d50m0wMJzvvkOIxudZpx6eT2uSWDxN-p7Qi6nlq23UYguHT4JsfbAunQeYTzmx2egIXw6HEMZ~~tNKr93aJFXJU7JXWMUt-t3te9olc3vocSTE1x~FcHRGqF29qDVQSJPNgFN13p4U2I-Q-it9SE-ZY~OZV~VQpbTZfhFsP-wUbaIXWCP8NRTBUFGsaGEHiKj~cN0eZQ5IY2mJMzRTKssytqmnDS16KzOFHej~ENyQL73XFkP-sjAwg5D9oJva3WHiPluIfyIp~95xi5UXSjfghzcze0lj11g__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    stock: 80,
    isNew: true,
    packagingSizes: [
      { size: '250g', price: 120 },
      { size: '500g', price: 230 },
      { size: '1kg', price: 450 }
    ]
  },
  {
    id: '3',
    name: 'ตาลอบแห้ง',
    category: 'food',
    basePrice: 45,
    description: 'ลูกตาลอบแห้ง หวานธรรมชาติ ไม่เติมน้ำตาล อุดมด้วยวิตามินและแร่ธาตุ',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aAqDUfyXJyRJWdO8a51_aqbL4OiYsyoWMg&s',
    stock: 100,
    packagingSizes: [
      { size: '100g', price: 45 },
      { size: '250g', price: 100 },
      { size: '500g', price: 190 }
    ]
  },
  {
    id: '4',
    name: 'กระเป๋าสานจากใบตาล',
    category: 'crafts',
    basePrice: 390,
    description: 'กระเป๋าสานจากใบตาลแท้ ทำด้วยมือ ดีไซน์ทันสมัย ทนทาน',
    imageUrl: 'https://archive-api.sacit.or.th/images/handicraft/sacict-handicraft-0743-002655.jpg',
    stock: 25,
    isNew: true
  },
  {
    id: '5',
    name: 'หมวกสานจากใบตาล',
    category: 'crafts',
    basePrice: 290,
    description: 'หมวกสานจากใบตาล ระบายอากาศดี น้ำหนักเบา เหมาะกับทุกโอกาส',
    imageUrl: 'https://down-th.img.susercontent.com/file/th-11134207-23020-7yz2npaw6snvb5',
    stock: 45,
    isBestSeller: true
  },
    {
    id: '6',
    name: 'น้ำช่อดอกตาล',
    category: 'food',
    basePrice: 35,
    description: 'น้ำตาลบริสุทธิ์ 100% จากต้นตาลโตนดธรรมชาติ หวานละมุน กลิ่นหอม',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmc4MQOPzVRNWxWEGoxeE2uT6IdUvOPWlqMw&s',
    stock: 150,
    isBestSeller: true,
    packagingSizes: [
      { size: '100g', price: 35 },
      { size: '250g', price: 80 },
      { size: '500g', price: 150 },
      { size: '1kg', price: 280 }
    ]
  },
];
