using System;

namespace inheritance
{
    class Ninja : Human
    {
        public Ninja(string person) : base(person)
        {
            dexterity = 175;
        }

        public void get_away()
        {
            health -= 15;
        }    

        public void steal(Human enemy)
        {
            attack(enemy);
            health += 10;

        }
    }
}
