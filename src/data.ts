/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Category, RadioChannel, Staff, Campaign } from "./types";

export const CATEGORIES: Category[] = [
  { id: "all", name: "Tümü", icon: "Utensils" },
  { id: "campaigns", name: "Kampanyalar", icon: "Sparkles" },
  { id: "meals", name: "Yemekler", icon: "Flame" },
  { id: "beers", name: "Biralar", icon: "Beer" },
  { id: "cocktails", name: "Kokteyller", icon: "GlassWater" },
  { id: "wines", name: "Şaraplar", icon: "Wine" },
  { id: "whiskies", name: "Viskiler", icon: "GlassWater" },
  { id: "shots", name: "Shotlar", icon: "Flame" },
  { id: "soft_drinks", name: "Soft İçecekler", icon: "Coffee" },
  { id: "desserts", name: "Tatlılar", icon: "Cake" },
  { id: "spirits", name: "Kadeh Alkoller", icon: "Wine" },
  { id: "teas", name: "Çaylar", icon: "Leaf" },
  { id: "new", name: "Yeni Ürünler", icon: "PlusCircle" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "96e030a5-afad-4c3d-9986-b1f0ab0aa298",
    "name": "ÇAY",
    "description": "",
    "price": 50,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9da3609f-f447-48a3-9c89-1436f2384808.jpeg",
    "category": "soft_drinks",
    "tags": [
      "SICAK İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a0c18e7e-81d0-4cd4-b21d-866625d1f80e",
    "name": "SADE SODA",
    "description": "",
    "price": 120,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/36ecca08-89f1-40ef-abf6-cf6c24e0fd8f.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "846eb9c9-01ba-414b-8f17-abf09c38734c",
    "name": "MEYVELİ SODA",
    "description": "(KARPUZ-ÇİLEK, LİMON, ELMA)",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2a612a83-9e91-4550-9150-031aae4f2f5d.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b09827d2-a8c0-469d-b6c3-f17c2a99b6a4",
    "name": "COCA COLA ZERO",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a603aa22-5fc7-4e78-a4e2-acc14efbdda7.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "441b4ab8-1587-459d-9965-6b45d0cca50c",
    "name": "FANTA",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/fecd7eec-6b0b-4278-919d-c67893f521c2.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a6fbe243-50ea-46ad-a4ed-ca2afd7531f6",
    "name": "SPRITE",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/79cf539d-15ec-4b8c-955b-a8d28b67cb57.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8c69d679-4c6f-42bb-92a5-33c0661506ce",
    "name": "FUSE TEA",
    "description": "(ŞEFTALİ, LİMON, MANGO)",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/67cf1522-4e31-45ed-87c0-4ba20c6322ee.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "822bfa36-aca5-4c84-a0a8-bce14b06923b",
    "name": "CAPPY",
    "description": "(KARIŞIK, VİŞNE, ŞEFTALİ)",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3638e266-dfc6-4d69-b6f7-73ed26f91f91.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d0819f54-60dc-4e90-a98e-dc2fbd67ff2d",
    "name": "TONİK 250 ML",
    "description": "",
    "price": 150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3f5a7bb6-42e2-45d4-9109-15eb29d3ef3b.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "2c7dc3c1-d4a7-40c4-b928-adff87a33ab8",
    "name": "BURN",
    "description": "",
    "price": 150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/bec7dcd9-e7d6-47f4-b573-8c217960828d.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "94fc7f87-b2c3-4836-a1c8-687d7d88c1f3",
    "name": "CHURCHILL",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0ff0ea78-ee79-417e-8cc0-ab5ab9bba185.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "db038b2c-f210-413e-96b5-366da7a8342b",
    "name": "EV YAPIMI PORTAKAL SUYU",
    "description": "",
    "price": 200,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e9bd6604-0150-4dbf-b74a-59473b91a662.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6976dc0f-3cf1-410d-8889-264bf84c20a6",
    "name": "RED BULL ENERGY DRINK",
    "description": "",
    "price": 170,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3ceec3ef-b0ec-41c2-be4f-cf338b17f9bf.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "2d382b3c-0c6d-4ee4-b226-43d41d47bb16",
    "name": "COCA COLA CLASSİC",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b5973371-6194-47e5-9086-acfa375cc716.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b5868352-69e5-4ca6-a0ea-11ac23901efb",
    "name": "RED BULL SUGAR FREE",
    "description": "",
    "price": 180,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/866c64c5-7971-402f-a581-72f4a0d8ead4.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "9ecdaf5d-e7a2-45de-8447-b307f40bf082",
    "name": "SU",
    "description": "",
    "price": 60,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1d622d8e-0424-4bf8-a191-60faa8ccd2dc.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOFT İÇECEKLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "412081be-fbd4-4486-a7db-0775b823433c",
    "name": "CAPPUCCINO",
    "description": "",
    "price": 160,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9ec69ca7-d8ea-4bd3-b268-a92e009dfd60.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fd65e0f8-9f0f-46c5-bb0d-9860b7bc1752",
    "name": "CARAMEL LATTE",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/441b07ce-c3b1-418b-947f-1d1ece77a898.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3b64b823-30f7-4630-a276-dc0f956a788a",
    "name": "LATTE",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7e6bd40c-778a-4336-9b84-36e3436f71e1.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "73c5d11e-5f7e-4b17-a429-144a3c63db46",
    "name": "MOCHA",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b214eac6-5016-4dba-8519-020595213448.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8965e04f-3ec2-42bb-b3d3-7bb6a9fa5db4",
    "name": "TÜRK KAHVESİ DOUBLE",
    "description": "",
    "price": 150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c83e075c-90d6-420b-87cf-5942f8ccb129.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "44ec59ee-49e8-466c-9a7f-4516d6629aef",
    "name": "AMERICANO",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d802e845-b534-4a98-86bc-e04bbf2a6f02.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9c9ef1d1-fc26-4548-9574-4f55105909b5",
    "name": "ESPRESSO DOPIO",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/78867502-592c-4612-b341-855e7d515c0b.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "58da6fa7-f6f5-4af3-9cac-42514c6fcf0e",
    "name": "TÜRK KAHVESİ",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ec9e0b4d-b8c8-4ccf-b0b4-a1610d2e8c92.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0c177fe5-d0b5-4114-97fa-a9e368178054",
    "name": "ESPRESSO",
    "description": "",
    "price": 100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7c7923dc-56e3-4863-8816-06dd788b38fc.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d1cc78d5-bb82-4902-92a5-1539f62cac50",
    "name": "WHITE MOCHA",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1cebaa38-2fbb-4459-b95a-e7c883bf4809.jpg",
    "category": "soft_drinks",
    "tags": [
      "SICAK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "07dc2d63-fe97-4cd7-a9cc-2a9bb67ebb2e",
    "name": "ICE LATTE",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9acf4978-7e7a-4e8c-abe8-ba60333c5d1c.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOĞUK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a4c72687-7bbd-491b-b95d-c83492334027",
    "name": "ICE MOCHA",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d52bed59-8ff7-43e2-96f0-53857ecedbe4.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOĞUK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "028c1bc2-fd50-482e-b2a2-14bf5cbe57af",
    "name": "ICE WHITE MOCHA",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ea244dcc-1197-453a-aa23-5de646b9f44c.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOĞUK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3cca8276-ebf9-4acd-9bcf-7a5cadf1febc",
    "name": "ICE AMERICANO",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ff11e951-68c6-4af8-9395-17309e6ccca6.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOĞUK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "5c6ffee5-9843-407a-8316-4b93725b50c2",
    "name": "ICE CARAMEL LATTE",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a8f3b9ee-c2a4-4955-ae7c-ad505e218caa.jpg",
    "category": "soft_drinks",
    "tags": [
      "SOĞUK KAHVELER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "33a9c771-2ee0-46d6-8db9-4f58c64578a9",
    "name": "VIRGIN MOJITO",
    "description": "",
    "price": 160,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/48d93f28-f185-4af2-9dc1-ab349f0b6d52.jpg",
    "category": "soft_drinks",
    "tags": [
      "ALKOLSÜZ KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "20c86280-0e81-42aa-96f7-15841795bca7",
    "name": "VIRGIN VERRY BERRY",
    "description": "",
    "price": 150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b4450c53-2fa0-429a-82ca-99432a64f7b1.jpeg",
    "category": "soft_drinks",
    "tags": [
      "ALKOLSÜZ KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "25d420ba-d21e-4597-954b-d95caafa77ec",
    "name": "JAGERMEISTER COLD BREW COFFEE SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1b844ef6-4424-4325-9b2c-521bfaa19872.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "af11bd72-41ce-44b2-9d5d-716b3a4af397",
    "name": "SÜT SHOT",
    "description": "",
    "price": 30,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1726b177-2aa2-4f2a-b2ac-3c6303260a66.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "2cf9f235-352b-4557-b176-7f481a338b95",
    "name": "SHANKY'S WHIP BLACK SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4854d0d4-4631-48fa-88fd-43a578373473.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a48c0d38-edb6-4d2a-9f10-f4e9879dd20e",
    "name": "STAMBECCO TIRAMISU LIQUER SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/65d8f050-8f8d-48dc-a6fd-2323f2209238.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7a903ec7-3707-42c7-8f6d-065509d4de8d",
    "name": "VODKA SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e6f1abee-1b72-46e8-a8bb-45614e7eab98.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c0f7d9dd-a95d-42b6-baa3-a1161fc41d94",
    "name": "WHITE RUM SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/bee797a4-7848-420f-b773-13d3db3a7d7e.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "32728e54-1cb3-41e7-b31c-00a0c2871087",
    "name": "JAGERMEISTER MANIFEST SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c41ed829-7e47-4f2e-bf30-5601dacd52ca.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9f177668-df03-4674-87d9-40bec007d036",
    "name": "SPICED RUM SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/fc4bb603-0569-482d-ae64-41392d2bd260.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0f80689b-fbde-4fc7-a8c5-e6e1db68d8d9",
    "name": "GIN SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7a2bda2c-c848-4505-bcc0-10b77ec23ca3.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ffba40ad-7480-4d40-893e-f64bab014cb2",
    "name": "SIERRA TROPICAL SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8b3bfc81-caf9-437d-954e-fc8ed42e9226.jpeg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3825ca31-6ece-4b11-b16c-cddce68ed9ca",
    "name": "SİERRA TEKİLA SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6633c81a-726e-4963-bfac-00fdd72f3934.jpg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "71eea86b-ef3e-4b06-81f4-171cf7a99af9",
    "name": "JAGER SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/81d94155-bf97-4a2d-957d-95963eb1d4d5.jpg",
    "category": "shots",
    "tags": [
      "SHOTS"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "2c585143-01c5-4208-b974-4e4eef175e51",
    "name": "JIM BEAM HONEY SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/23a30c5c-619c-4ca1-9678-5125071a6567.jpeg",
    "category": "shots",
    "tags": [
      "VİSKİ"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b873a8cb-a1e2-408e-ac11-cfd35f15c8d0",
    "name": "BELL'S SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/23e052d3-91e1-4306-b775-5daedd5e88e0.jpeg",
    "category": "shots",
    "tags": [
      "VİSKİ"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7b940900-d372-4624-9592-dfc71103fc27",
    "name": "JIM BEAM WHITE SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/83180cae-51a7-48a1-856b-3ca4f2857880.jpeg",
    "category": "shots",
    "tags": [
      "VİSKİ"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "74933cdf-c04d-4b04-b0ab-abaf6f021b98",
    "name": "JB RARE SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1e9cc426-0d89-4c2e-951c-2902c36886a9.jpeg",
    "category": "shots",
    "tags": [
      "VİSKİ"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a5b0ba9c-11a5-45e0-a9b0-fd93c183eb4e",
    "name": "ABSOLUT VANILYA SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6caabde2-7739-4c91-afd5-0118ac8deaf6.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "46294249-4286-4531-9cc7-a55af8ac0c1a",
    "name": "BOL'S YOGURT SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7fe78bbd-10b4-4f0d-9d65-15ea27a6856c.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1fb04442-6b25-4d34-978a-8dde284f9dd8",
    "name": "LUXARDO SOUR APPLE SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/54a65d42-ea93-4373-b6cf-3a41f0db2b0d.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d686109f-7bb8-4cbf-aeb9-e641980b3ac6",
    "name": "PUSCHKIN ICE MINT SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f29dcf78-df68-418b-8dd1-ca91fa4c8346.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d86a1fe4-fe16-4826-82d9-902092281523",
    "name": "KEGLEVICH PESCA LIQUER SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/bc8db5dc-e9ff-402a-8bd7-68810ce0488d.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1ac643b3-c5e0-4779-a132-0ecc038fcfa5",
    "name": "IRLANDA KREMA LİKÖRÜ SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/39bb1ceb-b873-443a-a729-8a631f7efa5a.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "60a94e96-90dc-4164-9246-e82de30ef8b4",
    "name": "LUXARDO TRIPLE SEC SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8cfde4e3-766f-4f2e-b952-5e322050eafa.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8c6d1ce4-dc80-447b-acec-355ca7860ba3",
    "name": "LUXARDO MARASCHINO SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3296335f-689d-4671-85e1-5b0a19cd1279.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "41373ddd-9bf0-4c0f-b2ad-d513b22f419e",
    "name": "PUSCHKIN WATERMELON SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/48339941-ca9e-42f5-a7c8-9ab72b555f38.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ecce56d8-f264-40d2-95bf-a1673c2cd681",
    "name": "PUSCHKIN RED ORANGE SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/75a90243-4090-43c9-bd57-cde5e39bf219.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "128e14da-1abe-4f75-9eb2-bedcff1edd00",
    "name": "PUSCHKIN BLUEBERRY SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5f73e6fb-a896-49c2-a185-c5ce5cba2b7b.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "8aefce4e-36e2-499b-9f3d-c571c4a8e929",
    "name": "PUSCHKIN PASSIONFRUIT SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c5813d8b-630b-401e-acdf-3e0e0a88d2fc.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "42e14db0-90c5-4131-b343-c1cb52a1db55",
    "name": "PUSCHKIN BLACK BERRIES SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1acd2a88-edea-488f-b80e-1ec5c5406ed1.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "05ef5099-1cec-4c5a-a57c-1eb3e839ee73",
    "name": "SAFARI SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ce43f1a6-7295-4f9f-a876-c2b49cb24aeb.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "60556bb5-b7a8-4d8d-82c9-c01f73350ab6",
    "name": "ABSOLUT CITRON SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/fe8ad181-3e0d-4f6c-a8d1-5fee8636acda.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ccd6db22-a5af-4992-ac12-d0568f80362a",
    "name": "BOTTEGA PISTACCHIO SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a647496f-8a62-4d2a-9158-f178d0d3bb56.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "979df506-9498-490e-8b4c-5010e1f63207",
    "name": "MALIBU SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ba3e0cb1-bde2-47d9-b256-7e6f3c93a749.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8fd603c4-48da-4f62-a352-10d5ff1275a6",
    "name": "PASSOA SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a72d946b-5715-4846-9717-01b487d172ea.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "17af58ed-f81b-4442-9d63-bbb76be92d0f",
    "name": "SMIRNOFF NORTH SHOT",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/82df8b3b-4421-4830-b4e1-d2255afc4812.jpeg",
    "category": "shots",
    "tags": [
      "LİKOR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b96e1fb3-d2dc-463d-add8-59a6b4539d6e",
    "name": "Berry Hibiscus",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0f51fabb-8348-4ca1-9399-f623fd9f06ee.jpeg",
    "category": "teas",
    "tags": [
      "SOĞUK ÇAYLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "eedecc27-45bb-4d29-89ad-2820bf04d6bb",
    "name": "Cool Lime",
    "description": "",
    "price": 120,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7b8eea86-064b-40fc-a8dd-fc7b54fe3826.jpeg",
    "category": "teas",
    "tags": [
      "SOĞUK ÇAYLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fa713f2c-a4bf-4da8-b19a-fa7304f353f3",
    "name": "SUVLA KINALI YAPINCAK",
    "description": "Anadolu'nun nadir ve özgün üzümlerinden Kınalı Yapıncak, bu beyaz şarapta zarif ve canlı bir tat profili sunar. Burunda yeşil elma, narenciye ve hafif çiçeksi notalar öne çıkar. Damakta taze, hafif ve mineral bir doku bırakır.",
    "price": 1400,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6d18d01c-8ae2-4abb-ab9e-ed04d0d64945.jpg",
    "category": "wines",
    "tags": [
      "BEYAZ ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "20a6247b-c93b-4322-93a6-018eb76170a9",
    "name": "SUVLA KABATEPE BEYAZ",
    "description": "(Aile bağı Bozokbağ ve tarihi yarımada bağlarında yetiştirilen Sauvignon Blanc, Chardonnay ve Narince varyeteleri hasat sonrası işlenir. Yeşil yansımaları olan uçuk sarı renkteki bu beyaz şarap, narenciye, yeşil armut, limon ve beyaz çiçeklerin aromaların",
    "price": 1150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6444e9da-e9d2-480e-ba09-14750532a02d.jpg",
    "category": "wines",
    "tags": [
      "BEYAZ ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "852cb0d1-6858-4b11-84e4-6ba62b63bc58",
    "name": "SUVLA KİLİTBAHİR BEYAZ",
    "description": "(Teruarının özelliklerini çok iyi yansıtan bu beyaz şarap Narince, Emir ve Kınalı Yapıncak varyetelerinden işlenir. Damakta beyaz armut, nektarin, burunda yasemin ve floral notalar sergiler, dengeli asidi ile rahat içimlidir.)",
    "price": 1100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6b9f51fc-943e-40e9-bc21-bd7baad74f31.jpg",
    "category": "wines",
    "tags": [
      "BEYAZ ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7fdaa882-65bb-4bdf-8bd7-5552a532b643",
    "name": "SUVLA KABATEPE KIRMIZI",
    "description": "(Karasakız dokunuşu ile hasat sonrası işlenir. Kırmızı meyve aromaları, belirgin baharat notaları, yuvarlanmış tanenler ve dengeli yapısı ile rahat içimli bir kırmızı şaraptır.)",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ce3b4066-f6e7-44b3-a1ab-e974a98bb112.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b14198a2-8610-45ec-b67c-ceb7696e2dec",
    "name": "SUVLA KİLİTBAHİR ROSE",
    "description": "(Çal Karası dokunuşu ile Karasakız ve Merlot varyetelerinden işlenir. Öne çıkan aroma profilinde çilek, böğürtlen ve nektarinin ardında portakal çiçeği notaları hissedilir.)",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/338f6e28-be40-45b8-9e0b-176d3620df23.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "7dd989d3-8634-4373-9b73-640e67ab5ff4",
    "name": "SUVLA KABATEPE BEYAZ",
    "description": "(Aile bağı Bozokbağ ve tarihi yarımada bağlarında yetiştirilen Sauvignon Blanc, Chardonnay ve Narince varyeteleri hasat sonrası işlenir. Yeşil yansımaları olan uçuk sarı renkteki bu beyaz şarap, narenciye, yeşil armut, limon ve beyaz çiçeklerin aromaların",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c4ea2118-98c7-465a-9f0c-e475720a762a.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "366b094c-6fc7-48a4-8fef-38c0b5d78625",
    "name": "SUVLA KİLİTBAHİR KIRMIZI",
    "description": "(Syrah, Merlot ve Öküzgözü varyetelerinden işlenir. Olgun vişne rengindeki bu kırmızı şarap, kırmızı orman meyveleri ve baharatsı aromaları ile dengeli, gövdeli ve rahat içimlidir.)",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/eb0c37e0-a85e-4ba0-9142-6ba7b839864c.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3607035c-74b6-4690-aa63-13f3d2d2c40f",
    "name": "SUVLA KİLİTBAHİR BEYAZ",
    "description": "(Teruarının özelliklerini çok iyi yansıtan bu beyaz şarap Narince, Emir ve Kınalı Yapıncak varyetelerinden işlenir. Damakta beyaz armut, nektarin, burunda yasemin ve floral notalar sergiler, dengeli asidi ile rahat içimlidir.)",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/31309261-4136-4273-acff-f60a995377c0.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ae3bc746-e956-4ed5-852d-025c452028b0",
    "name": "SUVLA KABATEPE BLUSH",
    "description": "(Syrah, Merlot ve Kalecik Karası varyeteleri hasat sonrası özenle işlenir. Parlak somon rengindeki bu pembe şarap burunda ahududu, erik, şeftali ve narenciye, damakta ise ilk yaz meyveleri eşliğinde aromatik bitkilerin notalarını taşır.)",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/19bc2cd3-b203-4b32-b37d-393b9a3192fb.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "32cfa410-4383-44e4-91a2-876acc233424",
    "name": "SANGRIA",
    "description": "Beyaz Şarap, Safari, Şeftali likörü, Gin ve Elma Suyunun mükemmel uyumuyla hazırlanan Sangria, Taze Yeşil Elma, Ananas, Çilek ve Portakal Parçaları ile her yudumda Meyve Bahçelerinin Taze Aromasını sunuyor.",
    "price": 220,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1764c253-7976-4970-80f5-77ae3254c6e2.jpg",
    "category": "wines",
    "tags": [
      "ŞARAP KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "837a2d10-1cb8-4bc2-90bd-a5c96ef5bac2",
    "name": "SUVLA KABATEPE BLUSH",
    "description": "(Syrah, Merlot ve Kalecik Karası varyeteleri hasat sonrası özenle işlenir. Parlak somon rengindeki bu pembe şarap burunda ahududu, erik, şeftali ve narenciye, damakta ise ilk yaz meyveleri eşliğinde aromatik bitkilerin notalarını taşır.)",
    "price": 1150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/cf296d4c-6386-4dc5-884e-af3c20915fe1.jpg",
    "category": "wines",
    "tags": [
      "ROSE ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "bdbc4d13-2c41-45f8-bfc3-996376795154",
    "name": "SUVLA KARASAKIZ BLUSH",
    "description": "Ege’nin özgün üzümü Karasakız’dan üretilen bu blush, narin pembe rengi ve canlı meyve aromalarıyla öne çıkar. Burunda çilek, nar ve kırmızı meyve notaları hissedilirken; damakta hafif, ferah ve dengeli bir içim sunar.",
    "price": 1450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8eb3b030-8e23-4eb9-b1ea-75ab3c4f3a81.jpg",
    "category": "wines",
    "tags": [
      "ROSE ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0ad341a4-9f12-41a7-b519-25028348011c",
    "name": "SUVLA KİLİTBAHİR ROSE",
    "description": "(Çal Karası dokunuşu ile Karasakız ve Merlot varyetelerinden işlenir. Öne çıkan aroma profilinde çilek, böğürtlen ve nektarinin ardında portakal çiçeği notaları hissedilir.)",
    "price": 1100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5f307cff-4478-4b03-a034-a6d894b566e1.jpg",
    "category": "wines",
    "tags": [
      "ROSE ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9c609df4-c477-4edb-8f23-cc49819dfd39",
    "name": "SUVLA KABATEPE KIRMIZI",
    "description": "(Karasakız dokunuşu ile hasat sonrası işlenir. Kırmızı meyve aromaları, belirgin baharat notaları, yuvarlanmış tanenler ve dengeli yapısı ile rahat içimli bir kırmızı şaraptır.)",
    "price": 1150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d81a031a-76a1-4aae-b72b-35829e5e0496.jpg",
    "category": "wines",
    "tags": [
      "KIRMIZI ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cbd16388-2324-4477-b55f-91661ef41732",
    "name": "SUVLA KALECİK KARASI KIRMIZI",
    "description": "Bu yerli ve karakterli şarap, ince tanenli yapısı, yumuşak içimi ve meyvemsi aromalarıyla öne çıkar. Burunda kırmızı orman meyveleri, vişne ve hafif baharat notaları hissedilirken; damakta kadifemsi, dengeli ve zarif bir yapı sunar.",
    "price": 1400,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/634ee707-86d3-419c-886d-284e9cbafb1c.jpg",
    "category": "wines",
    "tags": [
      "KIRMIZI ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1a0156f9-daa5-4e8a-88d7-a298be4ce1a7",
    "name": "SUVLA KİLİTBAHİR KIRMIZI",
    "description": "(Syrah, Merlot ve Öküzgözü varyetelerinden işlenir. Olgun vişne rengindeki bu kırmızı şarap, kırmızı orman meyveleri ve baharatsı aromaları ile dengeli, gövdeli ve rahat içimlidir.)",
    "price": 1100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/30c87cb6-02fb-4cd8-aa43-0fbec00b6a59.jpg",
    "category": "wines",
    "tags": [
      "KIRMIZI ŞARAP ŞİŞE"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "336fe801-18dc-4600-932d-599d917b5232",
    "name": "MEYVE TABAĞI",
    "description": "(Mevsim Meyveleri)",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/caaee2fd-78d6-4352-ae53-f378fa71cff1.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "30dfcbf8-6c9d-43cf-afbc-4619367e48e0",
    "name": "TÜTSÜLENMİŞ SOSİS TABAĞI",
    "description": "",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1c83c88e-8ca4-4a96-8533-7aaea7f1b50a.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "641f09c6-8bce-44e0-99d4-d0f162c5827b",
    "name": "PATATES KIZARTMASI",
    "description": "Çıtır çıtır patates kızartması, sıcak ve lezzet dolu bir atıştırmalık deneyimleyin.",
    "price": 210,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/26656ea2-a55f-4a2f-95a4-a7e02bcbe91f.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fcc625a9-276b-466d-a1e7-b48ae0562c4e",
    "name": "SOĞAN HALKASI TABAĞI",
    "description": "",
    "price": 240,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1cfe731d-2372-43d6-8d9d-fa00c6670566.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "f0f9ed7f-820c-4579-8c95-2fd9b4b6d524",
    "name": "RADYO BİRA TABAĞI XL",
    "description": "Patates, Nugget, Soğan Halkası, Tavuklu Börek, Şarküteri Börek, Çıtır Zeytin , Tütsülenmiş Sosis, Mozarella Stick, Çıtır tavuk",
    "price": 520,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/32204718-552d-4882-9001-77bc00c1451f.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ac154103-d26b-431e-9664-73df1fbbbed8",
    "name": "BÖREK TABAĞI",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d7d3295d-d2ea-4908-b5f9-967ce090545a.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "497ec860-233b-476c-b228-27d61dac5faf",
    "name": "NUGGET & MOZARELLA STICK TABAĞI",
    "description": "",
    "price": 290,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/994f2359-f7e4-4ba1-a723-e19beadedbb6.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "086f8a4d-5ca5-4ea0-9a9f-96d2a54e7089",
    "name": "ŞARAP TABAĞI",
    "description": "Kuru kayısı , Kuru incir, eski kaşar, isli peynir, çeçil peyniri, galeta ve mevsim meyveleriyle hazırlanan bu zengin tabak, şarap keyfinize eşlik edecek.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ed1fd7ed-f3bf-449c-ac40-bf5508d86d74.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "15d2c84b-903f-40ae-9b8b-d06053780628",
    "name": "TATLI & EKŞİ SOSLU TAVUK",
    "description": "Tavuk Bonfile, Mısır Gevreği, Chipotle Sos, Tatlı Ekşi Sos,",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/dcde1e92-850f-4e4b-a8cb-6bd1e1b6e632.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "be3a961c-1dc2-4aae-a496-c3f25834c6d6",
    "name": "GURME ÇITIR TAVUK",
    "description": "Tavuk Bonfile, Mısır Gevreği, Chipotle Sos.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/86bd8b2d-b00b-4142-8c67-95bdbe145e89.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3252546c-9dbc-4f85-9978-2052bcb2ebe1",
    "name": "RADYO BİRA TABAĞI",
    "description": "Patates, Nugget, Soğan Halkası, Tavuklu Börek, Tütsülenmiş Sosis, Mozarella stick",
    "price": 400,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7fd6b71b-8f04-4069-bc3c-663ffc63faa4.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "537c0d3a-fc61-435c-8578-73df54478b08",
    "name": "BUFFALO SOSLU ÇITIR TAVUK",
    "description": "",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/681eafdd-0455-47ab-a15d-dacfce2b8818.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e84ab032-03ba-466b-9cf3-4960f929d74a",
    "name": "PEYNİR TABAĞI",
    "description": "Eski kaşar, taze kaşar, isli peynir, çeçil peyniri, otlu peynir, galeta, biberiye ile hazırlanan bu zengin peynir tabağı, gurme keyfi sunuyor.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/cc02c199-e5c3-44d3-9880-257d2204aa12.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0c38ce70-222c-4064-99b6-511af532a80f",
    "name": "TRÜFLÜ PATATES TABAĞI",
    "description": "Toz parmesan, trüf yağı, taze soğan, trüf sos.",
    "price": 290,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/15560e58-abbb-4e7e-9f77-04fe6b14355f.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c2ee9979-5d7c-40d6-a854-7543470debdc",
    "name": "RADYO PATATES KIZARTMASI",
    "description": "Patates Kızartması, Kıymalı Arjantin sos, kırmızı soğan turşusu, kızarmış soğan ve cheddar sosun mükemmel uyumuyla sunuluyor. Bu enfes patates deneyimini kaçırmayın.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e4626f98-7bbe-454c-9b69-87452881122e.jpg",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5570c14c-a3cb-4d6e-a20a-3345809309aa",
    "name": "SOĞAN TEMPURA",
    "description": "",
    "price": 220,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/5570c14c-a3cb-4d6e-a20a-3345809309aa/efd452bf-6f95-4683-a374-05e6fb3d8411/inside.webp",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "19f5627f-90f6-441b-bd7a-c1c98b86eb48",
    "name": "RADYO NACOS",
    "description": "Arjantin kıyma, nachos cips, cheddar sos, taze soğan, kıtır soğan ve soğan turşusu",
    "price": 405,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/19f5627f-90f6-441b-bd7a-c1c98b86eb48/07f77dd3-780c-4e0a-a985-0944cbbb3e99/inside.webp",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "38fdf267-be9e-44d7-8f58-bd4c9f542cf6",
    "name": "RADYO NACOS GUACAMOLE",
    "description": "Guacamole sos, nachos cips, cheddar sos, salsa sos, kıtır soğan ve soğan turşusu",
    "price": 350,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/38fdf267-be9e-44d7-8f58-bd4c9f542cf6/c9e1c369-136c-4622-b495-18ff9e01f422/inside.webp",
    "category": "meals",
    "tags": [
      "ATIŞTIRMALIKLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8a4d89d8-3271-4d26-94d9-a799b06be5fd",
    "name": "SÖĞÜŞ",
    "description": "(Salatalık, Havuç, Limon Suyu)",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/42358d06-32d0-4ffd-a853-a453effb5188.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "23fb4f38-7c03-48ea-8b68-cabc10090b86",
    "name": "KARIŞIK ÇEREZ",
    "description": "",
    "price": 180,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6261a082-63b9-45db-83ce-b8f2b4081208.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "92ec0e92-a024-4e67-8acc-65be519fb996",
    "name": "TUZLU ÇEREZ",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/cf6d0687-49a4-4288-969c-3112e721b5cf.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "166777a4-3d47-4bdf-b3e7-4babce2365e6",
    "name": "ESKİ KAŞAR TABAĞI",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4366a4f7-9bc5-4b0a-8532-13aff95707e1.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "558cebc6-ab5d-4ed5-9576-3a1eb6656fea",
    "name": "TAZE KAŞAR TABAĞI",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9e7cda85-c97a-42ab-88b2-3c719f066fcc.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "153b6c77-a707-4d78-bf5b-7f69ba370127",
    "name": "KORNİŞON TURŞU",
    "description": "",
    "price": 100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/01809334-51b6-4f0d-9959-429ec3441483.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d00317de-6093-47f7-91e1-d383905a221d",
    "name": "CİPS",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/43e7d580-1cc9-4aef-b3f3-8ada6bd5ed17.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a43c4b2f-7754-4bd7-acf0-8638c0fa6e2f",
    "name": "YEŞİL ZEYTİN",
    "description": "",
    "price": 100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1b08c550-35c6-4e25-b8e5-6c9e7a200a7e.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3a998895-1c50-4dd3-8794-b394cd24abfd",
    "name": "ASYA SALATALIK TURŞUSU",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4c528e41-bbee-4212-b190-c40a49e834f1.jpg",
    "category": "meals",
    "tags": [
      "BİRA YANCILARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "86cdbc81-070a-415a-9bb6-e989e508fb9d",
    "name": "MARGARITA PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Mozarella, çeri domates ve taze fesleğenin mükemmel uyumuyla hazırlanan lezzet.)",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/61fcfc64-7f8f-4629-8e91-3a8d3cdcb13d.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8c1105f3-e72e-4b8d-86d9-f5151acf46a9",
    "name": "ACILI TAVUKLU PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Pizza sosu,tavuk bonfile,çıtır biber, jalapeno biber turşusu, kekik, mor soğan.)",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a56451bb-41f6-4150-92e3-9b3a9c7ab5c5.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "654bc851-1add-4708-b41f-6962a085a853",
    "name": "TRİO PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Pizza sosu, mantar, mısır, dilim siyah zeytin,mozerella peyniri.)",
    "price": 500,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f3e62b99-1ad4-486f-a524-0908da85cd0a.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5c98ed79-1280-446d-bf12-d416c48dc8a9",
    "name": "VEJETERYAN PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Pizza sosu, mozerella peyniri,kapya biber, çarliston biber,dilim siyah zeytin,mantar,çeri domates.)",
    "price": 470,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5fa4ac8e-fbc2-492b-ab69-0bc0c932ee26.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5ce88f23-6490-48ef-80ec-e6a87f15cdae",
    "name": "TÜTSÜ SOSİS PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Pizza sosu, tütsülenmiş sosis, mısır, mozerella peyniri.)",
    "price": 520,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2c2c31ce-36dc-4aa0-9f24-a5b1335870e2.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "dff6451b-1188-45fe-aca0-2100ff6d64a4",
    "name": "ŞARKÜTERİ PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Et severler için mükemmel bir seçim! Pizza sosu, mozzarella, sucuk, salam ve jambon ile hazırlanan bu pizza, şarküteri lezzetlerini bir araya getiriyor. Her dilimde farklı bir et lezzeti ile damaklarınızı şenlendirin.)",
    "price": 590,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c6e77008-2af3-4d92-864c-a6871306bc7d.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a5d09ff3-ca3a-40bb-8c21-6d6725ad4696",
    "name": "MANZO PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Et severler için ideal olan bu pizza, lezzetli pizza sosu ve eriyen mozzarella peyniriyle başlıyor. Fümelenmiş etin ve taze mantarların eşsiz kombinasyonuyla damaklarınızı şenlendirin.)",
    "price": 650,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6fe62c02-6ec3-46d0-b489-6dcf62b4f28f.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "1028c4e0-522b-462a-bdd7-767cc2894972",
    "name": "4 PEYNİRLİ PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Peynir tutkunlarına özel bu pizza, dört farklı peynirin muhteşem uyumuyla hazırlanıyor. Mozzarella, çeçil, tulum ve cheddar peynirlerinin zengin tatları, pizza sosunun tazeliğiyle buluşuyor.)",
    "price": 530,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c6643db9-6aba-441e-a05a-16b12701ddac.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "06021e98-4c47-4db7-b7cd-15b31b78d2f4",
    "name": "CHICKEN PESTO PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Lezzetli pizza sosu, eriyen mozzarella peyniri ve nar gibi kızarmış tavuk göğsü dilimleriyle hazırlanmış bu pizza, pesto sosunun eşsiz aromasıyla taçlanıyor. Tavuk severlerin vazgeçilmezi olacak bu özel tarif, her lokmada farklı bir lezzet şöleni sunuyor.)",
    "price": 540,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b5a3b479-7b30-44e1-be21-0d7dc313365f.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1975922a-e1f2-4cec-b482-f33c1b106bcf",
    "name": "KAFASI KARIŞIK PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Mozarella,kapya biber,çarliston biber, dana sucuk, sosis, zeytin, mısır ve mantarın mükemmel uyumuyla hazırlanır.)",
    "price": 540,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2cb34a56-35f3-4bbc-9f25-52e06b1b575c.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "aa5033ea-16e5-4038-a44a-a2ae37c537e2",
    "name": "ACILI PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Lezzetli pizza sosu, mozzarella peyniri, Napoli usulü pizza hamurumuzun üstüne, Chilli biber, Kasap sucuk, Kırmızı Soğan ile süslüyoruz ve son olarak, Acı Yağ ile son dokunuşu yapıyoruz. Acı sevenler için mükemmel bir pizza..)",
    "price": 570,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ce63b021-ab50-4fdc-8832-c9f2a179711c.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "725229cf-dfd6-4565-826e-56d096e76b67",
    "name": "TAVUK BARBEKÜ PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Pizza Sosu, Mozerella Peyniri,Kapya Biber,Tavuk Dilimleri,Barbekü Sos,Roka, Mor Soğan)",
    "price": 500,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/28c50906-d15d-42c7-9006-e710e87843f6.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "48076c1a-7c87-4101-aeb8-4277af21713c",
    "name": "FUNGHI PİZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Taze mozzarella peyniri, aromatik kekik ve doyurucu mantar dilimleri ile hazırlanmış enfes bir pizza deneyimi. Pizza sosuyla zenginleştirilmiş bu lezzet, damak tadınıza hitap edecek.)",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/edac0468-aa01-4aa2-824b-77b15f5f48a9.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b08d6284-b41d-4806-98ad-c6649e99eff8",
    "name": "NEW YORK PIZZA",
    "description": "19.00'a kadar tüm pizzalarda 1+1 fırsatını kaçırma! (Mozarella, dana sucuk ve mantarın mükemmel uyumuyla hazırlanır.)",
    "price": 570,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b2e6fe8b-5bc7-41f2-a932-3c226677da3d.jpg",
    "category": "meals",
    "tags": [
      "PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8001675f-ddfb-4130-b31c-bf9f2def1353",
    "name": "CHEESE CHICKEN BURGER",
    "description": "Tavuk İncik (140 gr), Patates Kızartması (100gr.),Şarapla Marine Edilmiş Karamelize Soğan, Cheddar Sos, Ev Yapımı Kekikli Sos Ve Özel Üretim Burger Ekmeği,Burger Turşusu",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b8e94a28-3f10-445d-9b1f-83516f3d196f.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "bc080bee-534f-4e83-96e4-b57a528d223d",
    "name": "CHICKEN BURGER",
    "description": "Tavuk İncik (140 gr), Patates Kızartması (100gr.), Ev Yapımı Kekiklim Sos, Özel Üretim Burger Ekmeği, Coslow Salata,Burger Turşusu",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/416c8c3a-a6ad-4c07-9e5d-a820eeb27191.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "44f30a36-56de-4e28-99c5-b30d36fab8fb",
    "name": "CORNER BURGER",
    "description": "Dana Burger Köftesi (140 gr), Patates Kızartması (100gr.), Füme Et, Cheddar Sos,Cheddar Peyniri, Şarap İle Marine Edilmiş Karamelize Soğan, Ev Yapımı Kekiklim Sos Ve Özel Burger Ekmeği",
    "price": 580,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/722a6ed1-e80c-4702-a321-2bd91db89b25.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e916aa11-29de-472c-be8f-3be8239e43cc",
    "name": "CHEESE BURGER",
    "description": "Dana Burger Köftesi (140 gr), Patates Kızartması (100gr.), Şarapla Marine Edilmiş Karamelize Soğan, Cheddar Peyniri Ve Özel Burger Ekmeği,Burger Turşusu",
    "price": 530,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7c18f209-6bef-4149-a252-0ade07b9af3d.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f40c065f-dbfb-490c-ae70-113c7bf5791a",
    "name": "KLASİK RADYO BURGER",
    "description": "Dana Burger Köftesi (140 gr), Patates Kızartması (100gr.),Ev Yapımı Çakal Burger Sos, Marul, Domates Ve Özel Burger Ekmeği,Burger Turşusu",
    "price": 490,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2c99eadd-61de-46aa-91da-fbce6e6607d4.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "db46df95-23d3-4a37-89b4-54e13b320f71",
    "name": "BARBEKÜ BURGER",
    "description": "Dana Burger Köftesi(140 gr), Patates Kızartması (100gr.), Pastırma, Kaşar , İsli Barbekü Sos,Şarapla Marine Edilmiş Karamelize Soğan ve Özel Üretim Burger Ekmeği,Burger turşusu",
    "price": 530,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9a14c8c8-26e1-487c-a607-a7e1e2f85c20.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "07a95d80-51d1-4e20-b2b2-6d86616c5154",
    "name": "KATSU BURGER",
    "description": "Izgara Tavuk, Asya salatalık turşusu, Buffalo sos, patates kızartması, kornişon turşu",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/464923d4-8c4a-4757-93b4-6d1f157609e9.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0a884a17-65dd-438d-9eca-9521b59a715b",
    "name": "AVOKADO BURGER",
    "description": "Avokado, Burger Turşusu, Marul, Domates, Kerevizli Barbekü Sos",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4a2e5516-8856-4cee-8d5e-3f8703679290.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "62987afd-c07c-4509-b5d7-b92ba3c309d3",
    "name": "MUSHROOM BURGER",
    "description": "Dana Burger Köftesi (140 gr), Patates Kızartması (100gr.), Karamelize Mantar, Dilim Kaşar, Trüflü Mayonez Sos, Roka Ve Özel Burger Ekmeği,Burger Turşusu",
    "price": 520,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/971f4dc0-2c22-48d6-8e62-21bec5a9675b.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cbb8165f-2777-4515-aa01-b8055cd7aefc",
    "name": "ACILI BURGER",
    "description": "Dana Burger Köftesi (140 gr), Patates Kızartması (100gr.),Cheddar Sos, Peri Peri Sos Ve Şarapla Marine Edilmiş Karamelize Soğan, Jalapeno biber turşusu ve  Özel Üretim Burger Ekmeği",
    "price": 510,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/473f3ccf-65d4-4a32-a9e4-ee59345e811a.jpg",
    "category": "meals",
    "tags": [
      "BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8767c664-afa4-4187-a1c2-475475cf0200",
    "name": "KIYMALI TACO",
    "description": "Arjantin sos, cheddar sos,kapya biber, çarliston biber,meksika fasulye,mısır,ıceberg,lime,taze kaşar, tortilla ekmeği, salsa sos ile hazırlanmış bu taco, doyurucu ve lezzetli bir alternatif. Radyo Pub'da tadını çıkarın.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 380,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/fa921377-3e2a-4c82-9d26-5b52b49af68d.jpg",
    "category": "meals",
    "tags": [
      "TACOLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3f09bcbd-afa7-485c-bd3b-fe41dca32221",
    "name": "BEEF TENDERLOİN TACO",
    "description": "Biftek,kapya biber,istiridye mantarı, meksika fasulyesi, mısır, cheddar sos, teriyaki sos, ıceberg, lime, taze soğan,susam, salsa sos ve tortilla ekmeği ile hazırlanır  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 550,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2db89583-8179-4607-91d9-d1af0dee2a25.jpg",
    "category": "meals",
    "tags": [
      "TACOLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a029d6fe-e080-4de6-b012-98fde2d2a2ee",
    "name": "TAVUKLU TACO",
    "description": "Tavuk parçaları, mantar, biber, mısır, ıceberg,lime, domates, yeşil soğan, tortilla ekmeği ile hazırlanan bu taco, enfes lezzetiyle sizi bekliyor. Radyo Pub'da deneyin.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b3fbaa9d-94a2-47dc-b000-4c14c2ce997b.jpg",
    "category": "meals",
    "tags": [
      "TACOLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "257b73dc-8883-487a-9259-290637cf5691",
    "name": "VEJETERYAN TACO",
    "description": "⁠⁠İnce brunoise soğan, kapya biber, yeşil biber, mantar, Meksika fasulyesi, mısır, çeri domates, mozzarella peyniri, kinoa, avokado, taze soğan, taco lavaşı, cheddar sos ve yarım lime.",
    "price": 410,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/257b73dc-8883-487a-9259-290637cf5691/f2b8180d-baf4-4327-b0df-2d24c9281bb2/inside.webp",
    "category": "meals",
    "tags": [
      "TACOLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "81c81a99-7f47-4627-8f52-188d7e766cfb",
    "name": "MİNİ CHEESE CHİCKEN BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR.",
    "price": 760,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1f5a5525-6653-4517-a5be-810d3128ce1e.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "93e6d851-b088-4294-8ab0-2c7f87660452",
    "name": "MİNİ CHEESE BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR.",
    "price": 980,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ab34dabb-3f12-4eec-9edb-f2e517ee58c4.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a187aca4-8efa-47af-8fc2-102140a085c2",
    "name": "MİNİ CORNER BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR.",
    "price": 1100,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/18f07ea4-52c5-4f50-8a88-016e7162683c.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8c261048-2a31-4cb7-9925-45a40f6871b9",
    "name": "MİNİ CHİCKEN BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR. (Tavuk incik,burger turşusu,kekiklim sos, coslow salata.)",
    "price": 740,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5081c01a-49cf-40a4-9b18-25d6c3673770.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f3a26981-3b10-4175-ba6c-d08134d888aa",
    "name": "MUSHROOM BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR. (Burger köftesi, karamelize mantar,dilim kaşar,cheddar sos, burger turşusu,trüflü mayonez sos,roka.)",
    "price": 990,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c08ec473-712c-47b4-8359-ccfbd4bb28a5.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "2a4d64ea-ea0b-4c1a-a1a1-41c69d1db198",
    "name": "MİNİ BBQ BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR.",
    "price": 960,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/fdd728fe-7883-4553-b65b-b19197f839e3.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7a8b7b71-eebe-4966-9279-8873c0a7d329",
    "name": "MİNİ KLASİK BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR.",
    "price": 930,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9e860f85-5a8b-410f-9b05-7590eede6345.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "629b338a-9e27-493e-8fc8-d07fa6c7c3e6",
    "name": "MİNİ ACILI BURGER (4 ADET)",
    "description": "TEK SATILAMAZ!! YANINDA PATATES İLE SERVİS EDİLİR.",
    "price": 1000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/666080a2-542b-4a97-92d3-41b9d9fe6c3c.jpg",
    "category": "meals",
    "tags": [
      "MİNİ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d8a96884-ba4e-4535-a74e-b6c29be9dab0",
    "name": "TRİO PİZZA",
    "description": "Mozarella, mantar, dilim zeytin ve mısır ile hazırlanır",
    "price": 330,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/54e4ae7b-9d0d-4f82-ae2d-6a7dafb8558d.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "91ca9b29-d82d-4d65-bb89-2057cb28c7d9",
    "name": "MARGARİTA PİZZA",
    "description": "Mozarella, çeri domates ve taze fesleğenin mükemmel uyumuyla hazırlanan klasik Margarita Pizza.",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/32fc220d-72d8-4986-be22-0d760ad77708.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4e5ea184-516a-42a3-a45b-4221d0c2e6d0",
    "name": "TAVUK BARBEKÜ PİZZA",
    "description": "Pizza Sosu, Mozerella Peyniri,Tavuk Dilimleri,Barbekü Sos,Roka,Mor Soğan ile hazırlanır.",
    "price": 345,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f7698799-45d2-403d-aa9c-c3f6e2c18640.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cafb0762-0b7b-4537-aae2-137f2348ab13",
    "name": "NEW YORK PİZZA",
    "description": "Mozarella, dana sucuk ve mantarın mükemmel uyumuyla hazırlanır.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b191f86f-d7ba-4902-8666-16ce3d079ec1.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d844c7ce-3117-4c57-b4ca-ccc2a2c28e34",
    "name": "KAFASI KARIŞIK PİZZA",
    "description": "Mozarella, dana sucuk, sosis, zeytin ve mantarın mükemmel uyumuyla hazırlanır.",
    "price": 380,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6768e9f7-71aa-43ff-84cb-5a2b16540c93.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ PİZZALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "69b5782f-6f7e-4065-af88-ada8f4dda2ca",
    "name": "TAVUK BURGER MENÜ",
    "description": "Tavuk incik,burger turşusu,kekiklim sos, coslow salata, kaşık patates ve dip sos.",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d8a57734-da4e-4be4-b50f-aa86458a391f.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8a3cc0ca-f65c-46ec-90ac-de0fe6793d86",
    "name": "KÖFTE BURGER MENÜ",
    "description": "Burger köftesi ,çakal burger sos, burger turşusu, marul, domates,  kaşık patates ve dip sos",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/917fbafa-8e14-4ec1-a07a-6932bd049da1.jpg",
    "category": "meals",
    "tags": [
      "ÇOCUK MENÜSÜ BURGERLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e2d2b63f-6cfc-4a73-9d4f-243a484cd0f6",
    "name": "ACI TATLI CHİCKEN WRAP",
    "description": "Tavuk bonfile, tortilla ekmeği, mantar, kapya biber, çarliston biber, soğan, tatlı ekşi sos, srirrache sos, rende kaşar, patates kızartması, patates dip sos ve yeşillik ile hazırlanan Acı Tatlı Chicken Wrap.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 330,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0256ecd2-a792-4919-9e0d-8efbc6ec30df.jpg",
    "category": "meals",
    "tags": [
      "WRAPLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "21fbe4b4-7635-4608-8c50-6853c386a351",
    "name": "BARBEKÜ WRAP",
    "description": "Tavuk bonfile, tortilla ekmeği, barbekü sos, kapya biber, çarliston biber, soğan,  krema, rende kaşar, patates kızartması, patates dip sos ve yeşillik ile hazırlanan Barbekü Wrap.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1e5454c9-0cfa-4e21-885b-db35d427b877.jpg",
    "category": "meals",
    "tags": [
      "WRAPLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e4d84a00-3799-439d-9592-af112723c83a",
    "name": "BEEF TENDERLOIN WRAP",
    "description": "Biftek, kapya biber, kestane mantarı, soğan, meksika fasulyesi, teriyaki sos, susam, rende kaşar, tortilla ekmeği, patates kızartması, patates dip sos ve yeşillik ile hazırlanan Beef Tenderloin Wrap  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 550,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0ae1c14f-899c-4831-9174-7f790ff59bb8.jpg",
    "category": "meals",
    "tags": [
      "WRAPLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "93bba62a-a248-4202-af59-2872cc4c5b44",
    "name": "CHICKEN WRAP",
    "description": "Tavuk bonfile, tortilla ekmeği, mantar, kapya biber, çarliston biber, soğan, pesto sos, krema, rende kaşar, patates kızartması, patates dip sos ve yeşillik ile hazırlanan Chicken Wrap.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/dcdf97eb-837b-4e74-969d-fab9c4b7901e.jpg",
    "category": "meals",
    "tags": [
      "WRAPLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0ea3a6f2-b31c-40d1-8f14-46224f45d695",
    "name": "TON BALIKLI WRAP",
    "description": "Ton balığı, ıceberg , salatalık, mor soğan, taze baharatlı sos, mısır, tortilla ekmeği, yeşilik , patates, patates dip sos ile hazırlanan Ton Balıklı Wrap.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b6b70dc2-e40c-4d4d-85a5-11ce699b5ffc.jpg",
    "category": "meals",
    "tags": [
      "WRAPLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "75a55ef8-69f2-420b-9f7e-59f5b5d2114a",
    "name": "VEJETERYAN WRAP",
    "description": "Kapya biber, carliston biber, Mantar, kabak, havuç, mısır, soğan, meksika fasulye ,cheddar sos ,peri peri sos, patates, dip sos ve yeşillik ile hazırlanan Vejeteryan Wrap  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 290,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/77e51799-7031-454b-8074-704a830e5756.jpg",
    "category": "meals",
    "tags": [
      "WRAPLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "80312d4a-a68d-4a37-b0ec-511ea4f9b707",
    "name": "AKDENİZ SALATA",
    "description": "Akdeniz mutfağının klasik lezzeti; bol yeşillik, zeytin ve peynirin uyumu.  ( İlk Kadeh Şarap ikramımızdır. ) (Marul, Maydanoz, Dereotu, Taze Soğan, Roka, Tulum Peyniri, Salatalık, Siyah Zeytin, Salata Sosu)",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d80fd5da-27ef-4e65-becb-fa646ea205e5.jpeg",
    "category": "meals",
    "tags": [
      "SALATALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "20ee5a5e-2119-4096-ae07-aba95e3b4409",
    "name": "SEZAR SALATA",
    "description": "Tavuk göğsü, parmesan, Sezar sos, kruton ekmek ve mısırın uyumuyla zenginleşmiş taptaze salata.  ( İlk Kadeh Şarap ikramımızdır. ) (Marul, Sezar Sos, But ,  Kroton Ekmek, Parmesan Peyniri, Mısır, Grissini.)",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e68506ee-5862-4344-8597-400360e9f01d.jpg",
    "category": "meals",
    "tags": [
      "SALATALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7c04ce8f-6ac6-4aef-b752-1a6ecca639b2",
    "name": "LİNGUİNİ CARBONARA",
    "description": "Linguini Carbonara, kremanın yumuşaklığıyla dana jambonun lezzetini birleştiriyor. Yumurta, parmesan ve sarımsakla zenginleşen bu klasik tarif, sebze çeşnisi ve baharatlarla tamamlanarak damakta eşsiz bir tat bırakıyor.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/93d6602d-770c-40a1-8c2c-7b1b21c25283.jpg",
    "category": "meals",
    "tags": [
      "MAKARNALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "b841017e-6ec3-4f45-bb0d-013a5a545297",
    "name": "PENNE AL POLLO CON FUNGHİ",
    "description": "Krema, mantar ve tavukla buluşan penne makarna, hafif baharatlar ve sebze çeşnisiyle lezzetini katlıyor. Sarımsak ve fesleğen aromasıyla zenginleşen tarif, parmesan dokunuşuyla tamamlanıyor. Yumuşak ve doyurucu bir tat arayanlar için ideal bir seçenek.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/379c855d-7a64-47bd-b4a9-70fb34ffd7a3.jpg",
    "category": "meals",
    "tags": [
      "MAKARNALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8b0f6566-a141-4736-ad9e-03f90c50b557",
    "name": "PENNE ALLA NORMA",
    "description": "Penne Alla Norma, kızarmış patlıcan ve özel domates sosunun enfes uyumunu sunar. Mozzarella ile zenginleşen bu tarif, sarımsak ve taze fesleğenle tamamlanır. Hafif baharatlar ve sebze çeşnisiyle dengelenen lezzetiyle Akdeniz esintisi taşır.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a8727697-e95c-43b8-920b-233b1ce5cb3c.jpg",
    "category": "meals",
    "tags": [
      "MAKARNALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1f089b46-0e72-4e65-9e7e-25bc5589338c",
    "name": "FETTUCCINE ARRABBIATA",
    "description": "Fettuccine Arrabbiata, acı severler için ideal bir seçenek. Siyah zeytin, kuru domates ve taze soğanla zenginleşen bu lezzet, sriracha ve özel domates sosuyla harmanlanıyor. Parmesan ve fesleğenle tamamlanan tarif damakta iz bırakıyor.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/df10365b-9b13-4425-b429-324b503d405b.jpg",
    "category": "meals",
    "tags": [
      "MAKARNALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3c6755ae-cfcf-401e-be25-72615111544c",
    "name": "LİNGUİNİ BOLOGNESE",
    "description": "Linguini Bolognese, kök sebzelerle harmanlanan özel sosun enfes karışımıyla hazırlanır. Sarımsak, fesleğen ve baharatlarla tatlanan bu özel makarna, parmesan ile son dokunuşunu alır. Her lokmada zengin ve dengeli bir lezzet sunar.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/35396b0f-31b3-452d-9bbf-7675245aea8c.jpg",
    "category": "meals",
    "tags": [
      "MAKARNALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fa5a79bb-3674-4b4d-ba47-63dd99f43601",
    "name": "BADEMLİ TAVUK",
    "description": "Tagliatelli makarna ve karışık akdeniz yeşillikleri ile servis edilir.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 460,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c3d03401-c99a-427e-939a-bdc1a1cdea2a.jpg",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cc8e462c-4d07-41db-9b42-4a6efe6ac761",
    "name": "LİMON SOSLU TAVUK",
    "description": "5 cl şarap içerir. Tagliatelli makarna ve karışık akdeniz yeşillikleri ile servis edilir.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 460,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/dc627e9f-ff25-41a8-a62d-5fcd3c73a4f9.jpg",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "06170b71-bb52-470f-a819-f6aa6cce78c1",
    "name": "NAPOLİTEN SOSLU IZGARA KÖFTE",
    "description": "Izgara köfte, Napoliten sos, baby patates, akdeniz yeşillik, ekşi mayalı ekmek (1 adet),parmesan peyniri, taze kekik  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 550,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/71c4deba-9e63-40ee-b23c-9a4dcb49f029.jpg",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f6aeede3-9eec-475e-be92-28a59d8dc94c",
    "name": "IZGARA TAVUK",
    "description": "Izgara tavuk , baby patates, akdeniz yeşillik , lime aioil, ekşi mayalı ekmek (1 adet), taze kekik  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 460,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8ae0b49f-0f97-4299-8bc8-aa28f48294ca.jpg",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e7f1d8ab-66b3-4813-8f57-71dfa26a83f6",
    "name": "KARAMELİZE ELMALI BUT",
    "description": "5cl şarap içerir. Tagliatelli makarna, tavuk but, jülyen soğan, kırmızı elma, beyaz şarap, şeker, krema ,akdeniz salata ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 450,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/e7f1d8ab-66b3-4813-8f57-71dfa26a83f6/2290211b-9b0c-4562-87bf-411abad2f543/inside.webp",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "24a74f7f-10a9-4cd0-b414-04580ca1aa08",
    "name": "BALLI HARDALLI TAVUK",
    "description": "Tagliatelli makarna,Jülyen tavuk, kapya biber, ballı hardal, sweet chili sos, susam ve akdeniz salata ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 480,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/24a74f7f-10a9-4cd0-b414-04580ca1aa08/f50a52bd-2d20-4bc7-98f5-9aba1f1cf2ef/inside.webp",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e9a30d1d-c9b8-4733-8fa4-b431ab3f5532",
    "name": "YANIK TEREYAĞLI SİNİTZEL",
    "description": "Şinitzel tavuk, yanık tereyağ, limon, baby patates ve akdeniz salata ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 380,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/e9a30d1d-c9b8-4733-8fa4-b431ab3f5532/1de10ddf-4b0f-4d15-9f6c-40a5c370ffa4/inside.webp",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "114d1f02-cc49-46a4-8c8c-b3db54c4c3c4",
    "name": "MANTAR SOSLU SİNİTZEL",
    "description": "Şinitzel tavuk, yanık tereyağ, limon, baby patates ve Akdeniz salata. ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 370,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/114d1f02-cc49-46a4-8c8c-b3db54c4c3c4/c86af57a-1d69-4059-b586-12dbd175dc64/inside.webp",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ef0c505a-dc9c-4281-90e5-d5fa67545b78",
    "name": "IZGARA KÖFTE",
    "description": "Izgara köfte, baby patates, akdeniz yeşillik , ekşi mayalı ekmek (1 adet), taze kekik  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 530,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/93767e90-ea80-4f98-80f6-87f6e8b8f36c.jpg",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3a3871a9-a3bf-4951-8f75-b31d9f329582",
    "name": "IZGARA MANTARLI TAVUK",
    "description": "Izgara tavuk but, mantar sos, Akdeniz salata ve baby patates. ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 490,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/3a3871a9-a3bf-4951-8f75-b31d9f329582/edc30c27-61d6-4d7e-b585-89798bd50eb9/inside.webp",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "89ac3264-1d27-4f43-8f15-192869572e2f",
    "name": "ISPANAKLI MANTARLI TAVUK",
    "description": "5cl şarap içerir.Jülyen tavuk, ince brunoise soğan, mantar, ıspanak, arpa şehriye, tulum peyniri, çeçil peyniri, parmesan peyniri, krema, baby patates ve akdeniz salata ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 550,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/89ac3264-1d27-4f43-8f15-192869572e2f/d794149d-f362-4937-97ea-d25946e5045e/inside.webp",
    "category": "meals",
    "tags": [
      "KÖFTE & BEYAZ ET"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "102dd5b7-9312-43b7-800f-ee48f1b32816",
    "name": "AVOKADO BOWL TABAĞI",
    "description": "Falafel, roka, salatalık, havuç, brokoli, guacamole sos, ceviz, kırmızı lahana, bowl sosu.  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 470,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/da1364b1-aacd-4e6e-a1a3-cecb6361a4fd.jpg",
    "category": "meals",
    "tags": [
      "BOWL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "51264b28-7089-4dfb-997d-242f61e40ace",
    "name": "TATLI EKŞİ TAVUK BOWL",
    "description": "Izgara tavuk, basmati pilav, siyah fasülye, havuç, salatalık, kırmızı lahana, guacamole sosu, beyaz susam, tatlı ekşi sos, taze soğan  ( İlk Kadeh Şarap ikramımızdır. )",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/44a49014-f37a-4774-9da1-6949f5840a17.jpg",
    "category": "meals",
    "tags": [
      "BOWL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c08f0240-d0f8-45c8-b211-4af5b2ba2fea",
    "name": "Erdinger",
    "description": "",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/05eacfb1-0693-49e7-a17c-c1d4107edabc.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "17e492f2-4843-4db7-8e4d-0e83c7eb0633",
    "name": "Amsterdam",
    "description": "",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c57c8331-91f6-49d1-959a-69b341f19d02.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "42c4894a-232d-4134-9191-fb8972e99c06",
    "name": "Efes Glutensiz",
    "description": "",
    "price": 280,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c424ab2e-cf94-43d5-b987-2fa3f0ada204.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "da67ab15-07af-4773-be85-5c39b56d5ee1",
    "name": "Bomonti Filtresiz",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1a30a0d0-53c4-4965-9e07-72a2e0ed76eb.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fb9f48f7-738e-4cc7-a36b-5118e78bdd16",
    "name": "Corona 33 cl",
    "description": "",
    "price": 290,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7102acf3-a7a2-4eb3-ac74-0dbd16964cf1.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b9b4b5e2-98f8-4200-a84d-c18b2ec6a718",
    "name": "+1 EFES PİLSEN",
    "description": "",
    "price": 250,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1a9a4189-c92f-4c5e-be15-056f470f8d4d.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9260820b-0374-4713-b483-d559d52a6fa3",
    "name": "Belfast",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0976bc90-50e9-433b-99aa-6857ba7ed823.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f2d3ec3f-b21b-4543-bdb0-e8ef92c0cabf",
    "name": "Miller Lime",
    "description": "",
    "price": 250,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4efb5e53-ac4f-46a2-8d15-5e00321bef40.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4fff0ea4-a949-4815-8554-e9d4c09e9442",
    "name": "Duvel",
    "description": "",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/63b02ba3-52f1-4fb1-9f59-e295c4050fca.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a3509eab-6ebd-4aa2-b06e-f2d8aefc31d2",
    "name": "Bud",
    "description": "",
    "price": 270,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/43597ebd-2347-4264-b23a-3aa40a690cb8.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ce2eee2a-4ec0-46b2-b172-db87c9283792",
    "name": "Efes Özel Seri",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d099a4c4-8f31-4c19-aea3-a7019f7a3bf4.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f491a281-4a4f-499c-8817-a526279091a1",
    "name": "Hoegaarden",
    "description": "",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d3dd0df1-cea6-4785-90fc-1e61e4c773fe.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9a703b02-b085-4f18-aa91-8c1d203b314b",
    "name": "Miller",
    "description": "",
    "price": 250,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d2d19d44-5891-47cd-94ce-f8b6d7bb7f3b.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "79d8971a-e37a-4c48-826b-6d118d3758f7",
    "name": "Beck's",
    "description": "",
    "price": 260,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/d66cea0b-3ebc-4a15-af83-b1014457b2ee.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cf9fb560-9fee-4c03-8efd-26bd0cd2db84",
    "name": "STELLA ARTIOS 44 CL",
    "description": "",
    "price": 270,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e4e1a0e3-dc63-4397-8929-048b3ea78ca9.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7370a30c-cd1f-406d-8c7a-7c4e20ce194c",
    "name": "Heineken",
    "description": "",
    "price": 310,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/eb4bdd40-6b35-45be-abaa-5b9695e0a7f6.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "94036f4f-68cf-422d-96c9-be1745879d71",
    "name": "Efes Malt",
    "description": "",
    "price": 250,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/dcfd0da2-ae65-4208-a8cf-66d57f771df4.jpg",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "514259bd-799f-4c09-b3d0-1c955c5a2cec",
    "name": "Efes Pilsen Serçe (30cl)",
    "description": "",
    "price": 180,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/514259bd-799f-4c09-b3d0-1c955c5a2cec/831ef862-3c48-41c3-95c8-b0e9d532e025/inside.webp",
    "category": "beers",
    "tags": [
      "ŞİŞE BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ba7f6630-d113-45fd-8da1-8c39ffbaf985",
    "name": "Efes Malt (50 CL)",
    "description": "",
    "price": 220,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e9be1f80-de97-4a39-9c6d-c9928c6f63d7.jpg",
    "category": "beers",
    "tags": [
      "FIÇI BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fbed191f-436a-456d-b043-4454b272515a",
    "name": "Beck's (50 CL)",
    "description": "",
    "price": 250,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/72bebacd-57c6-4633-bb6f-7e1b3d0214f3.jpg",
    "category": "beers",
    "tags": [
      "FIÇI BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1bf1a4db-314d-42a8-8567-54acb5261289",
    "name": "Beck's (30 CL)",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/351240ea-f349-4769-a7b2-310e4b2183ce.jpg",
    "category": "beers",
    "tags": [
      "FIÇI BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b4e7e1dd-a016-4943-a59b-986a7f32dccf",
    "name": "Efes Malt (30 CL)",
    "description": "",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9e3a15a8-eebf-4f8e-943d-3655dcd141ff.jpg",
    "category": "beers",
    "tags": [
      "FIÇI BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "49d02b10-058d-4695-8bd4-48dc639afe79",
    "name": "Stella Artois (50 Cl)",
    "description": "",
    "price": 250,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/49d02b10-058d-4695-8bd4-48dc639afe79/5567b780-1717-4467-bedb-46667d63f8f2/inside.webp",
    "category": "beers",
    "tags": [
      "FIÇI BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d737e213-22c9-49fa-aad3-9acd686daff6",
    "name": "Stella Artois (30 CL)",
    "description": "",
    "price": 155,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/d737e213-22c9-49fa-aad3-9acd686daff6/21c2f28d-b471-41c5-a571-678ab68698e0/inside.webp",
    "category": "beers",
    "tags": [
      "FIÇI BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6fac353f-bba1-4f54-8267-4c92c413ddc7",
    "name": "6 ADET Bud 50 CL",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1620,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7d828eee-2b10-451b-9bbe-d18c01b56ac7.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "46ab054e-3f39-47a1-8663-c79bdec9e090",
    "name": "6 ADET Hoegaarden",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1920,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b88142de-e6fd-4673-8678-8318ffb8f940.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "08d0a553-58d6-43e8-855b-95851cde49a3",
    "name": "6 ADET Bomonti Filtresiz",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1560,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/bcf02acc-e704-41b3-9dc5-ca9b87f011fb.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "06c088e0-e3c7-428a-9cf3-4c6a53c24076",
    "name": "6 ADET Belfast",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1560,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4e480a16-cdc8-45e9-9471-30479b1009a9.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "4d20c6e7-d3ca-4a2a-a4c2-55ed76d8e21e",
    "name": "6 ADET Efes Malt",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1500,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0e349835-801a-407d-b9f6-bf22172a50b9.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4f1c1e38-7ba6-484d-bb33-90b17148dda5",
    "name": "6 ADET Efes Özel Seri",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1560,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/48ccc253-5ca7-48a8-9286-883054831bbd.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d8626b1d-43af-4dc7-9ba4-51d07d7a9e55",
    "name": "6 ADET +1 Efes Pilsen",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1500,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3033c67f-b790-4f50-9e12-47e9d5087590.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "952eb35b-1400-48ca-a05d-7204fd28ab39",
    "name": "6 ADET Miller 33 CL",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1500,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2bf5eb61-bb61-4e0c-a4a1-c1a4f854d49d.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "74ee32e2-56bc-4f81-9865-5284ddcd8738",
    "name": "6 ADET Corona",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1740,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/865b8792-5948-4ff1-98ad-a4f21756c828.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7c22d5a5-4837-4560-94b4-825b18d8ca60",
    "name": "6 ADET Beck's",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1560,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1ac529b5-4358-4933-aa59-47f73e6b7075.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "da7fcab0-af15-4a14-97bb-b0c7623c773c",
    "name": "6 ADET Erdinger",
    "description": "Yanında patates tabağı ikramımızdır.",
    "price": 1920,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6bdca059-cff3-42ed-8db9-754a0534d1c9.jpg",
    "category": "beers",
    "tags": [
      "6'LI KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7d02d901-1026-45f4-baac-a4211648806f",
    "name": "3 Kafadar Mosaic IPA",
    "description": "Mosaic şerbetçiotunun karakterini öne çıkaran, aromatik ve canlı bir IPA. Tropikal meyve, narenciye ve hafif çam notaları ilk yudumda belirginleşir. Orta gövdeli yapısı ve dengeli acılığıyla ferahlatıcı ama karakterli bir içim sunar. Şerbetçiotu severler için vazgeçilmez.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e813df83-4ddc-47f3-af48-29abffde1ecc",
    "name": "3 Kafadar Aşna Vişne",
    "description": "Vişnenin ferahlatıcı ekşiliğiyle dengelenmiş, hafif ve içimi kolay bir craft bira. Meyvemsi aromalar ilk yudumda öne çıkarken, alt notalarda hafif malt dokunuşu hissedilir. Ne çok tatlı ne fazla ekşi—dengeli yapısıyla günün her anına uyum sağlar. Farklı ama ulaşılabilir bir lezzet arayanlara.",
    "price": 370,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/e813df83-4ddc-47f3-af48-29abffde1ecc/3af33699-6da5-4594-b306-732be5f6be0a/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f895c53d-1f5d-4fbf-a5da-f417ed1aca4c",
    "name": "3 Kafadar Gece",
    "description": "Koyu renkli, yoğun gövdeli ve karakterli bir craft bira. Kavrulmuş malt, kahve ve bitter çikolata notalarıyla zenginleşen bu özel tarif, ilk yudumda hafif tatlı başlayıp dengeli bir acılıkla devam eder. Uzun bitişi ve derin aromasıyla yavaş içim için ideal. Gecenin tadını çıkaranlara.",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f72bb6ee-9d48-4b04-875f-37fb208b276a.jpeg",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fb47efb4-d837-49d0-a715-a090003b19c7",
    "name": "Gara Guzu Weiss Beer",
    "description": "Alışılmış Alman Hefeweizen biralarından daha farklı, bol şerbetçiotlu buğday birası. Bulanık, hafif koyu renktedir. Orta gövdeli, rahat içimli, ferahlatıcıdır. Kalıcı köpüğe sahiptir. Karanfil, meyve ve narenciye kabukları aromaları yoğundur. 2016 LGBTİ+ Onur Haftası’na ithafen çıkarılmış olup, yılın sadece bir haftası değil, her daim destekçisidir.",
    "price": 320,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/fb47efb4-d837-49d0-a715-a090003b19c7/6016c493-e074-40d6-942e-409773585cf8/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a5da02f9-735e-4ed4-8169-aa741b666736",
    "name": "3 Kafadar Tütsü",
    "description": "İsli karakteriyle öne çıkan, farklı ve cesur bir bira. Tütsülenmiş maltlardan gelen hafif duman aroması, karamelimsi dokunuşlarla dengelenir. Orta gövdeli yapısı ve yumuşak içimiyle her yudumda mangal ateşini andıran sıcak bir tat bırakır. Alışılmışın dışında tatlar arayanlar için.",
    "price": 350,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/a5da02f9-735e-4ed4-8169-aa741b666736/f0f07722-a099-40dc-98f0-87e171b61249/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "39b6f151-a564-4964-9087-def06a576917",
    "name": "3 Kafadar Tadım Seti",
    "description": "Tadım bardaklarında servis edilir. Gece’nin koyu ve yoğun notaları, Tütsü’nün isli dokunuşu, Aşna Vişne’nin ferah meyvemsiliği ve Mosaic IPA’nın aromatik şerbetçiotu karakteri bir arada. Farklı stilleri deneyimlemek ve favorini bulmak için ideal.",
    "price": 480,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/39b6f151-a564-4964-9087-def06a576917/3afd943c-a24f-4d51-a210-2e3831f019d0/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "95b56996-ee6f-4c26-8d05-c4b39755ebcd",
    "name": "Gara Guzu Red Ale",
    "description": "Rengi ve tadı, Dünya 'red ale' sınıfına göre farklı olduğu için, kategori dışı, “deneysel” “experimental” sınıfta yer alır. Üretiminde kırmızı pancar ve yerel Muğla çam balı kullanılır. Çok çekici kırmızı, koyu pembe renge sahiptir. Köpüğü neredeyse çilekli pasta kremasını anımsatır. Pancardan gelen toprağımsı aroma ve tadlara, Muğla çam balının o eşsiz kokuları eşlik eder.",
    "price": 350,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/95b56996-ee6f-4c26-8d05-c4b39755ebcd/5dcc672c-6929-4685-bf8b-00a20bec464a/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "bc428429-27e7-49fc-aaac-37b3a7b8222a",
    "name": "Gara Guzu Blonde Ale",
    "description": "Ferahlatıcı, rahat içimli, koyu altın sarısı renkte, yoğun köpüklüdür. Belirgin çiçek kokularına, narenciye ve kayısı, şeftali gibi meyve aromaları eşlik eder. Üst kalite Alman maltları ve Alman, Sloven ve ABD şerbetçiotları kullanılmıştır.",
    "price": 320,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/bc428429-27e7-49fc-aaac-37b3a7b8222a/a7c77316-2c2a-4fa5-a68b-40050e3e7a4e/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "9ad5010e-2198-4ad9-834b-871ff931b0e8",
    "name": "Gara Guzu Mayhoş",
    "description": "Türkiye’de Saison türünde yapılan tek bira.. Canlı, vahşi bir maya türü kullanılıyor, Belçika’da “Saison”, ABD’de “Farmhouse Ale” olarak adlandırılıyor. Üretiminde hibiskus (Hatmi Çiçeği), biberiye, ardıç tohumu kullanılır. Koyu yavruağzı, turuncu-kırmızı tonlarda, bulanık bir görünüme sahiptir. Burunda, ardıç tohumu ve biberiye baharat aromalarına, çiçek ve kırmızı meyveler eklenir. Ferahlatıcı, baharsı, hafif mayhoş, sek ve kalıcıdır.",
    "price": 320,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/9ad5010e-2198-4ad9-834b-871ff931b0e8/584e9cf7-19f5-4caf-822c-32d2cfb85e4a/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "eec85be6-2359-4a81-9445-8e04fe4e621f",
    "name": "Gara Guzu Tadım Seti",
    "description": "Tadım bardaklarında servis edilir. Blonde Ale’in çiçeksi ve meyvemsi zarafeti, Red Ale’in pancar ve çam balıyla gelen özgün karakteri, Mayhoş’un hibiskusla dengelenmiş aromatik ekşiliği ve Weiss Beer’ın ferah, baharatlı dokunuşu bir arada. Farklı stilleri deneyimlemek ve favorini bulmak için ideal.",
    "price": 480,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/eec85be6-2359-4a81-9445-8e04fe4e621f/e61b021b-9cd0-418c-9a40-a899822781bf/inside.webp",
    "category": "beers",
    "tags": [
      "CRAFT BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9bb3ebda-3597-4cae-a98f-cd0bd356decc",
    "name": "4 Adet Belfast 50 CL",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1040,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/402ec34d-79ca-4a57-8c93-0b3e9eb21c7d.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "07dfde42-6d8a-4698-b5e3-d6aa6d64dfcd",
    "name": "4 Adet Hoegaarden",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1280,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/34e37720-a446-440a-b1a7-296d15c42e3e.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d746325f-9123-419b-a4e0-250c2621ddbd",
    "name": "4 Adet Erdinger",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1280,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/517ebeb3-3b81-4369-a06f-37d0fa79f64a.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7d86d744-49a8-4645-808a-7768f5afd1a2",
    "name": "4 Adet Bud 50 CL",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1080,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c8175fd3-a8d9-4415-ab7d-291cd3ec9765.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9c43ebbc-f573-475b-8943-056a8deb0466",
    "name": "4 Adet Bomonti Filtresiz",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1040,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f1e8f026-fd74-426a-9765-733c74e13045.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c4c1ed79-e314-40c4-a462-2b8727e47054",
    "name": "4 Adet Beck's",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1040,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/cd0492dd-41a3-4afd-a96e-04b9032f7538.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4ebd210a-3cc8-4158-b17c-ebfe515e41dc",
    "name": "4 Adet Miller 33 CL",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e312d754-235c-48e7-ab3d-d108e2a0f332.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "17b2b694-7851-457c-8c50-208670d7b82f",
    "name": "4 Adet Efes Malt",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f512c53b-b1a2-4aa3-b831-7839ac874411.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "efadea07-64bd-4410-89eb-422939b965d0",
    "name": "4 Adet +1 Efes Pilsen",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2c282dc6-b56a-49b3-a9fe-4e42ed89073d.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "81968e80-feae-4b43-9f50-365bbd66fa20",
    "name": "4 Adet Corona",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1160,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b60b1b82-3d55-49d9-9ef0-61614238189a.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "2f80512f-ec02-4ddf-934c-24a0da7eb4f6",
    "name": "4 Adet Efes Özel Seri",
    "description": "Yanında karışık çerez ikramımızdır.",
    "price": 1040,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/21775813-4357-41e9-be77-5d5bae0b65b9.jpg",
    "category": "beers",
    "tags": [
      "4'LÜ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "594db38b-63ff-44cb-bca9-29c1fadbe9ba",
    "name": "8 ADET BOMONTİ FİLTRESİZ",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2080,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/70d21259-c449-4682-95b6-63c74590228f.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "becf1a89-e6fb-4ad4-8728-c72bb3d99788",
    "name": "8 ADET BUD 50 CL",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2160,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8c4d7af2-785d-4437-aee9-f21bc515213d.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "17240a61-e668-45fa-87fe-1e69bcd55578",
    "name": "8 ADET EFES MALT",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5023077d-02d7-4f2f-b382-af1d39568a22.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "aae06791-2bf3-4bda-af4b-87801d608c2c",
    "name": "8 ADET EFES PİLSEN",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6cafc404-69b7-41f4-aec9-efb7ec66b55c.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fc6fad90-030e-4342-a474-30c49844e318",
    "name": "8 ADET BELFAST",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2080,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/cc1a4368-d688-4f14-b77e-cde909603b0d.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3e1e67de-f0a9-4d97-8734-ad9bcb33cda5",
    "name": "8 ADET EFES ÖZEL SERİ",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2080,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/35e54a10-d9a8-4699-b0a3-1491411c1000.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0c1e21a8-dd81-413f-b4ba-c9decb9057b1",
    "name": "8 ADET MİLLER 33 CL",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2000,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1f1f1e1e-d8d1-4cf2-a861-f44f3c988182.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "2fb07159-ce19-4240-92a7-bd85eaf8e26d",
    "name": "8 ADET ERDİNGER",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2560,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2dff4c37-2399-4967-a4d6-7fe42381c013.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "98b51d04-e5c9-43cf-8878-b42ba3361e4f",
    "name": "8 ADET BECK'S",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2080,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1314c07b-ab8a-4d50-bf5c-3d6245cf7066.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "929c6541-3fd2-4fc2-b7a0-588c15ce691d",
    "name": "8 ADET CORONA",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0a631355-52f6-478a-b271-322e2dcffd68.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "516ca572-3e28-453a-b7f6-3b1c9b104459",
    "name": "8 ADET HOEGAARDEN",
    "description": "Yanında radyo bira tabağı ikramımızdır.",
    "price": 2560,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e4d1dd4b-3a2f-44bd-9d63-5710525342ef.jpg",
    "category": "beers",
    "tags": [
      "8'Lİ KOVALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c2a04766-c2f7-4387-8f20-972556c939b0",
    "name": "Efes Malt Şişe (50 CL)",
    "description": "19.00'a kadar",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4e0d5b8e-ecea-4b2c-ac77-51339c3f74db.jpg",
    "category": "campaigns",
    "tags": [
      "19:00'A KADAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3bd30f80-9a96-4e58-a273-8843737f4103",
    "name": "Beck's Fıçı (50 CL)",
    "description": "19.00'a Kadar",
    "price": 150,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "campaigns",
    "tags": [
      "19:00'A KADAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7f7aa559-d909-440d-a6cc-d0641de3256a",
    "name": "Efes Pilsen Şişe (50CL)",
    "description": "19.00'a kadar",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/695d0fcc-1512-4e55-a045-1d1e72d96f5c.jpg",
    "category": "campaigns",
    "tags": [
      "19:00'A KADAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6712e1f7-c4ce-4963-8966-6f83c793f054",
    "name": "Efes Malt Fıçı (50 CL)",
    "description": "19.00'a kadar",
    "price": 130,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6f3df497-48cd-492b-8800-10da66b4c54e.jpg",
    "category": "campaigns",
    "tags": [
      "19:00'A KADAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0b9c43bd-094a-4607-92a7-74573051d38d",
    "name": "Stella Artois Fıçı (50 CL)",
    "description": "19.00'a kadar",
    "price": 150,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/0b9c43bd-094a-4607-92a7-74573051d38d/9eb4ece7-20a4-4a93-9922-a2f808a35dc4/inside.webp",
    "category": "campaigns",
    "tags": [
      "19:00'A KADAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b03745a6-314b-4293-8f02-6f1e4df0ff7f",
    "name": "TÜM SHOTLAR",
    "description": "5 SHOT 600₺",
    "price": 600,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/28688a53-5bdb-4062-9ff4-eb96fa6fa920.jpg",
    "category": "campaigns",
    "tags": [
      "SHOTLAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "0afaabc3-b828-42fb-bf22-0718c6bb35c8",
    "name": "LONG ISLAND",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (Kola, Gin, Vodka, Rom, Triple Sec, Tekila, Limonun eşsiz birleşimiyle hazırlanan bu kokteyl, güçlü ve ferahlatıcı tadıyla sizi serinletecek.)",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/623aaf02-77eb-4239-98a4-c5c5bc35b5bc.jpeg",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5a9bf0b4-c3e4-4504-bb1a-6de3c990e3fe",
    "name": "APEROL SPRİTZ",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (Prosecco, Luxardo Aperativo, Sade Soda)",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6e981aec-d1b9-4344-9d0a-961791a49668.jpeg",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "item-258",
    "name": "GREEN SAFARI",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (Botanik gin ve citrus blend’in ferah narenciye karakteri; kuzu kulağının doğal ekşiliğiyle buluşuyor.)",
    "price": 480,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=80",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d158bc94-8a38-40a2-afde-0ba22660bab7",
    "name": "MATADOR",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (Vodka'nın zarafeti, ev yapımı şeftali şurubunun kadifemsi tatlılığıyla buluşuyor. Portakal suyunun canlılığı ve lime’ın keskin sitrik dokunuşu, bu içkiyi hem serinletici hem de enerjik kılıyor. Yumuşak ama capcanlı bir içim, günün her anına yakışır.)",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/00128d10-efed-43ca-8bd1-6dea58d18d64.jpeg",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ea744fb7-011c-4a9c-acb7-85f6ac76826f",
    "name": "CUBA LIBRE",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (Küba’nın özgürlük sloganından adını alan Cuba Libre, rom’un sıcak karakteri, kolanın yumuşak dokusu ve lime’ın canlı dokunuşuyla ikonik bir klasik olarak öne çıkar.)",
    "price": 440,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/ea744fb7-011c-4a9c-acb7-85f6ac76826f/d8cc7127-7fec-4f2f-8686-1885395680df/inside.webp",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "452dd9d7-749b-4426-8cc0-2632ef173b9c",
    "name": "SLAYY!!",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (eşil Elmalı Vodka’nın enerjisi, taze elmanın doğallığıyla birleşiyor. Limon suyunun ekşi dokunuşu ise bu ferahlığı adeta tamamlıyor. Hafif, keskin ve uyandırıcı bir tat. Özellikle sıcak günlerin en serin kaçamağı)",
    "price": 420,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/452dd9d7-749b-4426-8cc0-2632ef173b9c/6690d865-4489-42a6-bd7f-eaf5426a9331/inside.webp",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1ea101b3-353c-4814-8299-285d577a2098",
    "name": "SORREL",
    "description": "PAZAR, PAZARTESİ, SALI VE PERŞEMBE GÜNLERİ 1+1 fırsatını kaçırma! (Taze kuzu kulağının hafif baharatsı ve doğal tazeliği, tekila ve portakal likörünün zengin aromalarıyla mükemmel bir denge oluşturuyor. Limon suyunun ekşiliği ise bu kokteyle ferahlatıcı bir son dokunuş katıyor)",
    "price": 480,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/1ea101b3-353c-4814-8299-285d577a2098/5c318aa0-7a7a-406d-8b3f-3cc498f1b5d1/inside.webp",
    "category": "campaigns",
    "tags": [
      "1+1 KOKTEYL"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3bac867c-3ac3-44a4-bd60-791232268a01",
    "name": "BEEFEATER GİN TONİC",
    "description": "",
    "price": 460,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6a9e649a-76a0-4785-b398-249fafcb72ee.jpg",
    "category": "cocktails",
    "tags": [
      "GİN KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "167c925a-31d1-45ec-b750-ad0fed388bdc",
    "name": "BEEFEATER GİN FİZZ",
    "description": "",
    "price": 470,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a2250352-95ed-4d3f-b015-8dc6cf7a53b0.jpg",
    "category": "cocktails",
    "tags": [
      "GİN KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "71dcaeea-9613-4efb-9e21-d9af572156a8",
    "name": "STIRLING GIN TONİC",
    "description": "",
    "price": 380,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2a0d279b-1d21-476e-852c-58ebf6b52cc0.jpg",
    "category": "cocktails",
    "tags": [
      "GİN KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "65cfd394-b28c-489b-9299-4b1d6f30a13c",
    "name": "STIRLING GİN SODA",
    "description": "",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/457c7c29-7d32-49ed-9af6-766748e0098d.jpg",
    "category": "cocktails",
    "tags": [
      "GİN KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f8bf73ca-1d0b-412b-9ed4-1b01b64e034b",
    "name": "BEEFEATER GİN SODA",
    "description": "",
    "price": 470,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7dc5653c-4b72-4a30-9d5d-d9aa1646edc4.jpg",
    "category": "cocktails",
    "tags": [
      "GİN KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0d4e4c82-17b6-46e5-8ab4-86f30e99dbef",
    "name": "STİRLİNG GİN FİZZ",
    "description": "",
    "price": 390,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5864497f-b444-45b4-ab4d-934371891001.jpg",
    "category": "cocktails",
    "tags": [
      "GİN KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "55e35587-bdc6-4da5-82b6-d77fb1bd130a",
    "name": "PINEAPPLE KISS",
    "description": "Vodka, Taze Ananas ve Ev Yapımı Nar Sosunun eşsiz uyumuyla hazırlanan Pineapple Kiss, Tropik Bir Tat Deneyimi sunar. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma!",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/91a8f8ae-f9ff-4755-bd3c-3ad26d942656.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "fb46dd8c-6a9b-452e-8c4f-85f4adeb3eea",
    "name": "BLAZE",
    "description": "Botanik gin ve Safari’nin meyvemsi gövdesine, sweet chili’nin ateşli acısı eşlik ediyor. Elma suyunun yumuşak tatlılığıyla dengelenen; meyvemsi, baharatlı ve net acılı bir karışım. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma!",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/991acff9-b6f1-48d3-9a66-cbffe6b2532d.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "ee3574f7-f370-4339-93cc-941e2a6f1368",
    "name": "ACI BADEM",
    "description": "Amaretto’nun sıcak badem ve hafif vanilya tonları; canlı turunç dokunuşlarıyla birleşerek pürüzsüz ve dengeli bir içim sunar. (Amaretto, Limon Suyu, Şeker)",
    "price": 460,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7aacab4d-5e6a-4f75-847e-ed13827c7c73.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "1958c179-087b-4e71-b083-80da35599a15",
    "name": "CACİKİ",
    "description": "Anadolu’nun cacığını alıp bambaşka bir boyuta taşıyan bu kokteyl, tanıdık bir lezzetin modern, cesur bir yorumu. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (Yoğurt Likörü, Rom, Triple Sour, Taze Fesleğen ve Salatalık.)",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/db1835b7-7656-4c10-842a-348149624071.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "131f134e-b587-4889-b0aa-c59fbb4811a6",
    "name": "SANGRIA",
    "description": "Beyaz Şarap, Safari, Şeftali likörü, Gin ve Elma Suyunun mükemmel uyumuyla hazırlanan Sangria, Taze Yeşil Elma, Ananas, Çilek ve Portakal Parçaları ile her yudumda Meyve Bahçelerinin Taze Aromasını sunuyor. (Beyaz Şarap, Safari, Şeftali likörü, Gin, Yeşil Elma Suyu, Taze Çilek, Taze Ananas, Taze Yeşil Elma, Taze Portakal)",
    "price": 270,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "bb71f471-cd21-4122-bad7-c1cbf213df8a",
    "name": "VERRY BERRY",
    "description": "Vanilya Vodka, Tatlı-Ekşi Sos, Frambuaz, Böğürtlen ve Çileğin eşsiz uyumuyla hazırlanan Verry Berry, Taze ve Canlı bir tat sunar.",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/53e6b191-f9a9-4e35-bb57-788a3b80814e.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "dc894897-a2fd-4c89-b2a5-2a9c8acfecf2",
    "name": "OLIVE OIL SOUR",
    "description": "Zeytinyağıyla zarifçe yumuşatılmış rom, portakal ve limonun ferah uyumuyla modern ve sıra dışı bir sour deneyimi sunuyor. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (Zeytinyağ ile infüze edilmiş Rum, Portakal Suyu, Limon Suyu,)",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c43d8d1f-2184-4062-a847-06a2c8f39fa0.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "7bfc258c-478e-48b8-bd26-40b4610379f9",
    "name": "SLAYY!!",
    "description": "Yeşil Elmalı Vodka’nın enerjisi, taze elmanın doğallığıyla birleşiyor. Limon suyunun ekşi dokunuşu ise bu ferahlığı adeta tamamlıyor. Hafif, keskin ve uyandırıcı bir tat. Özellikle sıcak günlerin en serin kaçamağı. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (Yeşil Elmalı Vodka, Taze Yeşil Elma, Limon Suyu)",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6874a8b7-aa66-4505-a511-db224f91ce4c.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "80264ee7-23ba-43ef-a0c7-b914df69a7e4",
    "name": "GREEN SAFARI",
    "description": "Stirling Gin ve taze narenciyelerin üzerine çiçeksi mürver dokunuşu. Hafif tatlı, ferah ve dengeli. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (Botanik gin ve citrus blend’in ferah narenciye karakteri; kuzu kulağının doğal ekşiliğiyle buluşuyor. Akdeniz salata sosunun aromatik tuzlu dokunuşu ve mürver çiçeğinin floral tatlılığıyla dengelenen, canlı, sofistike ve sıra dışı bir Akdeniz kokteyli.)",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c9a8b775-3cf5-4d3f-9ee7-aef2268881a7.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "21ccf44b-532e-4876-b332-aa42798837d5",
    "name": "AŞKO KUŞKO",
    "description": "Vanilyalı vodka’nın yumuşaklığıyla açılan bu kokteyl, yeşil elmalı vodka ve şeftali likörüyle tatlı bir denge yakalıyor. Kızılcık suyunun hafif ekşiliği ve limonun ferahlatıcı etkisi, taze çilekle birleşerek damakta katman katman bir lezzet bırakıyor.PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (Vanilyalı Votka, Yeşil Elmalı Vodka, Şeftali Likörü ,Kızılcık Suyu,Limon Suyu, Şeker Şurubu, Taze Çilek, Taze Yeşil Elma)",
    "price": 460,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/29dff219-485c-49bd-a8cb-efb230903cd9.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "3238176b-1dd3-41d5-8b18-dc5aa32a3308",
    "name": "MATADOR",
    "description": "Vodka'nın zarafeti, ev yapımı şeftali şurubunun kadifemsi tatlılığıyla buluşuyor. Portakal suyunun canlılığı ve lime’ın keskin sitrik dokunuşu, bu içkiyi hem serinletici hem de enerjik kılıyor. Yumuşak ama capcanlı bir içim, günün her anına yakışır. (Vodka, Lime ve Ev Yapımı Şeftali Sosu)",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f1445008-3928-428b-a536-2b6f573c3d1f.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "9edce76d-0097-4393-b816-6d58698cd9ba",
    "name": "Spiced Bay",
    "description": "Spiced rom’un sıcak baharat notaları; aperativo’nun hafif aromatik dokunuşu, ananas ve portakal suyunun tropikal canlılığı ve nar sosunun tatlı dengesiyle birleşiyor. (Spiced Rom, Aperativo, Ananas Suyu, Portakal Suyu, Ev Yapımı Nar Sosu)",
    "price": 460,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/9edce76d-0097-4393-b816-6d58698cd9ba/63dcd421-bcc3-424c-9e43-7b94469f075a/inside.webp",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "65361ebc-c834-4ae8-9ff0-18b1f29d94bc",
    "name": "DOLCERA",
    "description": "Tiramisu’nun tatlı cazibesi, yoğurt likörünün yumuşak dokusu ve sweet & sour’un canlı dokunuşu bir araya geldi; ortaya serin, farklı ve bağımlılık yaratan bir frozen çıktı. (Tiramisu Likörü, Yoğurt Likörü, Sweet&Sour Mix)",
    "price": 460,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/65361ebc-c834-4ae8-9ff0-18b1f29d94bc/83d29132-c249-4331-aee9-104f00db3f0a/inside.webp",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "277c67d0-37bd-4d49-9425-a0fcb9ad42e6",
    "name": "Cranky",
    "description": "Shanky’s Whip’in vanilya, karamel ve hafif kahve notaları; kızılcık ve portakal suyunun canlı meyve aromaları, nar şurubunun tatlı dokunuşuyla birleşerek dengeli ve akıcı bir içim sunar. (Shanky's Whip, Kızılcık Suyu, Portakal Suyu, Ev Yapımı Nar Sosu)",
    "price": 460,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/277c67d0-37bd-4d49-9425-a0fcb9ad42e6/1f942757-d8df-49f6-b3e9-f6f3eaa2e444/inside.webp",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "1db30ead-b325-4aaf-8f4a-38d78ae0795c",
    "name": "GIN BASIL SMASH",
    "description": "Taze fesleğenin doğal, hafif baharatlı aroması, ginin botanik notalarıyla birleşiyor. Limon suyunun ekşiliği ise kokteyle tazelik katıyor, her yudumda doğal bir ferahlatıcı etki bırakıyor. PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (London Dry Gin,Taze Fesleğen,Lime,Şeker,Limon,Sade Soda)",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/96bb2635-03a4-487c-828b-7c7bad719be7.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "7604e099-60c5-403f-9a2f-05fa30802022",
    "name": "SORREL",
    "description": "Taze kuzu kulağının hafif baharatsı ve doğal tazeliği, tekila ve portakal likörünün zengin aromalarıyla mükemmel bir denge oluşturuyor. Limon suyunun ekşiliği ise bu kokteyle ferahlatıcı bir son dokunuş katıyor PAZAR, PAZARTESİ, SALI GÜNLERİ TÜM KOKTEYLLERDE 1+1 fırsatını kaçırma! (Taze Kuzu Kulağı,Tekila,Triple Sec)",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5e30be87-efbf-4487-a2c3-d2939567299b.jpg",
    "category": "cocktails",
    "tags": [
      "İMZA KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "d236f3b9-ad21-435d-9030-b2ac88c3442a",
    "name": "NEGRONI",
    "description": "London Dry Gin, Garrone Rosso ve Campari'nin klasik uyumuyla hazırlanan Negroni, sofistike ve cesur bir tat sunuyor.",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/966623fb-5406-4924-9445-3208004deb89.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fc9b0df8-4c1e-41d7-98e0-4c6853a7d1ce",
    "name": "APEROL SPRİTZ",
    "description": "İtalya’dan dünyaya yayılan, ferahlığın ve zarafetin simgesi ikonik kokteyl. (Prosecco, Luxardo Aperativo, Sade Soda)",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3cd75f32-9112-44f9-bb29-67275b0878d4.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "88a94ea5-cd91-476d-8437-629b18a5e475",
    "name": "MARGARITA KLASİK",
    "description": "Tekila, Lime ve Triple Sec'in mükemmel uyumuyla hazırlanan bu klasik kokteyl, ferahlatıcı ve canlandırıcı lezzetiyle sizi Meksika sahillerine götürecek.",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/727f8672-796e-4331-8ed5-56cab62ce2b9.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a10c4f50-e7ef-40fc-8bff-fe69cb25e84e",
    "name": "MOJİTO KLASİK",
    "description": "Taze Nane, Lime ve Rom'un mükemmel uyumuyla hazırlanan Mojito, sizi Karayiplerin ferahlatıcı esintisine götürecek.",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b1c2b5ab-55e2-4b85-9b94-439b3fe28deb.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b5b47e0e-3ec2-4cf0-9811-073a79bac46b",
    "name": "ESPRESSO MARTINI",
    "description": "Taze Espresso,Vodka ve Kahlua'nın muhteşem uyumuyla hazırlanan Espresso Martini, enerji ve keyfi bir arada sunuyor.",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/3fc45fa1-6038-48b6-88be-8c807975bc47.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "40c67ca2-eb95-4e22-aa4e-7e2b15c9e266",
    "name": "MOJITO ÇİLEK",
    "description": "Rom, Taze Çilek, Nane ve Lime ile hazırlanan bu ferahlatıcı kokteyl, yaz akşamlarınızın vazgeçilmezi olacak.",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/bd75adfe-d4f0-48c5-9da4-268e0d3de485.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "d64d141f-65d2-4f10-8381-ec0a503a3e1b",
    "name": "MARGARİTA ÇİLEK",
    "description": "Çilekli yaz serinliği! Margarita'nın lime ve tekila klasiği, bu kez çilekle dans ediyor. Ferah, neşeli ve tehlikeli lezzetli. (Tekila, Triple Sec, Çilek, Lime.)",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/58cd1aed-34f8-4d4f-a415-593d79149f90.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b089241a-f553-4df2-aabf-25b1d0851082",
    "name": "SEX ON THE BEACH",
    "description": "Vodka, Şeftali likörü, Portakal ve Ev Yapımı Nar Sosu ile hazırlanan Sex on the Beach, tropikal bir kaçış sunuyor.",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/fea59d29-2d2e-413f-8e60-bb6e646c8607.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5ee132a8-1631-4ef3-a444-627ddc9896f6",
    "name": "COSMOPOLITAN",
    "description": "Limon Aromalı Vodka, Triple Sec ve Taze Kızılcık ile hazırlanan Cosmopolitan, şehirli zarafeti ve tazeliği bardağınıza getiriyor.",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/13185d92-13c0-4f55-b03e-cb314de41ec3.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9721f78a-6239-40dc-a620-8dcfcc6ae8f1",
    "name": "MOJITO ELMA",
    "description": "Yeşil Elmalı Vodka, Taze Yeşil Elma, Lime ve Nane ile hazırlanan Mojito Elma, ferahlatıcı ve canlandırıcı bir lezzet sunuyor.",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/4c7632e4-681d-4c01-b7cd-60de4550ea00.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5a764455-1259-4618-92df-a03271e75679",
    "name": "LONG ISLAND",
    "description": "Kola, Gin, Vodka, Rom, Triple Sec, Tekila, Limonun eşsiz birleşimiyle hazırlanan bu kokteyl, güçlü ve ferahlatıcı tadıyla sizi serinletecek.",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/cc558e02-caa4-4a60-9011-a2f6fc5dc556.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a421cdc7-8286-4024-9c98-933f58742c67",
    "name": "ORGASM",
    "description": "Vodka, Kahlua, Krema Likörü, Süt ve Tarçın ile hazırlanan bu kokteyl, yumuşak ve kremsi tadıyla sizi mest edecek.",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/eae8d2d5-463e-40f8-8c16-78fad651c8be.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "51756053-8961-44e2-9a3d-6c09ea52a2c1",
    "name": "WHISKEY SOUR",
    "description": "Bourbon Viski, Limon, Yumurta ve Şekerin mükemmel uyumuyla hazırlanan bu kokteyl, tatlı ve ekşi lezzetlerin dengesiyle sizi büyüleyecek.",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b2d78731-7f83-4e28-ba5e-197ac31d09e4.jpg",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "80fed866-1657-4e59-89d2-0489b8a4645a",
    "name": "OLD FASHIONED",
    "description": "Güçlü, rafine ve ikonik… Bourbon viski, şeker ve aromatik bitter ile hazırlanan Old Fashioned, klasiklerin en asil yorumlarından biridir. (Bourbon Viski, Angostura Bİtter, Şeker)",
    "price": 450,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/80fed866-1657-4e59-89d2-0489b8a4645a/bc76a67c-d6c2-41eb-9ba9-4e8f62f92edb/inside.webp",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "23644ec1-8931-49da-9ef8-20b5a8bdb914",
    "name": "CUBA LIBRE",
    "description": "Küba’nın özgürlük sloganından adını alan Cuba Libre, rom’un sıcak karakteri, kolanın yumuşak dokusu ve lime’ın canlı dokunuşuyla ikonik bir klasik olarak öne çıkar. (White Rom, Lime Suyu, Cola)",
    "price": 440,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/23644ec1-8931-49da-9ef8-20b5a8bdb914/ff51695d-abab-4acf-8908-5e90e948bde9/inside.webp",
    "category": "cocktails",
    "tags": [
      "EVRENSEL KOKTEYLLER"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "46e10026-4c86-465d-bfc2-83b7cf104aa0",
    "name": "STIRLING GIN ( Tek )",
    "description": "5cl olarak servis edilir. Yoğun ardıç ve narenciye notaları, hafif baharat ve bitki dokunuşlarıyla dengelenmiş. Canlandırıcı ve dengeli bir içim sunar, yumuşak ve temiz bir bitişle.",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ba7a67c4-aa11-4aaf-8afc-c5e7e480ae9d.jpg",
    "category": "spirits",
    "tags": [
      "GIN"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1f35c9eb-506b-42a6-b766-504591a28208",
    "name": "STIRLING GIN ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 400,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f40af578-3501-4626-b1df-ff7ebafc3ba4.jpg",
    "category": "spirits",
    "tags": [
      "GIN"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c7e0d894-e997-44b6-b023-2168a9f2ed54",
    "name": "BEEFEATER ( Tek )",
    "description": "5cl olarak servis edilir",
    "price": 380,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1dc049fc-cdbc-4984-913d-307727228535.jpg",
    "category": "spirits",
    "tags": [
      "GIN"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "da4cb63e-2dea-4797-8420-e874bb3da616",
    "name": "BEEFEATER ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/373a1372-e8db-4b52-a266-ac326d504cce.jpg",
    "category": "spirits",
    "tags": [
      "GIN"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b0360133-4d9c-4e4c-af36-3d3ddaf76dde",
    "name": "PASSOA",
    "description": "7 cl olarak servis edilir.",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/83db3cd0-a3ce-4119-b77b-fec63f42b0ae.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8e346ee2-6689-4f4b-a305-59ad2624090d",
    "name": "LUXARDO SOUR APPLE",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/263e8cf8-70ff-4312-8965-4486757a39e0.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "949082da-89fc-4e4d-b77d-fb6d68b3d1fa",
    "name": "PUSCHKIN BLACK BERRIES",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1015940f-1589-4d22-9265-d1573eabf904.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a0a427b2-eedf-4bc6-b330-b1366c0966d9",
    "name": "PUSCHKIN PASSIONFRUIT",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/243d6053-83fb-4c2b-afe5-1709cd903ce0.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ea9997f1-27d2-45b1-8fbf-b4069be74f34",
    "name": "PUSCHKIN ICE MINT",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/c9adbfcf-c871-4fda-b353-0eec15454df6.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6268732c-801e-42ef-bfbb-519ba2d46bbe",
    "name": "PUSCHKIN RED ORANGE",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/556d4229-b5d9-4b40-8fb2-2d2e5ef102d1.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6328dc06-f3fd-4a99-a08c-056f2f15e1f5",
    "name": "PUSCHKIN WATERMELON",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/90577bed-dabc-43f9-814f-9e890bdfbb46.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f5cbebc2-ba2f-4217-a56a-cc802d66aff8",
    "name": "PUSCHKIN BLUEBERRY",
    "description": "7 cl olarak servis edilir.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ca011e21-3ac9-452f-aa6d-05fbc5a6b45f.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7c8e825f-ea4e-4ad2-894d-f19cf658a148",
    "name": "BOL'S YOGURT LİKÖRÜ",
    "description": "7cl olarak servis edilir",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/2524fec9-cdbe-4fa4-8ee8-6386f3808547.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "51e974c1-4cfb-4bcb-9399-dcc4ee6a34dd",
    "name": "IRLANDA KREMA LİKÖRÜ ( Duble )",
    "description": "10cl olarak servis edilir.",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/790f89b3-7385-4081-9962-d828c85abe30.jpg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "87c71684-85c3-4cb1-adb0-f315d7d77012",
    "name": "MALIBU",
    "description": "7 cl olarak servis edilir.",
    "price": 330,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/ff696a32-218b-4d6e-9782-3c0b75124113.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "edad4e87-181e-4365-ab4d-e01475434550",
    "name": "LUXARDO MARASCHINO",
    "description": "7 cl olarak servis edilir.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1f8500ad-c171-4d6e-afce-1ef7dfe914d3.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e58bb83d-8e47-4400-b0e1-ef9ce583526b",
    "name": "SAFARI",
    "description": "7 cl olarak servis edilir.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e1a59bab-9f4b-4753-8bc4-5fb9fa2e16ba.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "88ae6150-ecab-4c48-a193-299644b22170",
    "name": "KEGLEVICH PESCA LIQUER",
    "description": "7 cl olarak servis edilir.",
    "price": 330,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/78a01e56-e76a-4dfe-b479-d16edabd983e.jpeg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cc7e00d7-f061-4d1c-a4f0-3302b87d8210",
    "name": "IRLANDA KREMA LİKÖRÜ (Tek)",
    "description": "5cl olarak servis edilir. Zengin krema ve çikolata notaları, hafif vanilya ve kahve dokunuşlarıyla. Pürüzsüz ve tatlı bir içim sunar, yumuşak ve ipeksi bir bitişle.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a9fb6e6c-3252-4293-bc07-112703221349.jpg",
    "category": "spirits",
    "tags": [
      "LİKÖR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "789f6e6c-7408-46d4-b8dd-d5598202df27",
    "name": "SPICED RUM",
    "description": "5cl olarak servis edilir. Vanilya, tarçın ve karamel notalarıyla sıcak ve baharatlı bir tat sunar. Pürüzsüz yapısıyla damakta uzun süre kalır.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a94e4d04-eef8-4541-b278-1d9bd1bdd886.jpeg",
    "category": "spirits",
    "tags": [
      "ROM"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8c219c99-9045-4e18-8024-9264ba7f29f4",
    "name": "CAPTAİN WHİTE RUM (Tek )",
    "description": "5 cl olarak servis edilir.",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/6fc7fac0-4baa-4a2e-af69-622901d55986.jpg",
    "category": "spirits",
    "tags": [
      "ROM"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "82fbaa8e-2b08-4e30-9a78-9877e511ccb2",
    "name": "CAPTAİN WHİTE RUM ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/26975fc9-63f3-4318-a430-1706dd152749.jpg",
    "category": "spirits",
    "tags": [
      "ROM"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "eb60ac36-5370-40a3-99a3-8500c8c198b2",
    "name": "SMIRNOFF NORTH VODKA",
    "description": "7cl olarak servis edilir. Yaban mersini ve turunçgil notalarıyla ferahlatıcı bir deneyim sunar. Pürüzsüz ve dengeli yapısı, tatlı ve hafif ekşi aromalarla tamamlanır.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8fcbb0fe-8b8e-415c-a247-803ef2f5f856.jpeg",
    "category": "spirits",
    "tags": [
      "VODKA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "87da5e5f-257c-4889-9f48-b20a4a4bceb5",
    "name": "LİTVANYA VODKA ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/11a22ba9-b5da-4686-9b2a-1cb298cac26c.jpg",
    "category": "spirits",
    "tags": [
      "VODKA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "599ca1c9-f542-4fe6-bae7-8df4b803f108",
    "name": "LİTVANYA VODKA ( Tek )",
    "description": "5cl olarak servis edilir.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/15cce97a-9b05-477d-ada2-2b6cfdd8e530.jpeg",
    "category": "spirits",
    "tags": [
      "VODKA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "cb3e0c3a-5251-46c3-893e-46178bf7d277",
    "name": "ABSOLUT VODKA ( Tek )",
    "description": "5cl olarak servis edilir",
    "price": 380,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a416b2d5-ccff-4380-88e3-be65f6b13d45.jpg",
    "category": "spirits",
    "tags": [
      "VODKA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "97b283bb-ce18-42e9-8c2c-fbb2ba16b367",
    "name": "ABSOLUT VODKA ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b4f2b4ef-81ba-49cb-9d70-adcc1622fe75.jpg",
    "category": "spirits",
    "tags": [
      "VODKA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1ae40776-47a2-43cf-9a87-8183076a4a7d",
    "name": "ROSSO",
    "description": "7cl olarak servis edilir. Zengin kırmızı meyve ve vanilya notaları, hafif baharat ve bitki dokunuşlarıyla dengelenmiş. Tatlı ve pürüzsüz bir içim sunar, zarif ve dengeli bir bitişle.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/234824c4-b5be-441c-92fb-5636f8317463.jpeg",
    "category": "spirits",
    "tags": [
      "VERMUT"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0fbf965b-542a-4043-acbb-e5dbe7af030e",
    "name": "BIANCO",
    "description": "7cl olarak servis edilir. Taze çiçeksi ve bitkisel notalarla ferahlatıcı bir deneyim sunar. Hafif tatlılık ve narenciye aromalarıyla dengeli, yumuşak bir bitiş sağlar.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/55198c2f-9a31-402a-9681-198f669f7635.jpeg",
    "category": "spirits",
    "tags": [
      "VERMUT"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "247eae1a-b1a6-4e6e-9643-9f1ac3cf321d",
    "name": "DRY",
    "description": "7cl olarak servis edilir. Keskin ve kuru tadı, ardıç ve narenciye notalarıyla dengelenmiş. Hafif baharat ve bitki dokunuşlarıyla. Canlandırıcı ve temiz bir içim sunar.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a5e22c3e-b6e7-42c5-b284-29eefea9cfd9.jpeg",
    "category": "spirits",
    "tags": [
      "VERMUT"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "05674dff-3ff7-4e31-9b41-54e8d0b03773",
    "name": "SAKİ RAKI ( Tek )",
    "description": "4cl olarak servis edilir. Su ikramımızdır.",
    "price": 380,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8e947036-3b55-4d86-be99-726914fa295c.jpg",
    "category": "spirits",
    "tags": [
      "RAKILAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a586bac8-f179-4746-bace-c3b87e2eb8eb",
    "name": "SAKİ RAKI ( Duble )",
    "description": "8cl olarak servis edilir. Su ikramımızdır.",
    "price": 480,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/7995aef7-bd16-40a8-989a-90ee208bfd24.jpg",
    "category": "spirits",
    "tags": [
      "RAKILAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0fab3724-f8b6-4116-975b-04e74b9293a7",
    "name": "TEKİLA",
    "description": "7cl olarak servis edilir. Agave bitkisinin eşsiz karakteriyle öne çıkar. Topraksı ve hafif tatlı aromalar, biberli ve narenciye notalarıyla dengelenir. Temiz ve canlı bir bitiş sunar.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a7e2b285-0461-4a58-a6ba-ce31579fab81.jpeg",
    "category": "spirits",
    "tags": [
      "TEKİLA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6b160b11-3a7e-4603-b624-f28eb2cfe436",
    "name": "SİERRA TROPİCAL",
    "description": "7cl olarak servis edilir. Sierra'nın agave bazlı kalitesi; ananas, mango ve diğer tropik meyve aromalarıyla birleşerek yumuşak, meyvemsi ve eğlenceli bir profil sunar.",
    "price": 370,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/160f2827-ce44-4384-9454-527149c8a713.jpeg",
    "category": "spirits",
    "tags": [
      "TEKİLA"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a5750889-6377-4987-a927-d49b9a08b2e6",
    "name": "Hibiscus Çayı",
    "description": "",
    "price": 110,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "teas",
    "tags": [
      "BİTKİ ÇAYLARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "869c18fc-f0c9-469f-b552-8fa77946fce1",
    "name": "Yeşil Çay",
    "description": "",
    "price": 140,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/8fea9a9e-0c3a-4529-ab75-ef7111ab1276.jpeg",
    "category": "teas",
    "tags": [
      "BİTKİ ÇAYLARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7924cb09-9587-4089-a8f6-6774ed105f8c",
    "name": "Adaçayı",
    "description": "",
    "price": 120,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "teas",
    "tags": [
      "BİTKİ ÇAYLARI"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fe055118-8cd8-4aad-b4cb-e2cc17f47fa8",
    "name": "JAMESON IRLANDA (Tek)",
    "description": "5cl olarak servis edilir. Hafif çiçek ve baharat notaları, vanilya ve fındık izleriyle dengelenmiş. Pürüzsüz ve tatlı bir içim sunar, hafif meşe ve bal dokunuşlarıyla.",
    "price": 330,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/58332dd3-c3d7-4102-8f2d-d9fe4c1f388a.jpg",
    "category": "whiskies",
    "tags": [
      "İRLANDA VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "73a86b51-ab77-465f-b605-7f358427236e",
    "name": "JAMESON IRLANDA (Duble)",
    "description": "10cl olarak servis edilir. Hafif çiçek ve baharat notaları, vanilya ve fındık izleriyle dengelenmiş. Pürüzsüz ve tatlı bir içim sunar, hafif meşe ve bal dokunuşlarıyla.",
    "price": 470,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/df0c4612-205f-46a3-bee6-20e5a0d68889.jpg",
    "category": "whiskies",
    "tags": [
      "İRLANDA VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6121a3f4-ba11-42f1-b756-bc133239edd8",
    "name": "JAMESON BLACK BARREL (Duble)",
    "description": "10cl olarak servis edilir. Yoğun karamel ve vanilya notaları, baharat ve meşe dokunuşlarıyla dengelenmiş. Pürüzsüz ve zengin bir içim sunar, fındık ve şekerleme izleriyle.",
    "price": 520,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/81d8abc0-2a2a-437f-b61a-b5772055e9cb.jpg",
    "category": "whiskies",
    "tags": [
      "İRLANDA VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f2ed0bae-0d92-4fe1-92bd-67b18025a6c6",
    "name": "JAMESON BLACK BARREL (Tek)",
    "description": "5cl olarak servis edilir. Yoğun karamel ve vanilya notaları, baharat ve meşe dokunuşlarıyla dengelenmiş. Pürüzsüz ve zengin bir içim sunar, fındık ve şekerleme izleriyle.",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e646604e-554b-4fb9-a0ca-3aae105176ce.jpg",
    "category": "whiskies",
    "tags": [
      "İRLANDA VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a31db676-a7ff-4f7b-8900-3974d4f7a48a",
    "name": "CHİVAS EXTRA SMOKY ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 520,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/f48773e8-256a-41a7-ac4d-65d93db65a2c.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "ed9acdc8-55e7-4099-93d4-414fdaf5aec1",
    "name": "CHİVAS REGAL 12 Y.O. ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 510,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1f220aa5-8ceb-4627-9619-301342650a7f.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "e8373747-4366-4a08-8856-7eff7db5d3ba",
    "name": "BELL'S (Duble)",
    "description": "10cl olarak servis edilir. Yoğun malt ve karamel aromaları, hafif meşe ve baharat notalarıyla dengelenmiş. Pürüzsüz ve zengin bir içim sunar, bal ve meyve izleriyle.",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/49f86218-e375-4014-90e3-5c566549c332.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c818b1b8-5d68-4711-b041-2c6e30b85eab",
    "name": "GLEN TALLOCH (Duble)",
    "description": "10cl olarak servis edilir",
    "price": 430,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/b825c97d-ff86-4e82-b13f-4afd0e63a36c.jpeg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "296d067f-43bc-48d2-978d-669e1cd17021",
    "name": "GLEN TALLOCH (Tek)",
    "description": "5cl olarak servis edilir",
    "price": 310,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/31e0ef8e-3629-4b9e-8baf-dbd89147e6e7.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "8eebae6d-70cd-4f65-91b6-a8149c9a8efa",
    "name": "CHİVAS EXTRA SMOKY ( Tek )",
    "description": "5cl olarak servis edilir",
    "price": 360,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/789c8555-ec1f-40b5-b67c-acc02528a383.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "bf48da6d-1b22-46fc-93b5-2beba68b2cc2",
    "name": "BELL'S (Tek)",
    "description": "5cl olarak servis edilir. Yoğun malt ve karamel aromaları, hafif meşe ve baharat notalarıyla dengelenmiş. Pürüzsüz ve zengin bir içim sunar, bal ve meyve izleriyle.",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a28b7bee-3647-4e49-9553-6abaf4ba8d19.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "a81a7a90-af9a-40b2-a813-e6714321a36f",
    "name": "CHİVAS REGAL 12 Y.O. ( Tek )",
    "description": "5 cl olarak servis edilir",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/5cd90f0b-50f5-4e7c-9930-72f6e9fdb369.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "df729bac-78f5-4352-a7ae-c8a3918e293a",
    "name": "JW BLACK RUBY ( Duble )",
    "description": "10cl olarak servis edilir. Koyu meyve aromaları ve yumuşak içimiyle keyfi uzatan özel bir viski.",
    "price": 500,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/a91a7146-9a0e-4e0b-aeb5-0326bdfd5a85.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "7553a4b6-193c-4ec7-84fc-6827e334ccae",
    "name": "JW BLACK RUBY ( Tek )",
    "description": "5cl olarak servis edilir. Koyu meyve aromaları ve yumuşak içimiyle keyfi uzatan özel bir viski.",
    "price": 350,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/24b6a714-b39f-472b-b7a5-1ab63e82ae31.jpg",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6d6fb6f7-42e7-4bb3-a171-45f356bbe14c",
    "name": "Johnnie Walker Red Label ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 500,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/6d6fb6f7-42e7-4bb3-a171-45f356bbe14c/4e273f3f-29b0-4244-9a89-58ca876d961d/inside.webp",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "1aa801e0-c25c-491b-9687-989299d0aa12",
    "name": "Johnnie Walker Red Label  ( Tek )",
    "description": "5cl olarak servis edilir",
    "price": 340,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/1aa801e0-c25c-491b-9687-989299d0aa12/4cba6b8b-072c-41a5-938e-01cb34ff610c/inside.webp",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "0732b8ac-1da1-45ce-968a-8defdde76f56",
    "name": "Johnnie Walker Double Black Label ( Tek )",
    "description": "5cl olarak servis edilir",
    "price": 370,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/0732b8ac-1da1-45ce-968a-8defdde76f56/b3a6d0e5-81da-4fdb-9bd5-c096f29f0c12/inside.webp",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9fb3dc28-8d71-48ff-a845-dfd14418c735",
    "name": "Johnnie Walker Double Black Label  ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 530,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/9fb3dc28-8d71-48ff-a845-dfd14418c735/8a632658-f029-4c91-8d48-b5c97ee8033b/inside.webp",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "32446acc-22d5-46b0-8dfd-ba39257b8400",
    "name": "Johnnie Walker Black Label ( Tek )",
    "description": "5cl olarak servis edilir",
    "price": 350,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/32446acc-22d5-46b0-8dfd-ba39257b8400/7c1d7c10-04de-4ec8-bc59-4aef117fe9dc/inside.webp",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "3581d270-33f0-4cef-b350-f6e6747f907a",
    "name": "Johnnie Walker Black Label ( Duble )",
    "description": "10 cl olarak servis edilir.",
    "price": 510,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/3581d270-33f0-4cef-b350-f6e6747f907a/0e31e2ee-7b14-407d-97fa-7b9f72faadff/inside.webp",
    "category": "whiskies",
    "tags": [
      "İSKOÇ VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c2bf874b-f262-43f0-868d-b4eb2b4343ef",
    "name": "JIM RED STAG (Duble)",
    "description": "10cl olarak servis edilir. Kiraz aromaları, vanilya ve karamel notalarıyla birleşerek tatlı ve meyvemsi bir içim sunar. Hafif meşe ve baharat dokunuşlarıyla dengelenmiş.",
    "price": 450,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/9d65c4c9-cf8f-4d30-b285-74b86679d156.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "6bc1ae70-8bca-469b-8143-2e135a180e9d",
    "name": "JIM BEAM HONEY (Duble)",
    "description": "10cl olarak servis edilmektedir. Zengin bal aromalarıyla tatlı ve pürüzsüz, vanilya ve meşe notalarıyla dengelenmiş bir viski deneyimi sunar.",
    "price": 420,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1577d59b-a179-4929-a62a-6a87d0ecc06c.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "9a94b245-5190-4759-af9d-824d875c963e",
    "name": "JIM BEAM WHITE (Duble)",
    "description": "10cl olarak servis edilir. Vanilya ve karamel aromaları, hafif meşe notalarıyla dengelenmiş, yumuşak ve tatlı bir içim sunar. Sıcak baharatlar ve şekerleme tadında.",
    "price": 440,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/16904de6-6215-4c68-af60-e549e5cbd8bb.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "5a338096-5e00-40f1-be47-148758d8d524",
    "name": "JIM BEAM BLACK (Duble)",
    "description": "10cl olarak servis edilir. Yoğun karamel ve vanilya aromaları, derin meşe notalarıyla zenginleştirilmiş. Pürüzsüz ve kompleks bir içim sunar, baharat ve fındık dokunuşlarıyla.",
    "price": 490,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/88e02849-b3a5-405b-a25c-5934418fc1eb.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b2a54cc9-1623-4b49-ac98-0f60568904c8",
    "name": "JIM BEAM HONEY (Tek)",
    "description": "5cl olarak servis edilmektedir. Zengin bal aromalarıyla tatlı ve pürüzsüz, vanilya ve meşe notalarıyla dengelenmiş bir viski deneyimi sunar.",
    "price": 300,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/123e1260-f4c7-4e6b-a4a7-2ed450d9ca32.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f57dc197-0559-492a-b991-696171db7eaa",
    "name": "JIM RED STAG (Tek)",
    "description": "5cl olarak servis edilir. Kiraz aromaları, vanilya ve karamel notalarıyla birleşerek tatlı ve meyvemsi bir içim sunar. Hafif meşe ve baharat dokunuşlarıyla dengelenmiş.",
    "price": 320,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/0989d18e-780e-46e2-a8e1-47f6d6bc549d.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4f5ff823-a6e3-4e40-ab7d-e6cc6fadfd4c",
    "name": "JIM BEAM WHITE (Tek)",
    "description": "5cl olarak servis edilir. Vanilya ve karamel aromaları, hafif meşe notalarıyla dengelenmiş, yumuşak ve tatlı bir içim sunar. Sıcak baharatlar ve şekerleme tadında.",
    "price": 310,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/e8cce946-e0ba-4655-870b-4157de35bdeb.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "59c406f0-4840-4838-bc6e-970c0ee81991",
    "name": "JIM BEAM BLACK (Tek)",
    "description": "5cl olarak servis edilir. Yoğun karamel ve vanilya aromaları, derin meşe notalarıyla zenginleştirilmiş. Pürüzsüz ve kompleks bir içim sunar, baharat ve fındık dokunuşlarıyla.",
    "price": 340,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gastro/menu/1a950ffb-4f17-4157-be95-ef05270f887f.jpg",
    "category": "whiskies",
    "tags": [
      "BOURBON VİSKİ KADEH"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "73a86a20-d717-49c3-8dea-8071f738f42e",
    "name": "CLAUSTHALER DRY HOPPED",
    "description": "",
    "price": 280,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "beers",
    "tags": [
      "ALKOLSÜZ BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "fafd3ac3-b4aa-49dc-830c-405b8cfece83",
    "name": "CLAUSTHALER LEMON",
    "description": "",
    "price": 280,
    "image": "https://cdn.moomenu.co/tenants/radyo/branchs/gorukle/menu/f17e6438-af1f-46ff-a8b0-deb22b808f23.jpeg",
    "category": "beers",
    "tags": [
      "ALKOLSÜZ BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "56c0b0bd-3213-438a-90d7-1dfe574f0119",
    "name": "JUPILER ALKOLSÜZ",
    "description": "",
    "price": 280,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/56c0b0bd-3213-438a-90d7-1dfe574f0119/055c461f-e071-4088-a126-d3a3dafd1b3d/inside.webp",
    "category": "beers",
    "tags": [
      "ALKOLSÜZ BİRALAR"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4c87ed9b-6dfb-4ff6-a659-654a8748f5a2",
    "name": "Cranky",
    "description": "Shanky’s Whip’in vanilya, karamel ve hafif kahve notaları; kızılcık ve portakal suyunun canlı meyve aromaları, nar şurubunun tatlı dokunuşuyla birleşerek dengeli ve akıcı bir içim sunar. (Shanky's Whip, Kızılcık Suyu, Portakal Suyu, Ev Yapımı Nar Sosu)",
    "price": 410,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/4c87ed9b-6dfb-4ff6-a659-654a8748f5a2/41caf13f-a3ce-433e-bf78-c798f56a7a3c/inside.webp",
    "category": "new",
    "tags": [
      "Yeni Ürünler"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "edeb08a7-e5c9-4cf2-a5fb-cac16bc1f391",
    "name": "Spiced Bay",
    "description": "Spiced rom’un sıcak baharat notaları; aperativo’nun hafif aromatik dokunuşu, ananas ve portakal suyunun tropikal canlılığı ve nar sosunun tatlı dengesiyle birleşiyor. (Spiced Rom, Aperativo, Ananas Suyu, Portakal Suyu, Ev Yapımı Nar Sosu)",
    "price": 410,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/edeb08a7-e5c9-4cf2-a5fb-cac16bc1f391/fd5c5f4c-85d3-4f3c-a1b5-f7adccab0e78/inside.webp",
    "category": "new",
    "tags": [
      "Yeni Ürünler"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "f3270594-d543-4999-bc1e-d881543343b0",
    "name": "Shot Oyunu",
    "description": "24 Adet Shot, 6 Farklı Aroma. Bi2Shot veya Bi2Friend Kartlarından Birini Seç Cesaretini Ortaya Koy. Shotlar 1cl Olarak Servis Edilir.",
    "price": 700,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/f3270594-d543-4999-bc1e-d881543343b0/6b20959d-f113-4ad5-a94b-52f2250be136/inside.webp",
    "category": "new",
    "tags": [
      "Yeni Ürünler"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "5084af9c-6475-4c4f-a8f5-b0ae687367df",
    "name": "Dolcera",
    "description": "Tiramisu’nun tatlı cazibesi, yoğurt likörünün yumuşak dokusu ve sweet & sour’un canlı dokunuşu bir araya geldi; ortaya serin, farklı ve bağımlılık yaratan bir frozen çıktı. (Tiramisu Likörü, Yoğurt Likörü, Sweet&Sour Mix)",
    "price": 410,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/5084af9c-6475-4c4f-a8f5-b0ae687367df/28c3c407-a97b-42a1-8b24-4a806e8a976d/inside.webp",
    "category": "new",
    "tags": [
      "Yeni Ürünler"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "b8f84d46-c8c0-4474-a0f2-bcc0d21060b4",
    "name": "Gara Guzu Tadım Seti",
    "description": "Tadım bardaklarında servis edilir. Blonde Ale’in çiçeksi ve meyvemsi zarafeti, Red Ale’in pancar ve çam balıyla gelen özgün karakteri, Mayhoş’un hibiskusla dengelenmiş aromatik ekşiliği ve Weiss Beer’ın ferah, baharatlı dokunuşu bir arada. Farklı stilleri deneyimlemek ve favorini bulmak için ideal.",
    "price": 480,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/b8f84d46-c8c0-4474-a0f2-bcc0d21060b4/5caa9631-63dc-4171-b1fe-9c970bf0b7ce/inside.webp",
    "category": "new",
    "tags": [
      "Yeni Ürünler"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "4bf285cb-d8a8-4d66-93b4-259665999ded",
    "name": "3 Kafadar Tadım Seti",
    "description": "Tadım bardaklarında servis edilir. Gece’nin koyu ve yoğun notaları, Tütsü’nün isli dokunuşu, Aşna Vişne’nin ferah meyvemsiliği ve Mosaic IPA’nın aromatik şerbetçiotu karakteri bir arada. Farklı stilleri deneyimlemek ve favorini bulmak için ideal.",
    "price": 480,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/4bf285cb-d8a8-4d66-93b4-259665999ded/6a0a9738-9462-43a2-ae79-1a377ef922e3/inside.webp",
    "category": "new",
    "tags": [
      "Yeni Ürünler"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "87668412-c99c-4f00-b041-e62fc6131f83",
    "name": "Tiramisu",
    "description": "Tatlıların yanında seçeceğiniz bir kahve ikramımız. (Mascarpone kreması, espresso, kedi dili bisküvi, kakao, yumurta, şeker, vanilya.)",
    "price": 340,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/87668412-c99c-4f00-b041-e62fc6131f83/ee6449a9-cf16-497c-ad9e-7fbd706a87cb/inside.webp",
    "category": "desserts",
    "tags": [
      "Tatlılar"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": true
  },
  {
    "id": "f10a4170-3d94-4439-9c2d-6cae9abab778",
    "name": "Magnum Lemon Cheesecake",
    "description": "Tatlıların yanında seçeceğiniz bir kahve ikramımız. (Limonlu Cheesecake, Magnum Badem Mini)",
    "price": 425,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/f10a4170-3d94-4439-9c2d-6cae9abab778/5dadf2ad-69d1-447e-8aee-a7491f733815/inside.webp",
    "category": "desserts",
    "tags": [
      "Tatlılar"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "c6a320f3-0e3f-439b-b45d-52e6d33c42f6",
    "name": "Magnum Chocolate Cheesecake",
    "description": "Tatlıların yanında seçeceğiniz bir kahve ikramımız. (Çikolatalı Cheesecake, Magnum Classic Mini)",
    "price": 425,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/c6a320f3-0e3f-439b-b45d-52e6d33c42f6/a7c3b9ce-add2-4870-bed0-a11ef894772f/inside.webp",
    "category": "desserts",
    "tags": [
      "Tatlılar"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "56721286-f99f-4017-8a4d-0c74c223fda4",
    "name": "Magnolia",
    "description": "Tatlıların yanında seçeceğiniz bir kahve ikramımız. (Magnolia, Burçak Biskivi, Çilek, Muz, File Badem, Krep Kırıkları)",
    "price": 320,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/56721286-f99f-4017-8a4d-0c74c223fda4/a2a2113a-4bfc-496b-ab45-42fabb2dc9a5/inside.webp",
    "category": "desserts",
    "tags": [
      "Tatlılar"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  },
  {
    "id": "72452b5d-a412-4d08-8f75-ccae69fa2b4c",
    "name": "Magnum Blueberry Cheesecake",
    "description": "Tatlıların yanında seçeceğiniz bir kahve ikramımız. (Yaban Mersinli Cheesecake, Magnum Cookie Mini)",
    "price": 425,
    "image": "https://cdn.moomenu.co/moomenu/media/MENU_ITEM_PHOTO/MENU_ITEM/72452b5d-a412-4d08-8f75-ccae69fa2b4c/eae494a8-1c79-4119-a589-9d8f5ea4488e/inside.webp",
    "category": "desserts",
    "tags": [
      "Tatlılar"
    ],
    "prepTime": "5-15 dk",
    "isBestseller": false
  }
];

export const RADIO_CHANNELS: RadioChannel[] = [
  {
    id: "radio-indie",
    name: "Radyo Gastro Indie",
    genre: "Alternative & Indie Rock",
    nowPlaying: {
      title: "Do I Wanna Know?",
      artist: "Arctic Monkeys",
      albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&auto=format&fit=crop&q=80"
    },
    icon: "Radio",
    bgColor: "from-amber-900 to-amber-950",
  },
  {
    id: "radio-jazz",
    name: "Radyo Retro Jazz",
    genre: "Classic Jazz & Lounge",
    nowPlaying: {
      title: "Fly Me to the Moon",
      artist: "Frank Sinatra",
      albumArt: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=80"
    },
    icon: "Music",
    bgColor: "from-stone-800 to-stone-950",
  },
  {
    id: "radio-synth",
    name: "Radyo Synthwave Night",
    genre: "80s Retro Synth & Electro",
    nowPlaying: {
      title: "Blinding Lights",
      artist: "The Weeknd",
      albumArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80"
    },
    icon: "Disc",
    bgColor: "from-rose-950 to-purple-950",
  }
];

export const INITIAL_STAFF: Staff[] = [
  {
    id: "staff-merve",
    name: "Merve",
    role: "Barista & Kokteyl Şefi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 24,
    bio: "Merve, miksoloji dünyasında 6 yılı aşkın deneyime sahiptir. Benzersiz tat profilleri oluşturma ve klasik kokteyllere modern, yenilikçi dokunuşlar katma konusunda uzmandır.",
    specialty: "Moleküler Miksoloji & Özel Tasarım Kokteyller",
    achievements: [
      "Türkiye Miksoloji Şampiyonası Finalisti (2024)",
      "Yılın En Yaratıcı Kokteyl Tasarımcısı Ödülü (2025)",
      "SCA Sertifikalı Profesyonel Barista"
    ]
  },
  {
    id: "staff-ulas",
    name: "Ulaş",
    role: "Servis Lideri / Şef Garson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 18,
    bio: "Misafir memnuniyeti odaklı yaklaşımıyla tanınan Ulaş, 8 yıllık lüks restoran ve gastropub servis yönetimi tecrübesine sahiptir. Ekip koordinasyonunu mükemmel şekilde sağlar.",
    specialty: "VIP Servis Yönetimi & Şarap/Yemek Uyum Eğitmenliği",
    achievements: [
      "Üst Üste 3 Yıl 'En Yüksek Müşteri Memnuniyeti' Hizmet Ödülü",
      "Uluslararası Servis Standartları Eğitmeni",
      "Profesyonel Sommelierlik Sertifikası"
    ]
  },
  {
    id: "staff-berat",
    name: "Berat",
    role: "Mutfak Şefi & Menü Kreatörü",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    rating: 5.0,
    ratingCount: 32,
    bio: "Berat Şef, geleneksel Türk mutfağını modern dünya trendleriyle harmanlayarak sıra dışı tabaklar yaratıyor. Yerel malzemeleri yenilikçi tekniklerle işleme tutkusuna sahiptir.",
    specialty: "Modern Gastropub Mutfağı & Ev Yapımı Gurme Soslar",
    achievements: [
      "Yılın Genç Şefi Altın Madalyası (Gastronomi Festivali 2023)",
      "Michelin Tavsiyeli Restoranda 3 Yıl Başşeflik Deneyimi",
      "Sürdürülebilir Mutfak ve Sıfır Atık Öncüsü Ödülü"
    ]
  },
  {
    id: "staff-mert",
    name: "Mert",
    role: "Müzik Direktörü & DJ",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 15,
    bio: "Gastro Pub'ımızın eşsiz atmosferini müzikleriyle şekillendiren Mert, müziğin yeme-içme deneyimi üzerindeki psikolojik etkileri üzerine araştırmalar yapmıştır.",
    specialty: "Deep House, Jazz, Retro Synth & Ambient Müzik Küratörlüğü",
    achievements: [
      "İstanbul Elektronik Müzik Festivali Performansçısı (2025)",
      "Gastro-Akustik (Ses ve Tat Uyumu) Konsepti Geliştiricisi",
      "Avrupa'nın Önde Gelen 5 Farklı Kulübünde Resident DJ'lik"
    ]
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: "camp-happy-hour",
    title: "HAPPY HOUR",
    subtitle: "ÖNE ÇIKAN",
    discountBadge: "ÖNE ÇIKAN",
    originalPrice: 180,
    discountedPrice: 120,
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=600&auto=format&fit=crop&q=80",
    description: "HAFTANIN HERGÜNÜ CUMARTESİ HARİÇ TUBORG ŞİŞE SAAT 19:00 'A KADAR 120 TL",
    itemIds: ["drink-craft-beer"]
  },
  {
    id: "camp-chicken-1plus1",
    title: "1+1 TAVUK KAMPANYASI",
    subtitle: "FIRSAT",
    discountBadge: "1+1 FIRSATI",
    originalPrice: 380,
    discountedPrice: 190,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80",
    description: "SEÇECEĞİNİZ TÜM TAVUK YEMEKLERİNDE 1 ALANA 1 BEDAVA SADECE CUMARTESİ HARİÇ SAAT...",
    itemIds: ["wrap-chicken"]
  },
  {
    id: "camp-pizza-1plus1",
    title: "1+1 PIZZA",
    subtitle: "GECE LEZZETİ",
    discountBadge: "1 ALANA 1 BEDAVA",
    originalPrice: 420,
    discountedPrice: 210,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    description: "SALI VE PERŞEMBE AKŞAMLARI SEÇİLİ PIZZALARDA BİR ALANA BİR BEDAVA!",
    itemIds: ["burger-smash"]
  }
];
