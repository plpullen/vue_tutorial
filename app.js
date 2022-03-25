
    //this creates a new Vue 'instance' - this powers everything
    let product = new Vue({ //the options object works to create the instance w/properties
    el:'#app', //'el' for element relates the vue instance and the dom element with the specified id - in this case - #app
    data: { //this gives the instance data properties like 'product: Socks'
        product: 'Socks', //if the data is updated here it will update everywhere the instance is applied
        image: "/green_socks.jpg",
        link: "http://www.google.com",
        inStock: true,
        onSale: true,
        details:["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '/green_socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: '/blue_socks.jpg'
            }
        ],
        sizes:[
            {
                sizeId: 1,
                productSize:"sm"
            },
        {
            sizeId: 2,
            productSize: "med"
        },
        {
            sizeId: 3,
            productSize: "lg"
        }
    ],
    cart: 0,
    },
    methods: {
    addToCart(){this.cart += 1},
    updateProduct(variantImage){
        this.image = variantImage
    },
    removeFromCart(){this.cart -= 1}
    }
}
)