using System;

namespace inheritance
{
    class Wizard : Human
    {
    

         public Wizard(string person) : base(person)
         {
            health = 50;
            intelligence = 25;
        }

        public void heal()
        {
            intelligence *= 10;
        }    

        public void fireball(Human enemy)
        {
            enemy.health -= new Random().Next(20,50);

        }
    }
}
