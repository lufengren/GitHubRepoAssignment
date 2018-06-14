using System;
using System.ComponentModel.DataAnnotations;
namespace Login_Regi.Models
{
    public class logreg{
        public int id{get;set;}
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

        public static implicit operator logreg(logregContext v)
        {
            throw new NotImplementedException();
        }
    }
}