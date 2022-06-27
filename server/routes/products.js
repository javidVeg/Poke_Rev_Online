// const express = require('express')
// const { commentPost } = require('../controllers/postControllers')

// const router = express.Router();

// router.post('/commentPost', commentPost);

// module.exports = router;
const express = require("express");

const {
  getProducts,
  createProducts,
  updateProducts,
  // commentProducts,
  deleteProducts,
} = require("../controllers/productController");

const router = express.Router();

const { protect } = require("../middleware/midd-auth");

router.route("/").get(getProducts).post(createProducts);
router.route("/:id").delete(deleteProducts).put(updateProducts);

// router.get('/', getPosts);
// router.get('/:id', getPost);
// router.get('/', getPosts);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.post('/:id/commentPost', commentPost);

module.exports = router;
