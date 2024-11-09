'use server';
import { z } from "zod";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  userEmail: z.string(),
  websiteId: z.string(),
});

export const createPost = async (prevState: unknown, formData: FormData) => {
    const validatedFields = PostSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

  const { title, description, userEmail, websiteId } = validatedFields.data;
     console.log("Title" + title)
     console.log("Description" + description)
     console.log("EMail" + userEmail)
     console.log("websiteId" + websiteId)

  try {
    await prisma.post.create({
      data: {
        title,
        description,
        userEmail,
        websiteId // Store the websiteId as foreign key
      },
    });
  } catch (error) {
    console.log("Error creating post:", error);
    return { message: "Failed to create post" };
  }

  revalidatePath("/dashboard"); // Revalidate the path after creation
  redirect("/dashboard"); // Redirect to the dashboard page
};
