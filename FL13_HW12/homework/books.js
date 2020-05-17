const booksData = [{
    id:1,
    title: 'IT',
    author: 'Stephen King',
    url: 'https://www.kino-teatr.ru/movie/posters/big/6/124336.jpg',
    plot: 'About horror'

}, {
    id:2,
    title: 'Outsider',
    author: 'Stephen King',
    url: 'https://cdn.waterstones.com/bookjackets/large/9781/4736/9781473676398.jpg',
    plot: 'About action'

}, {
    id:3,
    title: 'The shining',
    author: 'Stephen King',
    url: 'https://www.booklya.ua/content/upload/product/194k/194204/800x800/597047/the-shining.jpg',
    plot: ' About nature'

}];

localStorage.setItem('booksData', JSON.stringify(booksData));