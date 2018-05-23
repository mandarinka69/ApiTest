const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();

router.get("/block_search", async (ctx,next) => {

    ctx.status = 200;
ctx.body = "response";
await next();


});

app.use(async function (ctx, next) {
    console.log("req url : " + ctx.request.url);
    await next();
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8082);