import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const emailRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),

    create: publicProcedure
        .input(z.object({ address: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.email.create({
                data: {
                    code: input.address,
                },
            });
        }),

    getLatest: publicProcedure
        .input(z.object({ to: z.string().min(1) }))
        .query(async ({ ctx, input }) => {
            const post = await ctx.db.email.findFirst({
                where: {
                    to: input.to,
                },
                orderBy: { createdAt: "desc" },
            });

            return post ?? null;
        }),

});
