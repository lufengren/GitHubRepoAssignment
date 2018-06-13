using System;
using System.ComponentModel.DataAnnotations;
namespace lost_in_wood.Models
{
    public abstract class BaseEntity {}
    public class lostinwood : BaseEntity
    {
        [Key]
        public long Id { get; set; }
 
        [Required]
        public string Name { get; set; }

        [MinLength(10)]
        public string Description{get;set;}

        [RegularExpression("^[0-9]*$", ErrorMessage = "Length must be numeric")]
        public int Length { get; set; }
 
        [RegularExpression("^[0-9]*$", ErrorMessage = "Elevation must be numeric")]
        public int Elevation { get; set; }

        public float Latitude { get; set; }
        public float Longitude { get; set; }
    }
}