using BackEndData;
using BackEndData.Interfaces;
using BackEndData.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLBackEnd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => options.AddDefaultPolicy(
                builder => builder.AllowAnyOrigin()));

            var SQLConnectionConfiguration = new SQLConfiguration(Configuration.GetConnectionString("SQLConnection"));


            services.AddSingleton(SQLConnectionConfiguration);

            services.AddScoped<IEmployee, REmployee>();
            services.AddScoped<IGym, RGym>();
            services.AddScoped<IGymClass, RGymClass>();
            services.AddScoped<IJob, RJob>();
            services.AddScoped<IMachine, RMachine>();
            services.AddScoped<IMachineType, RMachineType>();
            services.AddScoped<IProduct, RProduct>();
            services.AddScoped<IService, RService>();
            services.AddScoped<ISpreadsheetType, RSpreadsheetType>();
            services.AddScoped<ITreatment, RTreatment>();
            services.AddScoped<IGenerateWorksheet, RGenerateWorksheet>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SQLBackEnd", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "SQLBackEnd v1");
                    });
            }

            app.UseCors(builder =>
                builder.WithOrigins().AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
