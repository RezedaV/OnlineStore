export const ProductItem = {
    props: ['img', 'product'],
    template: `
    <div class="product-item" >
                    <img :src="img" :alt="product.product_name">
                    <div class="desc product_info">
                        <h3 class="text_Product">{{product.product_name}}</h3>
                        <p class="price_Product">{{product.price}}</p>
                        <button class="buy-btn product_add" @click="$root.$refs.cart.addProduct(product)">Add to Cart</button>
                    </div>
                </div>
    
    `
};