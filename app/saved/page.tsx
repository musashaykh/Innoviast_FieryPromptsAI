import { PageIntro } from "@/components/ui/PageIntro";
import { SavedPromptsWorkspace } from "@/features/saved-prompts/components/SavedPromptsWorkspace";

export default function SavedPromptsPage() { return <><PageIntro eyebrow="Saved Prompts" title="Your prompt library.">Search, organize, copy, and return to the prompts that work best for you.</PageIntro><SavedPromptsWorkspace /></>; }
