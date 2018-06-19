using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace The_wall.Models
{
    public class comments{
        [Key]
        public int CommentId{get;set;}
        public string comment{get;set;}
        public DateTime created_at {get;set;}
        public int UserId{get;set;}
        public users users{get;set;}

        public int MessageId{get;set;}
        public messages messages{get;set;}
        
    }
}