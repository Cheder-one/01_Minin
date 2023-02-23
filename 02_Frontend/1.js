const menuItems = [
  {
    id: "main",
    text: "Главная",
    active: true,
    link: "#main",
  },
  {
    id: "blog",
    text: "Блог",
    active: false,
    link: "#blog",
  },
  {
    id: "contacts",
    text: "Контакты",
    active: false,
    link: "#cont",
  },
]

const id = 'contacts'

const res = menuItems.map((el) => ({ ...el, active: el.id === id }))

console.log(res);