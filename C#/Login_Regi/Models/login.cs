using System;
using System.ComponentModel.DataAnnotations;
namespace Login_Regi.Models
{
    public class login{
        public int id{get;set;}
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password { get; set; }
        
    }
}