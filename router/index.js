const router = require("koa-router")();
const member = require('./member')

router.use(member)

module.exports = router