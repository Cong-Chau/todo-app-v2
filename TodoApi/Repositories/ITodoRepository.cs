using TodoApi.Models;

namespace TodoApi.Repositories;

public interface ITodoRepository
{
    Task<List<TodoItem>> GetAll(string? status);
    Task<TodoItem?> Get(int id);
    Task<TodoItem> Create(TodoItem item);
    Task<TodoItem?> Update(TodoItem item);
    Task<bool> Delete(int id);
}
