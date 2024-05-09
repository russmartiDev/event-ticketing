using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Events.Services;
using Events.Models;

namespace Events.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly EventsService _eventsService;

        public ApiController(EventsService eventsService)
        {
            _eventsService = eventsService;
        }


        [HttpGet("events/{eventType}")]
        public IActionResult GetEvents(string eventType = null)
        {
            List<EventsModel> events = _eventsService.GetData(eventType);
            return Ok(events);
        }


    }
}
