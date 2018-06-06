using System;

namespace inheritance
{
    class Samurai : Human
    {
        public Samurai(string person) : base(person)
        {
            health = 200;
        }

        public void meditate()
        {
            health = 200;
        }    

        public void death_blow(Human enemy)
        {
            attack(enemy);
            if (health<50)
            {
                health = 0;
            }
        }
    }
}
