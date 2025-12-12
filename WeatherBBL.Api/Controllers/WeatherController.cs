using Microsoft.AspNetCore.Mvc;
namespace WeatherBBL.Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class WeatherController: ControllerBase{
    [HttpGet("current")] public IActionResult GetCurrent(string city)=>Ok();
    [HttpGet("forecast")] public IActionResult GetForecast(string city)=>Ok();
}