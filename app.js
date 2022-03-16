
    //this creates a new Vue 'instance' - this powers everything
    let app = new Vue({ //the options object works to create the instance w/properties
    el:'#app', //'el' for element relates the vue instance and the dom element with the specified id - in this case - #app
    data: { //this gives the instance data properties like 'product: Socks'
        product: 'Boots', //if the data is updated here it will update everywhere the instance is applied
        description: 'It puts it on.'
    }
})