using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace AgroLab;

public partial class StolenMain : Window
{
    public StolenMain()
    {
        InitializeComponent();
    }

    private void MenuItem_Click(object sender, RoutedEventArgs e)
    {
        Button button = sender as Button;
        ItemsControl subMenu = FindVisualChild<ItemsControl>(button);
        subMenu.Visibility = subMenu.Visibility == Visibility.Collapsed ? Visibility.Visible : Visibility.Collapsed;
    }
    
    public static T FindVisualChild<T>(DependencyObject parent) where T : DependencyObject
    {
        for (int i = 0; i < VisualTreeHelper.GetChildrenCount(parent); i++)
        {
            var child = VisualTreeHelper.GetChild(parent, i);
            if (child is T typedChild)
            {
                return typedChild;
            }

            var childOfChild = FindVisualChild<T>(child);
            if (childOfChild != null)
            {
                return childOfChild;
            }
        }
        return null;
    }

}