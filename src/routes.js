import { randomUUID } from 'node:crypto';
import { Database } from './database.js';
import { buildRoutePath } from './utils/route-url.js';

const database = new Database();

function validateBody(body) {
  if (!body) return false;
  if (typeof body.title !== 'string' || !body.title.length) return false;
  if (typeof body.description !== 'string' || !body.description.length) return false;
  return true;
}

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query;

      const tasks = database.select('tasks', search ? {
        title: search,
        description: search
      } : null);

      return res.end(JSON.stringify(tasks));
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      if (!validateBody(req.body)) {
        return res.writeHead(400).end('Invalid request body');
      }
      const { title, description } = req.body;
      const now = new Date();
      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: now,
        updated_at: now
      };
      database.insert('tasks', task);
      return res.writeHead(201).end();
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;
      if (!validateBody(req.body)) {
        return res.writeHead(400).end('Invalid request body');
      }
      const task = { 
        ...req.body,
        updated_at: new Date()
      };
      const success = database.update('tasks', id, task);
      if (success) {
        return res.writeHead(204).end();
      }
      return res.writeHead(404).end('Task not found');
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params;
      const now = new Date();
      const task = {
        completed_at: now,
        updated_at: now,
      };
      const success = database.update('tasks', id, task);
      if (success) {
        return res.writeHead(204).end();
      }
      return res.writeHead(404).end('Task not found');
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;
      const success = database.delete('tasks', id);
      if (success) {
        return res.writeHead(204).end();
      }
      return res.writeHead(404).end('Task not found');
    }
  }
]