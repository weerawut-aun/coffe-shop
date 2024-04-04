import {
  ProductType,
  ProductTypes,
  CoffeeType,
  GoodsType,
} from "./app/types/types";

export const links = [
  { id: 1, title: "Coffee", url: "/collections/all-coffee" },
  { id: 2, title: "Location", url: "/locations/" },
  { id: 3, title: "Subscription", url: "/subscriptions/" },
  { id: 4, title: "Story", url: "/story/" },
  { id: 5, title: "Goods", url: "/collections/goods" },
];

export const linkMoblie = [
  { id: 1, title: "Coffee Finder", url: "/" },
  { id: 2, title: "New", url: "/collections/" },
  { id: 3, title: "Coffee", url: "/collections/" },
  { id: 4, title: "Subscription", url: "/subscriptions/" },
  { id: 5, title: "Location", url: "/locations/" },
];

export const noHeaderFooter = ["pay"];

type ItemsNotificate = {
  id: number;
  text: string;
};
type ItemNotificate = ItemsNotificate[];

export const featuredNotificate: ItemNotificate = [
  {
    id: 0,
    text: "Free Shopping on orders $35+",
  },
  {
    id: 2,
    text: "Subscription always ship for free",
  },
  {
    id: 3,
    text: "Shop our weeked special",
  },
];

type Product = {
  id: string;
  title: string;
  price: number;
  img?: string;
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: "651bdc9cc43ffc8cc1b01288",
    title: "SUMAVA LACTICO PROCESS PACK",
    img: "https://www.vervecoffee.com/cdn/shop/files/SumavaLacticoDuo.png?v=1692904370",
    price: 4800,
  },
  {
    id: "651cc469000712c264611ea1",
    title: "GURA AB",
    img: "	https://www.vervecoffee.com/cdn/shop/files/GuraAB_September_2023.png?v=1692822329",
    price: 2300,
  },
  {
    id: "651cc4e6000712c264611ea2",
    title: "AMPARO MAYA SINGLE ORIGIN ESPRESSO",
    img: "https://www.vervecoffee.com/cdn/shop/files/AmparoMaya_September_2023.png?v=1692822287",
    price: 2425,
  },
  {
    id: "651cc5a4000712c264611ea3",
    title: "PEDRO LONDOÑO FARMLEVEL RESERVE",
    img: "https://www.vervecoffee.com/cdn/shop/files/pedrolondono_September_2023.png?v=1692822387",
    price: 2600,
  },
  {
    id: "651cc613000712c264611ea4",
    title: "ISIMBI",
    img: "https://www.vervecoffee.com/cdn/shop/files/Isimbi_September_2023.png?v=1692822378",
    price: 2050,
  },
  {
    id: "651cc662000712c264611ea5",
    title: "DUMERSO",
    img: "https://www.vervecoffee.com/cdn/shop/files/Dumerso_September_2023.png?v=1692822297",
    price: 2350,
  },
  {
    id: "651cc6e4000712c264611ea6",
    title: "SUMAVA LACTICO NATURAL",
    img: "https://www.vervecoffee.com/cdn/shop/files/SumavaLacticoNatural_Septemeber_2023.png?v=1692904350",
    price: 2600,
  },
  {
    id: "651cc73b000712c264611ea7",
    title: "EL VENDAVAL",
    img: "https://www.vervecoffee.com/cdn/shop/files/ElVendeval_Septemeber_2023.png?v=1692822320",
    price: 2475,
  },
];

type Location = {
  id: number;
  name: string;
  addess: string;
  city: string;
  state?: string;
  office_hours: string;
  phone: string;
  imgUrl: string;
};

type Locations = Location[];

