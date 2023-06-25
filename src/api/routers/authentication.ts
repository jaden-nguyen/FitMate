import { Router } from "express";

import { authentication } from "../controllers/authentication";

export default (router: Router) => {
  router.post("/auth/register", authentication.register);
  router.get("/auth/login", authentication.login);
};
