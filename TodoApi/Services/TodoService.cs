using TodoApi.Models;
using TodoApi.Repositories;

namespace TodoApi.Services;

public class TodoService
{
    private readonly ITodoRepository _repo;

    public TodoService(ITodoRepository repo)
    {
        _repo = repo;
    }

    public Task<List<TodoItem>> GetAll(string? status) => _repo.GetAll(status);
    public Task<TodoItem?> Get(int id) => _repo.Get(id);
    public Task<TodoItem> Create(TodoItem item) => _repo.Create(item);
    public Task<TodoItem?> Update(TodoItem item) => _repo.Update(item);
    public Task<bool> Delete(int id) => _repo.Delete(id);
}
