const express = require('express');
const router = express.Router();
//	GET	/	라우터
router.get('/', (req, res) => {
    res.send('김정현');
});
module.exports = router;