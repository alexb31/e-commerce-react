import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', img: 'https://www.benson-shoes.com/Lib/Images/Home/Slide1.jpg'},
    { id: 2, name: 'Laptop', description: 'Asus Rog', price: '$10', img: 'https://www.notebookcheck.biz/uploads/tx_nbc2/csm_GL504_Hero_Cam05Lighting_v1_740f45a0ab.jpg'},
]


const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
    )
}

export default Products