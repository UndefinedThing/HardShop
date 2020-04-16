import React, { createContext, Component } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });
