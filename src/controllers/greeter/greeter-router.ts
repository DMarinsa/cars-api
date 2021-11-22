import express from 'express';

const urlPath = '/greeter';

const router = express.Router();

router.get(urlPath, (req, res) => {
    console.log('asdf');
});

export { router as greeterRouter };
