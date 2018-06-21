using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Wedding_planer.Models
{
    public class weddings{
    [Key]
    public int weddingid {get;set;}
    [Required]
    public string wedderone {get;set;}
    [Required]
    public string weddertwo {get;set;}
    [Required]
    [DisplayFormat(DataFormatString="{0:yyyy-MM-dd}")]
    public DateTime date {get;set;}
    [Required]
    public string address {get;set;}
    
    public int UserId {get;set;}
    public users user {get;set;}

    public List<guests> guests {get;set;}
    public weddings(){
        guests=new List<guests>();
    }
    }
}