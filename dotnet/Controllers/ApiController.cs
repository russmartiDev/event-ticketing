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

        [HttpGet]
        public IActionResult Get()
        {
            var data = _eventsService.GetData();
            return Ok(data);
        }

        [HttpGet("events")]
        public IActionResult GetEvents()
        {
            List<EventsModel> events = _eventsService.GetData();
            return Ok(events);
        }


    }
}
