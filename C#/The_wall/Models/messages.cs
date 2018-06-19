using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace The_wall.Models
{
    public class messages{
        [Key]
        public int MessageId{get;set;}
        public string message{get;set;}
        public DateTime created_at {get;set;}
        public int UserId{get;set;}
        public users users{get;set;}
        public List<comments> comments{get;set;}

        public messages(){
            comments=new List<comments>();
        }
    }
}