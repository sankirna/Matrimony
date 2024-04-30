using Matrimony.Core.DbContexts;
using Microsoft.EntityFrameworkCore;
using Matrimony.Core.IndentityModels;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Autofac.Core;
using Matrimony.Data;
using Nop.Data;
using FluentMigrator.Runner.Initialization;
using Matrimony.Service;
using Nop.Core.Infrastructure;
using Nop.Core;
using Nop.Web.Framework.Infrastructure.Extensions;
using Nop.Core.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Configuration.AddJsonFile(NopConfigurationDefaults.AppSettingsFilePath, true, true);
if (!string.IsNullOrEmpty(builder.Environment?.EnvironmentName))
{
    var path = string.Format(NopConfigurationDefaults.AppSettingsEnvironmentFilePath, builder.Environment.EnvironmentName);
    builder.Configuration.AddJsonFile(path, true, true);
}
builder.Configuration.AddEnvironmentVariables();

builder.Services.AddDbContext<DatabaseContext>(options =>
       options.UseSqlServer(
           builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>(
        options =>
        {
            options.SignIn.RequireConfirmedAccount = false;
            //Other options go here
        }).AddEntityFrameworkStores<DatabaseContext>();

// Adding Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})

// Adding Jwt Bearer
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:ValidAudience"],
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:SymmetricSecurityKey"]))
    };
});

builder.Services.AddDbContext<DatabaseContext>();

builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Test API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

//load application settings
builder.Services.ConfigureApplicationSettings(builder);
CommonHelper.DefaultFileProvider = new NopFileProvider(builder.Environment);
builder.Services.AddScoped<IConnectionStringAccessor>(x => DataSettingsManager.LoadSettings());
builder.Services.AddTransient<IDataProviderManager, DataProviderManager>();
builder.Services.AddTransient(serviceProvider =>
           serviceProvider.GetRequiredService<IDataProviderManager>().DataProvider);
builder.Services.AddScoped(typeof(IRepository<>), typeof(EntityRepository<>));

builder.Services.AddTransient<ITestService, TestService>();
DataSettingsManager.IsDatabaseInstalled();

builder.Services.AddProblemDetails();
builder.Services.AddControllers();
//builder.Services.AddRouting(options => options.LowercaseUrls = true);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.AllowAnyOrigin()
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.MapSwagger().RequireAuthorization();
    app.UseSwaggerUI();
}
app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
