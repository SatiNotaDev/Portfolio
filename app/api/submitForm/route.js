import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.json();
    const jsonData = JSON.stringify(formData, null, 2);

    const filePath = path.join(process.cwd(), 'data', 'form-submissions.json');

    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf8');
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(fileContent);

    submissions.push(formData);

    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf8');

    return NextResponse.json({ message: 'Данные успешно сохранены' }, { status: 200 });
  } catch (error) {
    console.error('Ошибка сервера:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}