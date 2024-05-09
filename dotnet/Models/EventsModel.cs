namespace Events.Models
{
    public class EventsModel
    {
        public int Id { get; set; }
        required public string Title { get; set; }
        required public string Description { get; set; }
        required public string Location { get; set; }
        required public int TicketPrice { get; set; }
        public DateTime Date { get; set; }
        required public string Image { get; set; }
    }
    public class PaymentModel
    {
        public int Id { get; set; }
        required public string Reference { get; set; }
        required public string FullName { get; set; }
        required public string Email { get; set; }
        required public int EventID { get; set; }
        required public int Qty { get; set; }
        required public string Status { get; set; }


    }
}
