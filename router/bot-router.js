import {Router} from 'express';
import logger from '../utils/logger';

var router = Router()
router.get('/', (req, res) => {
  res.send('GET bot')
})
router.post('/', (req, res) => {
  res.send('Bot')
  logger.info('path: /bot/')
  console.log('path: /bot/')
})

export default router