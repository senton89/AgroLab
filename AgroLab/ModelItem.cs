namespace AgroLab;

public class ModelItem
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Hierarchy { get; set; }

    public ModelItem()
    {
        
    }

    // Конструктор
    public ModelItem(string name, string description, string hierarchy)
    {
        Name = name;
        Description = description;
        Hierarchy = hierarchy;
    }
}

