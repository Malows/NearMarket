export default {
  searchText: '',

  searchType: '',

  products: [
    {
      id: 1,
      name: 'Pan',
      description: 'Pan de pueblo',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
      category: { name: 'pan', id: 1 }
    },
    {
      id: 2,
      name: 'Gasolina',
      description: 'Gasolina',
      image: 'https://images.unsplash.com/photo-1516024851043-da0e0fba8983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: { name: 'Gasolina', id: 2 }
    },
    {
      id: 3,
      name: 'Pan',
      description: 'Pan de pueblo',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
      category: { name: 'pan', id: 1 }
    },
    {
      id: 4,
      name: 'Gasolina',
      description: 'Gasolina',
      image: 'https://images.unsplash.com/photo-1516024851043-da0e0fba8983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: { name: 'Gasolina', id: 2 }
    },
    {
      id: 5,
      name: 'Pan',
      description: 'Pan de pueblo',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
      category: { name: 'pan', id: 1 }
    },
    {
      id: 6,
      name: 'Gasolina',
      description: 'Gasolina',
      image: 'https://images.unsplash.com/photo-1516024851043-da0e0fba8983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: { name: 'Gasolina', id: 2 }
    }
  ],

  shops: [
    {
      id: 1,
      name: 'Tienda Manolo',
      address: 'Calle Falsa 123',
      schedule: '9:00 a 18:00 de L-S',
      description: 'La tienda de manolo de toda la vida del seño, que tiene de todo lo que necesitas, bueno, bonito y barato',
      image: 'https://images.unsplash.com/photo-1546237769-6f84ec1a512a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      category: { name: 'Category 1', id: 1 }
    },
    {
      id: 2,
      name: 'Tienda María',
      address: 'Calle Falsa 456',
      schedule: '9:00 a 20:00 de L-S',
      description: 'La tienda de María de toda la vida del seño, que tiene de todo lo que necesitas, bueno, bonito y barato',
      image: 'https://images.unsplash.com/photo-1515182629504-727d7753751f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      category: { name: 'Category 2', id: 2 }
    },
    {
      id: 3,
      name: 'Tienda Manolo',
      address: 'Calle Falsa 123',
      schedule: '9:00 a 18:00 de L-S',
      description: 'La tienda de manolo de toda la vida del seño, que tiene de todo lo que necesitas, bueno, bonito y barato',
      image: 'https://images.unsplash.com/photo-1546237769-6f84ec1a512a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      category: { name: 'Category 3', id: 3 }
    },
    {
      id: 4,
      name: 'Tienda María',
      address: 'Calle Falsa 456',
      schedule: '9:00 a 20:00 de L-S',
      description: 'La tienda de María de toda la vida del seño, que tiene de todo lo que necesitas, bueno, bonito y barato',
      image: 'https://images.unsplash.com/photo-1515182629504-727d7753751f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      category: { name: 'Category 4', id: 4 }
    },
    {
      id: 5,
      name: 'Tienda Manolo',
      address: 'Calle Falsa 123',
      schedule: '9:00 a 18:00 de L-S',
      description: 'La tienda de manolo de toda la vida del seño, que tiene de todo lo que necesitas, bueno, bonito y barato',
      image: 'https://images.unsplash.com/photo-1546237769-6f84ec1a512a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      category: { name: 'Category 5', id: 5 }
    },
    {
      id: 6,
      name: 'Tienda María',
      address: 'Calle Falsa 456',
      schedule: '9:00 a 20:00 de L-S',
      description: 'La tienda de María de toda la vida del seño, que tiene de todo lo que necesitas, bueno, bonito y barato',
      image: 'https://images.unsplash.com/photo-1515182629504-727d7753751f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      category: { name: 'Category 6', id: 6 }
    }
  ],

  categories: [
    {
      id: 1,
      name: 'pan'
    },
    {
      id: 2,
      name: 'Gasolina'
    }
  ]
}
