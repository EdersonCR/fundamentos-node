import fs from 'node:fs';
import { parse } from 'csv-parse';

const csvPath = new URL('./tasks.csv', import.meta.url);

async function importCSVAndPostTasks() {
  const parser = fs.createReadStream(csvPath).pipe(
    parse({
      delimiter: ',',
      from_line: 2,
    })
  );

  for await (const record of parser) {
    const [title, description] = record;

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        console.error(`Erro ao criar task: ${response.statusText}`);
      } else {
        console.log(`Task criada: ${title}`);
      }
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch {
      console.error(`Erro na requisição.`);
    }
  }
}

importCSVAndPostTasks();
