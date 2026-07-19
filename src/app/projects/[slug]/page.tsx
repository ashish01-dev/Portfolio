import { redirect } from "next/navigation"

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  redirect("/projects")
}
