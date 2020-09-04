const { Router } = require('express')
const router = Router();

const { 
    getProductBySku,
    createProduct,
    updateProduct,
    deleteProduct
 } = require('../controllers/productsController');

router.post('/product', createProduct);
router.get('/product/:sku',getProductBySku);
router.put('/product/:sku',updateProduct);
router.delete('/product/:sku', deleteProduct);

module.exports = router;