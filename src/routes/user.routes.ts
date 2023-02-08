import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const router = Router();

/**
 * http://localhost:3000/api/users [GET]
 */
router.get('/', getUsers);

/**
 * http://localhost:3000/api/user/id? [GET]
 */
router.get('/:id', getUserById);

/**
 * http://localhost:3000/api/user [POST]
 */
router.post('/', createUser);

/**
 * http://localhost:3000/api/user/id? [PUT]
 */
router.put('/:id', updateUser);

/**
 * http://localhost:3000/api/user/id? [DELETE]
 */
router.delete('/:id', deleteUser);

export { router }