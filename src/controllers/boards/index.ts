import { Router } from 'express'

import {
  getBoardsListController,
  getBoardController,
  createBoardController,
  updateBoardController,
  deleteBoardController,
} from './boards'

const router = Router()

router.get('/', getBoardsListController)

router.get('/:id', getBoardController)

router.post('/:id', createBoardController)

router.put('/:id', updateBoardController)

router.delete('/:id', deleteBoardController)

export default router