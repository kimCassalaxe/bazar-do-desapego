const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

router.get('/feed', productController.getFeed);
router.get('/search', productController.searchProducts);
router.get('/:id', productController.getProductById);
router.post('/', auth, productController.createProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;