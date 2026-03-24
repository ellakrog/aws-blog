import Link from "next/link";

const categories = ["aws", "terraform", "devops"];

export default function BlogPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog Kategorije</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link href={`/blog/${cat}`}>{cat.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}