export const locations: Locations = [
  {
    id: 1,
    name: "menhattan beach",
    addess: "451 Manhattan Beach Blvd, Suite 451B",
    city: "los angeles",
    state: " CA 90266",
    office_hours: "Everyday: 7am – 6pm",
    phone: "424-370-0321",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Manhattan_46_800x.jpg?v=1654116183",
  },
  {
    id: 2,
    name: "arts district",
    addess: "500 Mateo Street",
    city: "los angeles",
    state: "CA 90013",
    office_hours: "Everyday: 7am – 6pm",
    phone: "213-419-5077",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/verve_cafes_web_MATEO-4_d816ae0f-62da-48ae-8987-f3d2bf03911b_800x.jpg?v=1654127779",
  },
  {
    id: 3,
    name: "spring steet",
    addess: "833 S. Spring Street",
    city: "los angeles",
    state: "CA 90014",
    office_hours: "M-TH: 7am – 4pm",
    phone: "213-455-5991",
    imgUrl:
      "	https://www.vervecoffee.com/cdn/shop/files/sprig_1_800x.png?v=1654116182",
  },
  {
    id: 4,
    name: "melrose avenue",
    addess: "8925 Melrose Ave",
    city: "los angeles",
    state: "CA 90069",
    office_hours: "Everyday: 7am – 6pm",
    phone: "310-385-9605",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/melrose_2_800x.png?v=1654116183",
  },
  {
    id: 5,
    name: "west 3rd street",
    addess: "8051 W. 3rd St",
    city: "los angeles",
    state: "CA 90048",
    office_hours: "Everyday: 7am – 6pm",
    phone: "323-424-7008",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/patio1_800x.jpg?v=1654116155",
  },
  {
    id: 6,
    name: "university ave",
    addess: "162 University Ave",
    city: "palo alto",
    state: "CA 94301",
    office_hours: "Everyday: 7am – 6pm",
    phone: "831-440-3978",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Copy_of_PaloAlto_55_800x.jpg?v=1654116157",
  },
  {
    id: 7,
    name: "market street",
    addess: "2101 Market Street",
    city: "san francisco",
    state: "CA 94114",
    office_hours: "Everyday: 7am – 6pm",
    phone: "415-780-0867",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/market_3_800x.png?v=1654116183",
  },
  {
    id: 8,
    name: "pacific avenue",
    addess: "1540 Pacific Ave",
    city: "santa cruz",
    state: "CA 95060",
    office_hours: "Everyday: 7am – 6pm",
    phone: "831-471-7726",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/cafe_test_2_800x.png?v=1654116144",
  },
  {
    id: 9,
    name: "41ST AVENUE",
    addess: "816 41st Ave",
    city: "santa cruz",
    state: "CA 95062",
    office_hours: "Everyday: 7am – 6pm",
    phone: "831-706-2369",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/VCR4194_800x.jpg?v=1654116152",
  },
  {
    id: 10,
    name: "SEABRIGHT",
    addess: "104 Bronson St Suite 19",
    city: "santa cruz",
    state: "CA 95062",
    office_hours: "Everyday: 7am – 6pm",
    phone: "831-216-4448",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Cafes-Seabright-6427_800x.jpg?v=1654116153",
  },
  {
    id: 11,
    name: "1010 FAIR",
    addess: "1010 Fair Ave.",
    city: "santa cruz",
    state: "CA 95060",
    office_hours: "Everyday: 7am – 6pm",
    phone: "831-425-5648",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Copy_of_FairAve_2_cece9855-369d-4662-b62d-aa72f52915da_800x.jpg?v=1654116184",
  },
  {
    id: 12,
    name: "EBISU",
    addess: "2-7 Ebisu, Shibuya-ku, Tokyo Yebisu Garden Place Center Plaza 1F",
    city: "japen",
    state: "",
    office_hours: "Everyday: 7am – 6pm",
    phone: "03-6450-3058",
    imgUrl:
      "https://www.vervecoffee.com/cdn/shop/files/verve_ebisu_016_800x.png?v=1676059051",
  },
];
type Good = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type Goods = Good[];

