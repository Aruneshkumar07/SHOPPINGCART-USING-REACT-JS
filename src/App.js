import React from 'react';
import ShoppingCart from './Shoppingcart';

const App = () => {
  const sampleProducts = [
    { id: 1, name: 'Cricket Bat', price: 3210 ,image:'https://rukminim1.flixcart.com/image/300/300/krce64w0/bat/r/9/g/1-1-2-virat-kohli-grand-edition-tennis-cricket-bat-short-handle-original-imag55zexgqmtznz.jpeg'},
    { id: 2, name: 'Cricket Shoes', price: 4220,image:'https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/f6804705d3c9b06dccd038949280b6b0/j/a/jaffa--n.jpg' },
    { id: 3, name: 'Kit Bag', price: 999 ,image:'https://sportsnextdoor.com/wp-content/uploads/2023/07/SF-Cricket-Kit-Bag-Incredible-7500-with-Wheels.png'},
    { id: 3, name: 'Cricket Stumps', price: 399 ,image:'https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/6d9f53a3f26f3a62c1c1c9add7c6ad94/b/l/bleached-and-polished-cricket-stumps_1.jpg'},
    { id: 3, name: 'White Stich Ball', price: 999 ,image:'https://www.khelmart.com/pub/media/catalog/product/cache/1c2c7e97aac2e27992e1e81c0cbf917a/t/h/th_cb_02_large.jpg'},
  ];

  return (
    <div>
      <ShoppingCart products={sampleProducts} />
    </div>
  );
};

export default App;
