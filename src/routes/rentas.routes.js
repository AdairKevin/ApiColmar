import { Router } from "express";
import { getRentas, createRentas, updateRentas, deleteRentas, getRentaById } from "../controllers/rentas.controller.js";

const router = Router()

router.get('/rentas', getRentas)

router.get('/rentas/:id', getRentaById)

router.post('/rentas', createRentas )

router.patch('/rentas/:id', updateRentas )

router.delete('/rentas/:id', deleteRentas)

export default  router