using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Events.Models; // Add this using directive

namespace Events.Services
{
    public class EventsService
    {
        private readonly string _connectionString;

        public EventsService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection")
                ?? throw new ArgumentNullException(nameof(configuration), "Connection string must be provided.");
        }

        public List<EventsModel> GetData()
        {
            List<EventsModel> eventsList = new List<EventsModel>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string query = "SELECT * FROM Events";

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        EventsModel eventsModel = new EventsModel
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            Location = reader.GetString(reader.GetOrdinal("Location")),
                            TicketPrice = reader.GetInt32(reader.GetOrdinal("TicketPrice")),
                            Date = reader.GetDateTime(reader.GetOrdinal("Date")),
                            Image = reader.GetString(reader.GetOrdinal("Image"))
                        };

                        eventsList.Add(eventsModel);
                    }

                    reader.Close();
                }
            }

            return eventsList;
        }

        // Implement other CRUD operations as needed
    }
}
