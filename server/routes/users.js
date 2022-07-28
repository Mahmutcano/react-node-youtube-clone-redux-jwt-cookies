import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);
// Delete User
router.delete("/:id",verifyToken, deleteUser);
// Get A User
router.get("/find/:id", getUser);
// Subscribe A User
router.put("/sub/:id",verifyToken, subscribe);
// Unsubscribe A User
router.put("/unsub/:id",verifyToken, unsubscribe);
// Like A Video
router.put("/like/:videoId",verifyToken, like);
// Dislike A Video
router.put("/dislike/:id",verifyToken, dislike);
export default router;
