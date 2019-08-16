import {Router} from 'express';
import logger from '../utils/logger';
import bodyParser from 'body-parser';
import { getResponse } from '../service/bot-service';
import { getMessage } from '../controller/bot-controller';
var router = Router()
router.get('/', (req, res) => {
  res.send('GET bot')
})
router.post('/', (req, res) => {
  console.log(req.body.queryResult.parameters);
  
  res.json(getResponse(getMessage(req.body.queryResult.parameters), req.body.queryResult.parameters))
  logger.info('path: /bot/')
})

export default router