using System;
namespace Login_Regi.Models
{
    public class log
    {
        public int id {get;set;}
        public int transaction {get;set;}
        public DateTime created_at {get;set;}
        //public DateTime updated_at {get;set;}
        public int userid {get;set;}
        public logreg user{get;set;}
    }
}