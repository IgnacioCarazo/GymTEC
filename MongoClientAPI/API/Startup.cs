using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoClientAPI.API;
using MongoClientAPI.API.services;
using MongoDB.Driver;
using System;
using System.IO;
using System.Net.Sockets;
using System.Security.Authentication;

[assembly: FunctionsStartup(typeof(Startup))]
namespace MongoClientAPI.API{

	class Startup : FunctionsStartup{
        public override void Configure(IFunctionsHostBuilder builder){
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            builder.Services.AddSingleton<IConfiguration>(config);
            MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(config["ConnectionString"]));
   
            settings.ConnectTimeout = TimeSpan.FromSeconds(60);
            settings.SocketTimeout = TimeSpan.FromMinutes(5);
            settings.MaxConnectionIdleTime = TimeSpan.FromMinutes(3);
            void SocketConfigurator(Socket s) => s.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.KeepAlive, true);
            settings.ClusterConfigurator = builder => builder.ConfigureTcp(tcp => tcp.With(socketConfigurator: (Action<Socket>)SocketConfigurator));

            settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };

            builder.Services.AddSingleton((s) => new MongoClient(settings));
            builder.Services.AddTransient<IClientService, ClientService>();
        }
    }
}
