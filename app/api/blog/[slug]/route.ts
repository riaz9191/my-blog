
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/blog';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching blog', error }, { status: 500 });
  }
}
