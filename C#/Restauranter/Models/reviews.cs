using System;
using System.ComponentModel.DataAnnotations;
namespace Restauranter.Models
{
    public class reviews
    {
        
        [Required]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        [MinLength(10)]
        public string review { get; set; }
        [Required]
        public string restname { get; set; }
        [Required]
        public DateTime visittime { get; set; }
        [Required]
        public int stars {get;set;}
        public DateTime created_at { get; set; }
 
        public DateTime updated_at { get; set; }
    }
}