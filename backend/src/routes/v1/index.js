import express from 'express';
import { getAllProductsControllers, getProductControllers, getUpdateProductControllers, getDeleteProductControllers, postProductsControllers } from '../../controllers/product-controller.js'
import { loginController, registerController } from '../../controllers/auth-controller.js'
import { getAllReviewController, getOneUserReviewController, getUserReviewController, updateReviewController } from '../../controllers/review-controller.js';
import multer from "multer";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },
})

const uploadStorage = multer({ storage: storage })

export const router = express.Router();

// Products Routes
router.post('/products', uploadStorage.single('image'), postProductsControllers);
router.get('/products', getAllProductsControllers);
router.get('/products/:id', getProductControllers);
router.put('/products/:id', uploadStorage.single("image"), getUpdateProductControllers);
router.delete('/products/:id', getDeleteProductControllers);


//Auth Routes
router.post('/user/register', registerController);
router.post('/user/login', loginController);


//review controller

router.get('/review', getOneUserReviewController);
router.get('/review/user', getAllReviewController);
router.put('/review/:id', updateReviewController);
router.get('/review/:id', getUserReviewController);

