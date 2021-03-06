import {ProductItem} from "./ProductItem.js";

export const Products = {
    inject: ['API', 'getJson'],
    components: {
        ProductItem
    },
    data() {
        return {
            // catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://placehold.it/200x150'
        }
    },
    // computed: {
    //     filtered() {
    //         return this.products.filter(el => new RegExp(this.userSearch, 'i').test(el.product_name));
    //     }
    // },
    mounted() {
        // this.getJson(`${this.API + this.catalogUrl}`)
        //     .then(data => {
        //         for (let el of data) {
        //             this.products.push(el);
        //         }
        //     });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
    },
    template: `
        <div class="products product product_class class_name classBlock">
                <ProductItem 
                v-for="el of products" 
                :key="el.id_product"
                :img="imgCatalog"
                :product="el"
                >
                </ProductItem>
            </div>
    `
};