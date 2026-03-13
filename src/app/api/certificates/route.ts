import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dir = path.join(process.cwd(), 'public', 'certificates');

  if (!fs.existsSync(dir)) {
    return NextResponse.json({ files: [] });
  }

  const files = fs.readdirSync(dir)
    .filter(f => f.toLowerCase().endsWith('.pdf'))
    .sort();

  return NextResponse.json({ files });
}
