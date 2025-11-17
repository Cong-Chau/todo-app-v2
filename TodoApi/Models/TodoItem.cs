namespace TodoApi.Models;

public class TodoItem
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public DateTime DueDate { get; set; }
    public string Status { get; set; } = "Đang làm"; 
}
