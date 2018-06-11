using System;
using System.ComponentModel.DataAnnotations;
namespace Survey_model.Models
{
    public class Ninja
    {
        [Required]
        [Range(2,15)]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string Language { get; set; }
        [Range(8,30)]
        public string Comment { get; set; }
    }
}