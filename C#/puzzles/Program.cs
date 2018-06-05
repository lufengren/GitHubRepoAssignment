using System;
using System.Collections.Generic;
namespace puzzles
{
    class Program
    {

        static void RandomArray(){
            int[] ranArray = new int[10];
            int sum=0;
            Random rand = new Random();
            for(int i=0;i<ranArray.Length;i++){
                ranArray[i]=rand.Next(5,25);
                Console.WriteLine(ranArray[i]);
            }
            int max=ranArray[0];
            int min=ranArray[0];
            for(int i=1;i<ranArray.Length;i++){
                sum+=ranArray[i];
                if(ranArray[i]>max){
                    max=ranArray[i];
                }
                if(ranArray[i]<min){
                    min=ranArray[i];
                }
            }
            Console.WriteLine("max is "+max);
            Console.WriteLine("min is "+min);
            Console.WriteLine("sum is "+sum);
        }

        static string TossCoin(){
            Console.WriteLine("Toss a coin");
            Random rand = new Random();
            int chance=rand.Next(1,3);
            string result="";
            if(chance==1){
                result="Head";
            }
            if(chance==2){
                result="Tail";
            }
            Console.WriteLine(result);
            return result;
        }

        static Double TossMultipleCoins(int num){
            int heads=0;
            for(int i=0;i<num;i++){
                string result=TossCoin();
                if(result=="Head"){
                    heads++;
                }
            }
            Console.WriteLine(heads);
            Console.WriteLine(num);
            double ratio=0;
            ratio=(double)heads/num;
            Console.WriteLine(ratio);
            return ratio;
        }

        static string[] Names(){
            string[] nameArray = new string[5]{ "Todd", "Tiffany", "Charlie", "Geneva", "Sydney"}; 
            Random random=new Random();
            string temp;
            List<string> newarray = new List<string>();
            for(int i=0;i<nameArray.Length;i++){
                int ran=random.Next(i,nameArray.Length);
                temp=nameArray[i];
                nameArray[i]=nameArray[ran];
                nameArray[ran]=temp;
            }
            for(int i=0;i<nameArray.Length;i++){
                Console.WriteLine(nameArray[i]);
                if(nameArray[i].Length>5){
                    newarray.Add(nameArray[i]);
                }
            }
            foreach(string name in newarray.ToArray()){
                Console.WriteLine(name);
            }
            //Console.WriteLine(newarray);
            return newarray.ToArray();
        }

        static void Main(string[] args)
        {
            RandomArray();
            TossCoin();
            TossMultipleCoins(5);
            Names();
        }
    }
}