export const goods: Goods = [
  {
    id: 1,
    name: "Third Wave Water - Classic Light Roast Profile",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/3ww3_533x.png?v=1692310680",
    price: 1700,
  },
  {
    id: 2,
    name: "Desert Sunrise Tumbler",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/coldcuplarrea2023_720x.png?v=1687282229",
    price: 3200,
  },
  {
    id: 3,
    name: "Sunburst Stitch Cap",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/larreahat2023_720x.png?v=1687282283",
    price: 2800,
  },
  {
    id: 4,
    name: "Larra sticker pack",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/stickers2larrea2023_720x.png?v=1687282259",
    price: 500,
  },
  {
    id: 5,
    name: "kinto stackimg mug - gray",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/products/greenstack1_720x.png?v=1679625925",
    price: 1500,
  },
  {
    id: 6,
    name: "kinto stackimg mug - orange",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/products/Orangestack1_720x.png?v=1679625947",
    price: 1500,
  },
];

type OptionType = {
  label: string;
  value: string;
};

export const selectOptionMerch: OptionType[] = [
  {
    label: "Clothing",
    value: "clothing",
  },
  {
    label: "Accessories",
    value: "accessories",
  },
  {
    label: "Mugs",
    value: "mugs",
  },
  {
    label: "Headwear",
    value: "headwear",
  },
  {
    label: "Books",
    value: "books",
  },
];

export const selectOptionBrewing: OptionType[] = [
  {
    label: "Brewing",
    value: "Brewing",
  },
  {
    label: "Filters",
    value: "filters",
  },
  {
    label: "Scales",
    value: "scales",
  },
  {
    label: "Accessories",
    value: "accessories",
  },
  {
    label: "Gringers",
    value: "gringers",
  },
  {
    label: "Kettles",
    value: "kettles",
  },
];

type CartType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const Carts: CartType[] = [
  {
    id: 1,
    name: "Third Wave Water - Classic Light Roast Profile",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/3ww3_533x.png?v=1692310680",
    price: 1700,
  },
  {
    id: 2,
    name: "Desert Sunrise Tumbler",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/coldcuplarrea2023_720x.png?v=1687282229",
    price: 3200,
  },
  {
    id: 3,
    name: "Sunburst Stitch Cap",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/larreahat2023_720x.png?v=1687282283",
    price: 2800,
  },
  {
    id: 4,
    name: "Larra sticker pack",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/files/stickers2larrea2023_720x.png?v=1687282259",
    price: 500,
  },
  {
    id: 5,
    name: "kinto stackimg mug - gray",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/products/greenstack1_720x.png?v=1679625925",
    price: 1500,
  },
  {
    id: 6,
    name: "kinto stackimg mug - orange",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0035/9372/products/Orangestack1_720x.png?v=1679625947",
    price: 1500,
  },
];

export const ProductData: ProductType[] = [
  {
    id: "654d99e9f16495eb0f23c6ec",
    name: "holiday blend",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/HolidayBlend_October_2023.png?v=1696544871",
    price: 2200,
    title: "",
    catSlug: "all-coffee",
    coffee: [
      {
        roast: 5,
        ingredient: ["orange zest", "honey  wine", "pluot"],
        types: "seasonal Blend",
        description: [],
      },
    ],
  },
  {
    id: "654d9d7ff16495eb0f23c6ee",
    name: "holiday blend craft instant coffee",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/HolidayCraftInstant_October_2023.png?v=1696544883",
    price: 1800,
    title: "",
    catSlug: "all-coffee",
    coffee: [
      {
        roast: 5,
        ingredient: ["pluot", "orange zear", "honey  wine"],
        types: "Blend",
        description: [],
      },
    ],
  },
  {
    id: "654da282f16495eb0f23c6f0",
    name: "hoilday seasonal blend coffee set",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/HolidaySet_October_2023.png?v=1696544892",
    price: 3600,
    title: "",
    catSlug: "all-coffee",
    coffee: [
      {
        roast: 5,
        ingredient: ["pluot", "orange zear", "honey  wine"],
        types: "seasonal Blend",
        description: [],
      },
    ],
  },
  {
    id: "654dede86fcc72012b630047",
    name: "yojoa",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Yojoa_August_2023.png?v=1689796495",
    price: 2050,
    title: "",
    catSlug: "all-coffee",
    coffee: [
      {
        roast: 4,
        ingredient: ["apricot", "re", "caramel"],
        types: "SINGLE ORIGIN - HONDURAS",
        description: [],
      },
    ],
  },
];

