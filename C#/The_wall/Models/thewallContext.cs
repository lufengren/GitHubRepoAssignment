using Microsoft.EntityFrameworkCore;
 
namespace The_wall.Models
{
    public class thewallContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public thewallContext(DbContextOptions<thewallContext> options) : base(options) { }
        public DbSet<users> users { get; set; }
        public DbSet<messages> messages { get; set; }
        public DbSet<comments> comments { get; set; }
    }
}
