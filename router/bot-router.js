import {Router} from 'express';
import logger from '../utils/logger';
import bodyParser from 'body-parser';
var router = Router()
router.get('/', (req, res) => {
  res.send('GET bot')
})
router.post('/', (req, res) => {
  console.log(req.body.queryResult.parameters);
  
  res.json({
    "fulfillmentText": "This is a text response",
  })
  logger.info('path: /bot/')
})

export default router