export const ProductEx: ProductTypes[] = [
  {
    id: "654d99e9f16495eb0f23c6ec",
    name: "SERMON",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/Sermon_c4c1e174-5789-432f-a38f-68d9670b5136.png?v=1670627814",
    price: 1975,
    catSlug: "all-coffee",
    roast: "medium",
    level: 5,
    ingredient: ["BLUEBERRY PIE", " COCOA", "CANDIED PECAN"],
    type: "BLEND",
    origins: ["COLOMBIA", "EAST AFRICA"],
  },
  {
    id: "654d9d7ff16495eb0f23c6ee",
    name: "SERMON CRAFT INSTANT COFFEE 6 PACK",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/Sermon_1.png?v=1658422154",
    price: 1700,
    catSlug: "all-coffee",
    roast: "medium",
    level: 5,
    ingredient: ["BLUEBERRY PIE", " COCOA", "CANDIED PECAN"],
    type: "BLEND",
    origins: ["COLOMBIA", "EAST AFRICA"],
  },
  {
    id: "654d9d7ff16495eb0f23c6ed",
    name: "STREETLEVEL",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/Streetlevel_10edf3d5-1dce-42cf-88a3-8d9ee4e0d976.png?v=1670627826",
    price: 1975,
    catSlug: "all-coffee",
    roast: "medium",
    level: 6,
    ingredient: ["CLEMENTINE", "RED APPLE", "HONEYCOMB"],
    type: "BLEND",
    origins: ["HONDURAS", "GUATEMALA", "COLOMBIA"],
  },
  {
    id: "654da282f16495eb0f23c6f0",
    name: "MULUGETA",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Mulugeta_Jan_2024.png?v=1703706742",
    price: 2450,
    catSlug: "all-coffee",
    roast: "light",
    level: 2,
    ingredient: ["CLEMENTINE", "RED APPLE", "HONEYCOMB"],
    type: "SINGLE ORIGIN - ETHIOPIA",
    origins: ["ETHIOPIA"],
  },
  {
    id: "654da282f16495eb0f23c6f1",
    name: "WILDER BLEND",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/WilderBlendWBUPDATED_Jan_2024.png?v=1705005369",
    price: 2200,
    catSlug: "all-coffee",
    roast: "medium",
    level: 6,
    ingredient: ["CLEMENTINE", "RED APPLE", "HONEYCOMB"],
    type: "SEASONAL BLEND",
    origins: ["COSTA RICA", "GUATEMALA", "MEXICO"],
  },
  {
    id: "1234567890",
    name: `2-IN-1 COFFEE SCOOP CLIP`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Gold_Scoop_Clip.png?v=1701135939",
    price: 50,
    catSlug: "goods",
    type: "goods",
    brewing: ["accessories"],
    merch: ["accessories"],
  },
  {
    id: "2345678901",
    name: `EVERGREEN DREAM CAMP MUG`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Everygreencampmug1.png?v=1697836474",
    price: 3500,
    catSlug: "goods",
    type: "goods",
    merch: ["mug"],
  },
  {
    id: "3456789012",
    name: `DREAM KNIT BEANIE`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/BeanieGreen1.png?v=1697835538",
    price: 3000,
    catSlug: "goods",
    type: "goods",
    merch: ["accessories", "headwear", "clothing"],
  },
  {
    id: "4567890123",
    name: `MAGIC MOMENTS CANDLE`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/MagicalMomentsCandle.png?v=1698424018",
    price: 2500,
    catSlug: "goods",
    type: "goods",
    merch: ["accessories"],
  },
  {
    id: "5678901234",
    name: `THIRD WAVE WATER - CLASSIC LIGHT ROAST PROFILE`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/3ww3.png?v=1692044221",
    price: 1700,
    catSlug: "goods",
    type: "goods",
    brewing: ["brewes"],
  },
  {
    id: "6789012345",
    name: `HARIO V60 COFFEE FILTERS`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/V60_01_Filters_tabbed_2048x2048_4c029950-2709-42ff-82ea-a7795d29a9c1.png?v=1654098464",
    price: 650,
    catSlug: "goods",
    type: "goods",
    brewing: ["filters"],
  },
];
export const CoffeeProduct: CoffeeType[] = [
  {
    id: "654d99e9f16495eb0f23c6ec",
    title: "SERMON",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/Sermon_c4c1e174-5789-432f-a38f-68d9670b5136.png?v=1670627814",
    price: 1975,

    roast: "medium",
    level: 5,
    ingredient: ["BLUEBERRY PIE", " COCOA", "CANDIED PECAN"],
    type: "BLEND",
    origins: ["COLOMBIA", "EAST AFRICA"],
  },
  {
    id: "654d9d7ff16495eb0f23c6ee",
    title: "SERMON CRAFT INSTANT COFFEE 6 PACK",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/Sermon_1.png?v=1658422154",
    price: 1700,
    roast: "medium",
    level: 5,
    ingredient: ["BLUEBERRY PIE", " COCOA", "CANDIED PECAN"],
    type: "BLEND",
    origins: ["COLOMBIA", "EAST AFRICA"],
  },
  {
    id: "654d9d7ff16495eb0f23c6ed",
    title: "STREETLEVEL",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/Streetlevel_10edf3d5-1dce-42cf-88a3-8d9ee4e0d976.png?v=1670627826",
    price: 1975,
    roast: "medium",
    level: 6,
    ingredient: ["CLEMENTINE", "RED APPLE", "HONEYCOMB"],
    type: "BLEND",
    origins: ["HONDURAS", "GUATEMALA", "COLOMBIA"],
  },
  {
    id: "654da282f16495eb0f23c6f0",
    title: "MULUGETA",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Mulugeta_Jan_2024.png?v=1703706742",
    price: 2450,
    roast: "light",
    level: 2,
    ingredient: ["CLEMENTINE", "RED APPLE", "HONEYCOMB"],
    type: "SINGLE ORIGIN - ETHIOPIA",
    origins: ["ETHIOPIA"],
  },
  {
    id: "654da282f16495eb0f23c6f1",
    title: "WILDER BLEND",
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/WilderBlendWBUPDATED_Jan_2024.png?v=1705005369",
    price: 2200,
    roast: "medium",
    level: 6,
    ingredient: ["CLEMENTINE", "RED APPLE", "HONEYCOMB"],
    type: "SEASONAL BLEND",
    origins: ["COSTA RICA", "GUATEMALA", "MEXICO"],
  },
];

