import { useParams } from "next/navigation";

// Sadržaj bloga
const postsContent: Record<string, Record<string, string>> = {
  aws: {
    "aws-s3-tutorial": "Tutorijal za AWS S3...",
    "ec2-setup": "Tutorijal za EC2 setup...",
  },
  terraform: {
    "terraform-aws-setup": "Terraform tutorial...",
  },
  devops: {
    "ci-cd-basics": "CI/CD tutorial...",
  },
};

export default function PostPage() {
  const params = useParams();

  // Provjera i tipizacija
  const category = Array.isArray(params?.category) ? params.category[0] : params?.category;
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  if (!category || !slug) return <p>Post nije definiran.</p>;

  const content = postsContent[category]?.[slug];

  if (!content) return <p>Post "{slug}" nije pronađen u kategoriji "{category}".</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{slug.replace(/-/g, " ")}</h1>
      <p>{content}</p>
    </div>
  );
}