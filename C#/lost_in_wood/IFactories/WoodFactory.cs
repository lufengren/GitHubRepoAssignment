using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using lost_in_wood.Models;

 
namespace lost_in_wood.Factory
{
    public class WoodFactory : IFactory<lostinwood>
    {
        private string connectionString;
        public WoodFactory()
        {
            connectionString = "server=localhost;userid=root;password=780728;port=3306;database=wooddb;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }


        public void Add(lostinwood item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO woods (Name, Description, Length, Elevation, Latitude,Longitude) VALUES (@Name, @Description, @Length,@Elevation,@Latitude,@Longitude)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<lostinwood> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<lostinwood>("SELECT * FROM woods");
            }
        }
        public lostinwood FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<lostinwood>("SELECT * FROM woods WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
    }


    
}


    