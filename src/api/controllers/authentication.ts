import { Request, Response } from "express";

export const authentication = {
  register: async (req: Request, res: Response) => {
    try {
      // enter logic here
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      // enter logic here
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  },
};
