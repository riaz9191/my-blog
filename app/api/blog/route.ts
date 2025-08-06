
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/blog';

export async function POST(req: Request) {
  await connectDB();
  const { title, content, author, image, slug } = await req.json();

  try {
    const newBlog = new Blog({ title, content, author, image, slug });
    await newBlog.save();
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating blog post', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();

  try {
    const blogs = await Blog.find({});
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching blogs', error }, { status: 500 });
  }
}