export const GoodsProduct: GoodsType[] = [
  {
    id: "1234567890",
    name: `2-IN-1 COFFEE SCOOP CLIP`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Gold_Scoop_Clip.png?v=1701135939",
    price: 50,
    brewing: ["accessories"],
    merch: ["none"],
  },
  {
    id: "2345678901",
    name: `EVERGREEN DREAM CAMP MUG`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/Everygreencampmug1.png?v=1697836474",
    price: 3500,
    brewing: ["none"],
    merch: ["mug"],
  },
  {
    id: "3456789012",
    name: `DREAM KNIT BEANIE`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/BeanieGreen1.png?v=1697835538",
    price: 3000,
    brewing: ["none"],
    merch: ["accessories", "headwear", "clothing"],
  },
  {
    id: "4567890123",
    name: `MAGIC MOMENTS CANDLE`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/MagicalMomentsCandle.png?v=1698424018",
    price: 2500,
    brewing: ["none"],
    merch: ["accessories"],
  },
  {
    id: "5678901234",
    name: `THIRD WAVE WATER - CLASSIC LIGHT ROAST PROFILE`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/files/3ww3.png?v=1692044221",
    price: 1700,
    brewing: ["brewes"],
    merch: ["none"],
  },
  {
    id: "6789012345",
    name: `HARIO V60 COFFEE FILTERS`,
    imageUrl:
      "https://www.vervecoffee.com/cdn/shop/products/V60_01_Filters_tabbed_2048x2048_4c029950-2709-42ff-82ea-a7795d29a9c1.png?v=1654098464",
    price: 650,
    brewing: ["filters"],
    merch: ["none"],
  },
];
