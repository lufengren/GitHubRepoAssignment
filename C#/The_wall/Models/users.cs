using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace The_wall.Models
{
    public class users{
        [Key]
        public int UserId{get;set;}
        [Required]
        [MinLength(2)]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string firstname { get; set; }
        [Required]
        [MinLength(2)]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string lastname { get; set; }
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password { get; set; }
        
        // [Required]
        // [DataType(DataType.Password)]
        // [Compare("password")]
        // public string confirmpass { get; set; }


        public List<messages> allmessages{get;set;}
        public List<comments> allcomments{get;set;}

        public users()
        {
            allmessages=new List<messages>();
            allcomments=new List<comments>();
        }
    }
}