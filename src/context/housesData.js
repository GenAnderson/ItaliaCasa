const housesData = [
  {
    id: 1,
    price: 950000,
    size: "973 m2",
    energy: "in process",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/9e/c2/59/469497906.jpg",
    coords: [40.924826, 9.195211],
    internet: "no",
    pv: "yes",
    ac: "yes",
    hospital: 9.8,
    vet: 4.1,
    market: 0.3,
    notes: "Sauna/hot tub",
    link: "https://www.idealista.it/en/immobile/26328111/",
    active: false,
  },
  {
    id: 2,
    price: 1000000,
    size: "236 m2",
    energy: "A+",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/69/4c/01/349792711.jpg",
    coords: [39.22613, 9.261995],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 7.5,
    vet: 6.1,
    market: 6.6,
    notes: "Modern sleek inside",
    link: "https://www.idealista.it/en/immobile/23028940/",
    active: false,
  },
  {
    id: 3,
    price: 495000,
    size: "200 m2",
    energy: "A",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/1f/d4/74/362746520.jpg",
    coords: [40.54769, 8.333112],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 4.6,
    vet: 1.8,
    market: 2.2,
    notes: "Small single sauna. Private gated. Huge yard.",
    link: "https://www.idealista.it/en/immobile/23333663/",
    active: false,
  },
  {
    id: 4,
    price: 950000,
    size: "200 m2",
    energy: "A+",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/56/78/e1/423965496.jpg",
    coords: [40.558347, 8.327421],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 3.1,
    vet: 0.1,
    market: 0.6,
    notes: "Rectangle. Each bedroom has own bathroom. Best view.",
    link: "https://www.idealista.it/en/immobile/24988985/",
    active: false,
  },
  {
    id: 5,
    price: 800000,
    size: "280 m2",
    energy: "not indicated",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/79/d5/bb/455580407.jpg",
    coords: [40.764233, 8.535554],
    internet: "yes",
    pv: "yes",
    ac: "yes",
    hospital: 7.1,
    vet: 3.2,
    market: 5.4,
    notes: "Beautiful outdoors. Resident evil inside",
    link: "https://www.idealista.it/en/immobile/25954087/",
    active: false,
  },
  {
    id: 6,
    price: 990000,
    size: "330 m2",
    energy: "A",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/bc/d1/e2/457985572.jpg",
    coords: [40.709295, 9.695564],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 11.3,
    vet: 11.1,
    market: 0.5,
    notes: "Irrigation system, water reserve, nice beamed ceilings",
    link: "https://www.idealista.it/en/immobile/26028737/",
    active: false,
  },
  {
    id: 7,
    price: "POR",
    size: "360 m2",
    energy: "?",
    img: "https://img.jamesedition.com/listing_images/2023/01/24/16/58/06/f1a82265-0f65-4a16-a283-4512af3abb27/je/1900xxs.jpg",
    coords: [40.680617, 9.683956],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 17.4,
    vet: 17.1,
    market: 0.1,
    notes: "Secluded, nice view, heated swimming pool :)",
    link: "https://www.jamesedition.com/real_estate/costa-smeralda-italy/villa-sunrise-12128297",
    active: false,
  },
  {
    id: 8,
    price: "POR",
    size: "250 m2",
    energy: "?",
    img: "https://img.jamesedition.com/listing_images/2022/06/24/09/56/56/2a3369f8-8d5c-454f-ad33-0bddac8d11b1/je/1900xxs.jpg",
    coords: [41.031027, 9.545352],
    internet: "?",
    pv: "?",
    ac: "?",
    hospital: 21.4,
    vet: 12.8,
    market: 1.1,
    notes: "Deserty feel with some grassy area. Secluded.",
    link: "https://www.jamesedition.com/real_estate/porto-rotondo-italy/villa-pedra-11230324",
    active: false,
  },
  {
    id: 9,
    price: "POR",
    size: "?",
    energy: "?",
    img: "https://img.jamesedition.com/listing_images/2022/02/21/15/42/15/0c58d55a-d058-43a3-a782-81cfb6403759/je/1900xxs.jpg",
    coords: [41.132125, 9.534826],
    internet: "yes",
    pv: "?",
    ac: "yes",
    hospital: 18.7,
    vet: 3,
    market: 0.1,
    notes: "Minimalist home",
    link: "https://www.jamesedition.com/real_estate/porto-cervo-italy/villa-minimal-porto-cervo-11810016",
    active: false,
  },
  {
    id: 10,
    price: 890000,
    size: "220 m2",
    energy: "B",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/4e/3c/69/245577173.jpg",
    coords: [40.789781, 8.239299],
    internet: "yes",
    pv: "yes",
    ac: "yes",
    hospital: 32.5,
    vet: 19.1,
    market: 8.2,
    notes:
      "Big yard. Irrigation. Secluded. Interior awesome, exterior facade not so much",
    link: "https://www.idealista.it/en/immobile/18922898/",
    active: false,
  },
  {
    id: 11,
    price: 909881,
    size: "255 m2",
    energy: "C",
    img: "https://img.jamesedition.com/listing_images/2020/07/21/09/25/54/60eb80c2-e4f5-41bd-a620-3a4bce71e236/je/1900xxs.jpg",
    coords: [41.023918, 9.503873],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 20.1,
    vet: 8.5,
    market: 5.3,
    notes: "Tavern is a little creepy",
    link: "https://www.jamesedition.com/real_estate/olbia-italy/single-house-for-sale-in-olbia-10981424",
    active: false,
  },
  {
    id: 12,
    price: 750000,
    size: "170 m2",
    energy: "in process",
    img: "https://img3.idealista.it/blur/WEB_DETAIL-XL-L/0/id.pro.it.image.master/14/42/49/353304850.jpg",
    coords: [40.84614, 9.494669],
    internet: "?",
    pv: "?",
    ac: "yes",
    hospital: 10.6,
    vet: 8.3,
    market: 0.4,
    notes:
      "Part of 10 completely independent detached villas. No heating. Where's the garden?",
    link: "https://www.idealista.it/en/immobile/19301693/",
    active: false,
  },
];

export default housesData;
