/*
 * Filename: d:\Dev\VueApps\roomcell-web-app\src\router\index.js
 * Path: d:\Dev\VueApps\roomcell-web-app
 * Created Date: Friday, November 29th 2019, 8:36:08 am
 * Author: MEHMET ANIL ALTUNKAN - anil.altunkan@turkcell.com.tr
 *
 * Copyright (c) 2019 Turkcell Technology Research and Development
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
