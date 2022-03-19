
    //this creates a new Vue 'instance' - this powers everything
    let product = new Vue({ //the options object works to create the instance w/properties
    el:'#app', //'el' for element relates the vue instance and the dom element with the specified id - in this case - #app
    data: { //this gives the instance data properties like 'product: Socks'
        product: 'Socks', //if the data is updated here it will update everywhere the instance is applied
        image: "/socks.jpg",
        link: "http://www.google.com",
        inStock: true,
        onSale: true,
        details:["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
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
    ]
    }
})