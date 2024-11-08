'use server';

import { prisma } from "../prisma";

export const getWebsitesByEmail = async (email: string) => {
    try {
        const websites = await prisma.website.findMany({
            where: { userEmail: email },
            orderBy: { createdAt: 'desc' }, // Order by createdAt in descending order
        });
        return websites;
    } catch (error) {
        console.log("Error fetching websites: " + error);
        return []; // Return an empty array in case of an error
    }
};
