import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { profile } from "../src/data/profile.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const venvPython = path.join(root, ".venv", "bin", "python3");
const scriptFile = path.join(root, "public", "intro-script.txt");
const outputFile = path.join(root, "public", "intro-narration.mp3");

const VOICE =
  profile.introAvatar?.narrationVoice || "en-US-AndrewMultilingualNeural";

const python = existsSync(venvPython) ? venvPython : "python3";

console.log(`Generating narration with ${VOICE}...`);

try {
  execSync(`${python} -m pip install edge-tts -q`, {
    stdio: "inherit",
    cwd: root,
  });
} catch {
  console.warn("pip install edge-tts had warnings; continuing...");
}

execSync(
  `${python} -m edge_tts --voice "${VOICE}" --file "${scriptFile}" --write-media "${outputFile}"`,
  { stdio: "inherit", cwd: root }
);

console.log(`\nNarration saved to ${outputFile}`);
console.log("Refresh the site to hear the updated voice.");
