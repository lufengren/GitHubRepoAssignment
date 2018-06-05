namespace Human
{
    public class human{
        public string name;
        public int strength=3;
        public int intelligence=3;
        public int dexterity=3;
        public int health=100;
        public human(string passname){
            name=passname;
            
        }
        public human(string passname,int stren=3,int intel=3,int dexte=3,int heal=100){
            strength=stren;
            intelligence=intel;
            dexterity=dexte;
            health=heal;
            name=passname;
        }
        public void attack(human attacked){
            attacked.strength=attacked.strength-5*attacked.strength;
        }
    }
}






