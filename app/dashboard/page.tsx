import { PageIntro } from "@/components/ui/PageIntro";
import { DashboardWorkspace } from "@/features/dashboard/components/DashboardWorkspace";

export default function DashboardPage() { return <><PageIntro eyebrow="Dashboard" title="See your prompt workflow at a glance.">Track saved prompts, quality trends, and recent activity from one focused workspace.</PageIntro><DashboardWorkspace /></>; }
