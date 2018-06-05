using System;
using System.Collections.Generic;

namespace FirstTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // for(int i=1;i<=100;i++){
            //     // if(i%15!=0){
            //     //     if(i%3==0||i%5==0){
            //     //         Console.WriteLine(i);
            //     //     }
            //     // }
            //     if((i%15!=0)&&(i%3==0||i%5==0)){
            //         Console.WriteLine(i);
            //     }
            // }
            int[] numArray = {0,1,2,3,4,5,6,7,8,9};
            string[] nameArray = new string[4] { "Tim", "Martin", "Nikki", "Sara"};
            bool[] boolArray=new bool[10];
            for(int i=0;i<boolArray.Length;i++){
                if(i%2==0){
                    boolArray[i]=true;
                }
                //Console.WriteLine(boolArray[i]);
            }


            List<string> flavors = new List<string>();
            flavors.Add("lemon");
            flavors.Add("chocolate");
            flavors.Add("vanilla");
            flavors.Add("rasberry");
            flavors.Add("blueberry");
            //Console.WriteLine(flavors.Count);
            //Console.WriteLine(flavors[2]);
            flavors.Remove(flavors[2]);
            //Console.WriteLine(flavors.Count);
            Random rand = new Random();
            Dictionary<string,string> user = new Dictionary<string,string>();
            foreach (string name in nameArray)
            {
                //Console.WriteLine(name);
                //user.Add(name,null);
                int num=rand.Next(0,flavors.Count-1);
                user.Add(name,flavors[num]);
            }
            foreach (var entry in user)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
    }}




