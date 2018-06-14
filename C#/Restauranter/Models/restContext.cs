using Microsoft.EntityFrameworkCore;
namespace Restauranter.Models
{
    public class restContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public restContext(DbContextOptions<restContext> options) : base(options) { }
        public DbSet<reviews> reviews { get; set; }
    }
}
