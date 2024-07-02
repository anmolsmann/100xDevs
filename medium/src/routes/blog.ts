import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export  const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    }
}>()

blogRouter.use("/*", (c, next) => {
    next();
});

blogRouter.post('/', async(c) => {
    const body = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

    await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: 1
        }
    })

    return c.text('Hello hono!')
})

blogRouter.put('/', (c) => {
    return c.text('Hello hono!')
})

blogRouter.get('/', (c) => {
    return c.text('Hello hono!')
})

blogRouter.get('/bulk', (c) => {
    return c.text('Hello hono!')
})