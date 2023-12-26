const products = [
    {
        id: 1,
        name: "Product A",
        discount: 20,
        price: 100.0,
        afterdiscount: 80.0,
        discription: 'This is for sale',
        images: 'https://mensflair.com/wp-content/uploads/2023/01/mens-luxury-bags-2.jpg',
        category: 'mens',
    },
    {
        id: 2,
        name: "Product B",
        discount: 15,
        price: 75.5,
        afterdiscount: 64.18,
        images: 'https://static01.nyt.com/images/2019/07/22/fashion/mens-style/oakImage-1563825084859/oakImage-1563825084859-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        category: 'mens',
        discription: 'This is for sale',
    },
    {
        id: 3,
        name: "Product C",
        discount: null,
        price: 50.0,
        afterdiscount: 50.0,
        images: 'https://static01.nyt.com/images/2019/07/22/fashion/mens-style/oakImage-1563825084859/oakImage-1563825084859-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        category: 'mens',
        discription: 'This is for sale',
    },
    {
        id: 4,
        name: "Product D",
        discount: null,
        price: 120.0,
        afterdiscount: 120.0,
        category: 'mens',
        discription: 'This is for sale',
        images: 'https://static.wixstatic.com/media/9f9f47_41645f31bfa74f498f534484dce826a3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
    {
        id: 5,
        name: "Product E",
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        category: 'mens',
        discription: 'This is for sale',
        images: 'https://cdn.engelbert-strauss.de/assets/mf/images/Original/product/1.Release.7070540/Messenger_Bag_e_s_motion_ten-271548-0-638224987665522427.jpg',
    },
    {
        id: 6,
        name: "Product F",
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        category: 'mens',
        discription: 'This is for sale',
        images: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/dufflebags-2048px-22-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',
    },
    {
        id: 7,
        name: "Product G",
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        category: 'mens',
        discription: 'This is for sale',
        images: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/dufflebags-2048px-22-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',
    },
    {
        id: 8,
        name: "Product H",
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        category: 'mens',
        discription: 'This is for sale',
        images: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/dufflebags-2048px-22-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',
    },
    {
        id : 9,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-80670,resizemode-75,msid-97000579/top-trending-products/lifestyle/find-5-best-school-bags-for-kids.jpg',
        discription: 'This is for sale',
        category: 'kids',

    },
    {
        id : 10,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://s4.forcloudcdn.com/item/images/dmc/aef73975-50a4-4d5e-bf67-3fba8f30c88e-800x800.jpg_min.jpg',
        discription: 'This is for sale',
        category: 'kids',

    },
    {
        id : 11,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://www.sharanhats.com.np/wp-content/uploads/2023/05/bagpack-baby.jpeg-1.jpg',
        discription: 'This is for sale',
        category: 'kids',

    },
    {
        id : 12,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://d1b5h9psu9yexj.cloudfront.net/40176/State-Bags-Kane-Kids_20220803-172502_full.jpeg',
        discription: 'This is for sale',
        category: 'kids',
    },
    {
        id : 13,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://staranddaisy.in/wp-content/uploads/2022/02/yellow-55365798.jpg',
        discription: 'This is for sale',
        category: 'kids',
    },
    {
        id : 14,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://www.mumonthemove.com/wp-content/uploads/2015/05/Trunki.jpg',
        discription: 'This is for sale',
        category: 'kids',
    },
    {
        id : 15,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19860432/2022/10/28/f65d8cc8-1738-4688-bbfa-f7edc1eb1a9a1666931713521FranticUnisexKidsRabbitVelvetBackpack1.jpg',
        discription: 'This is for sale',
        category: 'kids',
    },
    {
        id : 16,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://m.media-amazon.com/images/I/91i3W-5QLIL.jpg',
        discription: 'This is for sale',
        category: 'kids',
    },
    {
        id : 17,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://www.julke.pk/cdn/shop/files/Hutton-women-leather-shoulder-bag-top-handle-croc-texture-brown-three-quarter-view-JULKE_600x.jpg?v=1693983360',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 18,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://www.statusanxiety.com.au/cdn/shop/files/status-anxiety-bag-last-mountains-tan-6-lifestyle-img.jpg?v=1683870403&width=770',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 19,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://assets.vogue.com/photos/647df507e683cf0ef4e4d113/master/w_2560%2Cc_limit/00-story%2520(10).jpg',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 20,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://i.pinimg.com/736x/2a/9b/b8/2a9bb8a7be4161a397210b1c028ac413.jpg',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 21,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://i.ebayimg.com/images/g/LrIAAOSwBFFjIOgm/s-l1200.jpg',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 22,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://video-play.daraz.com.np/cover/382727.jpg',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 23,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://images.meesho.com/images/products/225407367/iwshq_512.webp',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 24,
        discount: 10,
        price: 200.0,
        afterdiscount: 180.0,
        name: 'productName',
        images: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/j/3/o/stylish-women-hand-bags-14-811-shoulder-bag-pari-fancy-41-original-imagm97a5ffecar9.jpeg?q=90',
        discription: 'This is for sale',
        category: 'womens',
    },
    {
        id : 25,
        price: 200.0,
        name: 'productName',
        images: 'https://images.meesho.com/images/products/225407367/iwshq_512.webp',
        discription: 'This is for sale',
        category: 'sales',
    },
    {
        id : 26,
        price: 200.0,
        name: 'productName',
        images: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/j/3/o/stylish-women-hand-bags-14-811-shoulder-bag-pari-fancy-41-original-imagm97a5ffecar9.jpeg?q=90',
        discription: 'This is for sale',
        category: 'sales',
    },
    {
        id : 27,
        price: 200.0,
        name: 'productName',
        images: 'https://m.media-amazon.com/images/I/91i3W-5QLIL.jpg',
        discription: 'This is for sale',
        category: 'sales',
    },
    {
        id : 28,
        price: 200.0,
        name: 'productName',
        images: 'https://video-play.daraz.com.np/cover/382727.jpg',
        discription: 'This is for sale',
        category: 'sales',
    },

];

export default products;
