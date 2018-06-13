using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace MusicLINQ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //=========================================================
            //There is only one artist in this collection from Mount 
            //Vernon. What is their name and age?
            //=========================================================
            var results1=from Artist in Artists
                        where Artist.Hometown=="Mount Vernon"
                        select new{Artist.ArtistName,Artist.Age};
            foreach(var result1 in results1){
                Console.WriteLine(result1.ToString());
            }
            
            //=========================================================
            //Who is the youngest artist in our collection of artists?
            //=========================================================
            var results2=(from Artist in Artists orderby Artist.Age ascending 
                        select Artist).First();
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( results2, Formatting.Indented ));

            //=========================================================
            //Display all artists with 'William' somewhere in their 
            //real name        
            //=========================================================
            var results3=from Artist in Artists 
                        where Artist.RealName.Contains("William")
                        select Artist;
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( results3, Formatting.Indented ));
            //=========================================================
            //Display all groups with names less than 8 characters
            //=========================================================
            var results4=from grou in Groups
                    where grou.GroupName.Length<8
                    select grou;
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( results4, Formatting.Indented ));

            //=========================================================
            //Display the 3 oldest artists from Atlanta
            //=========================================================
            var results5=(from Artist in Artists orderby Artist.Age descending 
                        select Artist).Take(3);
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( results5, Formatting.Indented ));
            //=========================================================
            //(Optional) Display the Group Name of all groups that have 
            //at least one member not from New York City
            //=========================================================


            //=========================================================
            //(Optional) Display the artist names of all members of the 
            //group 'Wu-Tang Clan'
            //=========================================================
        }
    }
}
