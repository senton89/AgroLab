using System.Windows.Controls;
using System;
using System.Collections.Generic;
using System.Windows;

namespace AgroLab;

public partial class EquipmentAccountingUC : UserControl
{
    private List<Equipment> equipmentList = new();
    public EquipmentAccountingUC()
    {
        InitializeComponent();
        lvEquipmentList.ItemsSource = equipmentList;
    }
    private void AddButton_Click(object sender, RoutedEventArgs e)
    {
        var equipment = new Equipment
        {
            DateAccounting = dpDateAccounting.SelectedDate,
            EquipmentName = txtEquipmentName.Text,
            EquipmentCategory = (cmbCategory.SelectedItem as ComboBoxItem)?.Content.ToString(),
            Manufacturer = txtManufacturer.Text,
            SerialNumber = txtSerialNumber.Text,
            ReceivedDate = dpReceivedDate.SelectedDate,
            Condition = txtCondition.Text,
            VerificationData = txtVerificationData.Text,
            NextVerificationDate = dpNextVerificationDate.SelectedDate
        };

        equipmentList.Add(equipment);
        lvEquipmentList.Items.Refresh();
        ClearFields();
    }

    private void DeleteButton_Click(object sender, RoutedEventArgs e)
    {
        if (lvEquipmentList.SelectedItem is Equipment selectedEquipment)
        {
            equipmentList.Remove(selectedEquipment);
            lvEquipmentList.Items.Refresh();
        }
    }
    
    private void EditButton_Click(object sender, RoutedEventArgs e)
        {
            if (lvEquipmentList.SelectedItem is Equipment selectedEquipment)
            {
                selectedEquipment.DateAccounting = dpDateAccounting.SelectedDate;
                selectedEquipment.EquipmentName = txtEquipmentName.Text;
                selectedEquipment.EquipmentCategory = (cmbCategory.SelectedItem as ComboBoxItem)?.Content.ToString();
                selectedEquipment.Manufacturer = txtManufacturer.Text;
                selectedEquipment.SerialNumber = txtSerialNumber.Text;
                selectedEquipment.ReceivedDate = dpReceivedDate.SelectedDate;
                selectedEquipment.Condition = txtCondition.Text;
                selectedEquipment.VerificationData = txtVerificationData.Text;
                selectedEquipment.NextVerificationDate = dpNextVerificationDate.SelectedDate;

                lvEquipmentList.Items.Refresh();
                ClearFields();
            }
        }

        private void LvEquipmentList_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            if (lvEquipmentList.SelectedItem is Equipment selectedEquipment)
            {
                dpDateAccounting.SelectedDate = selectedEquipment.DateAccounting;
                txtEquipmentName.Text = selectedEquipment.EquipmentName;
                cmbCategory.SelectedItem = selectedEquipment.EquipmentCategory;
                txtManufacturer.Text = selectedEquipment.Manufacturer;
                txtSerialNumber.Text = selectedEquipment.SerialNumber;
                dpReceivedDate.SelectedDate = selectedEquipment.ReceivedDate;
                txtCondition.Text = selectedEquipment.Condition;
                txtVerificationData.Text = selectedEquipment.VerificationData;
                dpNextVerificationDate.SelectedDate = selectedEquipment.NextVerificationDate;
            }
        }

        private void ClearFields()
        {
            dpDateAccounting.SelectedDate = null;
            txtEquipmentName.Clear();
            cmbCategory.SelectedIndex = -1;
            txtManufacturer.Clear();
            txtSerialNumber.Clear();
            dpReceivedDate.SelectedDate = null;
            txtCondition.Clear();
            txtVerificationData.Clear();
            dpNextVerificationDate.SelectedDate = null;
        }

    public class Equipment
    {
        public DateTime? DateAccounting { get; set; }
        public string EquipmentName { get; set; }
        public string EquipmentCategory { get; set; }
        public string Manufacturer { get; set; }
        public string SerialNumber { get; set; }
        public DateTime? ReceivedDate { get; set; }
        public string Condition { get; set; }
        public string VerificationData { get; set; }
        public DateTime? NextVerificationDate { get; set; }
    }
}
        


        