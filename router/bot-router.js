import {Router} from 'express';
import logger from '../utils/logger';

var router = Router()
router.post('/', (req, res) => {
  res.send('Bot')
  logger.info('path: /bot/')
  console.log('path: /bot/')
})

export default router