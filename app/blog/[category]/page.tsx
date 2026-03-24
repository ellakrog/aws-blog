import Link from "next/link";
import { useParams } from "next/navigation";

// Tipizirani podaci o postovima
type Post = { title: string; slug: string };

const postsByCategory: Record<string, Post[]> = {
  aws: [
    { title: "AWS S3 Tutorial", slug: "aws-s3-tutorial" },
    { title: "EC2 Setup", slug: "ec2-setup" },
  ],
  terraform: [
    { title: "Terraform AWS Setup", slug: "terraform-aws-setup" },
  ],
  devops: [
    { title: "CI/CD Basics", slug: "ci-cd-basics" },
  ],
};

export default function CategoryPage() {
  const params = useParams();

  // Provjera i osiguranje da je category string
  const category = Array.isArray(params?.category) ? params.category[0] : params?.category;

  if (!category) return <p>Kategorija nije definirana.</p>;

  const categoryPosts = postsByCategory[category];

  if (!categoryPosts) return <p>Kategorija "{category}" nema postova.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category.toUpperCase()}</h1>
      <ul>
        {categoryPosts.map((post: Post) => (
          <li key={post.slug}>
            <Link href={`/blog/${category}/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}