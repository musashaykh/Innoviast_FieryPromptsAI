import { cpSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const serverDirectory = join(process.cwd(), ".next", "server");
const chunkDirectory = join(serverDirectory, "chunks");

if (!existsSync(chunkDirectory)) {
  process.exit(0);
}

for (const entry of readdirSync(chunkDirectory, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".js")) {
    cpSync(join(chunkDirectory, entry.name), join(serverDirectory, entry.name));
  }
}
