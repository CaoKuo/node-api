import Koa, { ParameterizedContext } from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import Router from "koa-router"
import config from '../config'
import AppRoutes from '../router'

const app = new Koa()
const router = new Router()

AppRoutes.forEach(route => router[route.method](route.path, route.action))

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.PORT)

console.log(`应用启动成功 端口:${config.PORT}`);