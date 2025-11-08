export const navItems = [
  {
    label: "Home",
    icon: "bx bx-home-alt-2",
    activeIcon: "bx bxs-folder-open",
    inactiveIcon: "bx bxs-folder",
  },
  {
    label: "iPhone",
    icon: "bx bx-mobile-alt",
    activeIcon: "bx bxs-folder-open",
    inactiveIcon: "bx bxs-folder",
  },
  {
    label: "MacBook",
    icon: "bx bx-laptop",
    activeIcon: "bx bxs-folder-open",
    inactiveIcon: "bx bxs-folder",
  },
  {
    label: "Watch",
    icon: "bx bxs-watch-alt",
    activeIcon: "bx bxs-folder-open",
    inactiveIcon: "bx bxs-folder",
  },
  {
    label: "iMac",
    icon: "bx bx-desktop",
    activeIcon: "bx bxs-folder-open",
    inactiveIcon: "bx bxs-folder",
  },
];

export const items = [
  { label: "iPhone", img: "images/iphone.png", pageIndex: 1 },
  { label: "MacBook", img: "images/macbook.png", pageIndex: 2 },
  { label: "Smart Watch", img: "images/watch.png", pageIndex: 3 },
  { label: "iMac", img: "images/imac.png", pageIndex: 4 },
];

export const iphoneModels = [
  {
    name: "iPhone Air",
    description: "The thinnest iPhone ever.",
    price: "From $999",
    img: "images/iphone/iphone-air.png",
  },
  {
    name: "iPhone 17 Pro",
    description: "A total powerhose.",
    price: "From $1,099",
    img: "images/iphone/iphone17-pro.png",
  },
  {
    name: "iPhone 17",
    description: "As amazing as ever.",
    price: "From $799",
    img: "images/iphone/iphone17.png",
  }
];

export const macBookModels = [
  {
    chip: 'M4',
    price: 'From $999',
    colors: [
      {label: 'Silver', bg: '#E3E4E6', img: 'images/macbook/macbook-air-silver-m4.png'},
      {label: 'Sky blue', bg: '#C7D8E0', img: 'images/macbook/macbook-air-skyblue-m4.png'},
      {label: 'Star light', bg: '#F0E5D3', img: 'images/macbook/macbook-air-starlight-m4.png'},
      {label: 'Midnight', bg: '#2E3641', img: 'images/macbook/macbook-air-midnight-m4.png'},
    ],
    specs: ['10-Core CPU', '8-Core GPU', '16GB Unified Memory', '256GB SSD Storage'],
    icon: 'images/apple-m4-icon.png'
  },
  {
    chip: 'M5',
    price: 'From $1599',
    colors: [
      {label: 'Space black', bg: '#2E2C2F', img: 'images/macbook/macbook-air-spaceblack-m5.png'},
      {label: 'Silver', bg: '#E3E4E6', img: 'images/macbook/macbook-air-silver-m5.png'}
    ],
    specs: ['10-Core CPU', '10-Core GPU', '16GB Unified Memory', '512GB SSD Storage'],
    icon: 'images/apple-m5-icon.png'
  }
]

export const watchModels = [
  {
    imgs: ['images/watch/watch10-side.png', 'images/watch/watch10.png'],
    name: 'Apple Watch Series 10',
    price: 'From $399',
    desc: ['45mm or 41mm case size', '50m water resistant', 'Swimproof']
  },
  {
    imgs: ['images/watch/watch-hermes-side.png', 'images/watch/watch-hermes.png'],
    name: 'Apple Watch Hermes',
    price: 'From $1,149',
    desc: ['44mm or 40mm case size', '50m water resistant', 'Swimproof']
  },
  {
    imgs: ['images/watch/watch-se-side.png', 'images/watch/watch-se.png'],
    name: 'Apple Watch Se',
    price: 'From $249',
    desc: ['44mm case size', '10m water resistant', 'Swimproof']
  }
]

export const imacModels = [
  {
    label: 'Blue',
    bg: '#547EAE',
    images: {
      side: 'images/imac/blue-side.png',
      front: 'images/imac/blue-front.png',
      back: 'images/imac/blue-back.png'
    }
  },
  {
    label: 'Purple',
    bg: '#827EB1',
    images: {
      side: 'images/imac/purple-side.png',
      front: 'images/imac/purple-front.png',
      back: 'images/imac/purple-back.png'
    }
  },
  {
    label: 'Pink',
    bg: '#DE5F7D',
    images: {
      side: 'images/imac/pink-side.png',
      front: 'images/imac/pink-front.png',
      back: 'images/imac/pink-back.png'
    }
  },
  {
    label: 'Yellow',
    bg: '#EDD142',
    images: {
      side: 'images/imac/yellow-side.png',
      front: 'images/imac/yellow-front.png',
      back: 'images/imac/yellow-back.png'
    }
  },
  {
    label: 'Orange',
    bg: '#E4704B',
    images: {
      side: 'images/imac/orange-side.png',
      front: 'images/imac/orange-front.png',
      back: 'images/imac/orange-back.png'
    }
  },
  {
    label: 'Green',
    bg: '#3E935C',
    images: {
      side: 'images/imac/green-side.png',
      front: 'images/imac/green-front.png',
      back: 'images/imac/green-back.png'
    }
  },
  {
    label: 'Silver',
    bg: '#E3E4E6',
    images: {
      side: 'images/imac/silver-side.png',
      front: 'images/imac/silver-front.png',
      back: 'images/imac/silver-back.png'
    }
  },
]