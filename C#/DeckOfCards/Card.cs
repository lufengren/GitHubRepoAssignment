using System;
using System.Collections.Generic;
namespace DeckOfCards
{   
    public class Card 
    {
        public string stringVal;
        public string suit;
        public int val;
        public Card(string strval,string passsuit,int passval){
            this.stringVal=strval;
            this.suit=passsuit;
            this.val=passval;
        }
    }
    public class Deck
    {
        public List<Card> cards=new List<Card>();
        public Deck(){
            init();
        }
        private void init(){
            int[] array3={1,2,3,4,5,6,7,8,9,10,11,12,13};
            string[] array1={"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
            string[] array2={"Clubs", "Spades", "Hearts", "                hDiamonds"};
            for (int i=0;i<13;i++){
                foreach(var suit in array2){
                    Card temp=new Card(array1[i],suit,array3[i]);
                    cards.Add(temp);
                }
            }
        }
        public Card deal(){
            var temp=cards[cards.Count-1];
            cards.RemoveAt(cards.Count-1);
            return temp;
        }
        public void reset(){
            init();
        }
        public void shuffle(){
            Random rand = new Random();
            Card temp;
            for(int i=0;i<cards.Count;i++){
                int ran=rand.Next(i,cards.Count);
                temp=cards[i];
                cards[i]=cards[ran];
                cards[ran]=temp;
            }
        }
    }

    public class Player
    {
        public string name;
        public List<Card> hand=new List<Card>();
        public void draw(Deck deck){
            //Deck deckins=new Deck();
            Card newcard=deck.deal();
            hand.Add(newcard);
        }
        public Card discard(int index){
            if(index<0||index>hand.Count-1){
                Console.WriteLine("null");
                return null;
            }else{
                Card removecard=hand[index];
                hand.RemoveAt(index);
                Console.WriteLine("removed");
                return removecard;
            }
        }
    }
}