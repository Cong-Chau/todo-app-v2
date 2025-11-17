using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Repositories;

public class TodoRepository : ITodoRepository
{
    private readonly AppDbContext _db;

    public TodoRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<List<TodoItem>> GetAll(string? status)
    {
        var query = _db.TodoItems.AsQueryable();
        if (!string.IsNullOrEmpty(status))
            query = query.Where(t => t.Status == status);

        return await query.ToListAsync();
    }

    public async Task<TodoItem?> Get(int id)
        => await _db.TodoItems.FindAsync(id);

    public async Task<TodoItem> Create(TodoItem item)
    {
        _db.TodoItems.Add(item);
        await _db.SaveChangesAsync();
        return item;
    }

    public async Task<TodoItem?> Update(TodoItem item)
    {
        var existing = await _db.TodoItems.FindAsync(item.Id);
        if (existing == null) return null;

        existing.Name = item.Name;
        existing.DueDate = item.DueDate;
        existing.Status = item.Status;

        await _db.SaveChangesAsync();
        return existing;
    }

    public async Task<bool> Delete(int id)
    {
        var item = await _db.TodoItems.FindAsync(id);
        if (item == null) return false;

        _db.TodoItems.Remove(item);
        await _db.SaveChangesAsync();
        return true;
    }
}
