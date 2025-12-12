var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddHttpClient("WeatherApi");
var app = builder.Build();
app.MapControllers();
app.Run();