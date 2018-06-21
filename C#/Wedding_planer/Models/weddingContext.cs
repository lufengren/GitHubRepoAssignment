using Microsoft.EntityFrameworkCore;
namespace Wedding_planer.Models
{
    public class weddingContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public weddingContext(DbContextOptions<weddingContext> options) : base(options) { }
        public DbSet<users> users { get; set; }
        public DbSet<guests> guests { get; set; }
        public DbSet<weddings> weddings { get; set; }
        
    }
}