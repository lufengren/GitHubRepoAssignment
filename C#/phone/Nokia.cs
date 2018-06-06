using System;
namespace phone
{
    public class Nokia : Phone, IRingable
    {
        public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone)
           : base(versionNumber, batteryPercentage, carrier, ringTone) { }
        public string Ring()
        {
            string temp = "... " + RingTone + " ...";
            return temp;
        }
        public string Unlock()
        {
            string temp = "Nokia " + VersionNumber + " unlocked with passcode";
            return temp;
        }
        public override void DisplayInfo()
        {
            Console.WriteLine("$$$$$$$$$$$$$$");
            Console.WriteLine(nameof(Nokia) + VersionNumber);
            Console.WriteLine("Battery Percentage: " + BatteryPercentage);
            Console.WriteLine("Carrier " + Carrier);
            Console.WriteLine("Ring Tong " + RingTone);
            Console.WriteLine("$$$$$$$$$$$$$$");
        }
        
    }
}