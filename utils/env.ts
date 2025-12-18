import * as fs from 'fs';

export function getEnvConfig(env: string) {
  const raw = fs.readFileSync(`./config/${env}.json`);
  return JSON.parse(raw.toString());
}