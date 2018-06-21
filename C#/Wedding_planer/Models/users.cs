using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Wedding_planer.Models
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
        public List<weddings> createdweddings {get;set;}
        public List<guests> weddings {get;set;}

        public users(){
            createdweddings=new List<weddings>();
            weddings=new List<guests>();
        }
    }
}