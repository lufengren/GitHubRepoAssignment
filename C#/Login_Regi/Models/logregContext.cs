using Microsoft.EntityFrameworkCore;
namespace Login_Regi.Models
{
    public class logregContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public logregContext(DbContextOptions<logregContext> options) : base(options) { }
        public DbSet<logreg> logreg { get; set; }
        // public DbSet<login> login { get; set; }
    }
}