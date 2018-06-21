using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Wedding_planer.Models
{
    public class guests{
    [Key]
    public int guestid {get;set;}
    public int UserId {get;set;}
    public users user {get;set;}
    public int weddingid {get;set;}
    public weddings wedding {get;set;}
}
}