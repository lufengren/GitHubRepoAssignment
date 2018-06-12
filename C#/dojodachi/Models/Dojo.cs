using System;
namespace dojodachi.Models
{
    public class Dojo{
        public int Happyness { get; set; }
        public int Fullness { get; set; }
        public int Energy { get; set; }
        public int Meals { get; set; } 
        // public string message { get; set; }
        public Dojo(int hap=20,int ful = 20, int ene = 50,int mea= 3){
            Happyness=hap;
            Fullness=ful;
            Energy=ene;
            Meals=mea;
        }
        
    }
}