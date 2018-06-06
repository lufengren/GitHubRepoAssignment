using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck deck=new Deck();
            deck.deal();
            deck.reset();
            deck.shuffle();
            // foreach(var card in deck.cards){
            //     Console.WriteLine(card.stringVal+" "+card.suit+" "+card.val);
            // }
            Player player=new Player();
            player.draw(deck);
            player.discard(0);
        }
    }
}


