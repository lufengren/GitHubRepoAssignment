using System;
namespace phone
{
    public class Galaxy : Phone, IRingable
    {
        public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone)
            : base(versionNumber, batteryPercentage, carrier, ringTone) { }
        public string Ring()
        {
            string temp="... "+RingTone+" ...";
            return temp;
        }

        public string Unlock()
        {
            string temp="Galaxy "+VersionNumber+" unlocked with fingerprint scanner";
            return temp;
        }
        public override void DisplayInfo()
        {
            Console.WriteLine("###############");
            Console.WriteLine(nameof(Galaxy)+VersionNumber);
            Console.WriteLine("Battery Percentage: "+BatteryPercentage);
            Console.WriteLine("Carrier "+Carrier);
            Console.WriteLine("Ring Tong "+RingTone);
            Console.WriteLine("###############");
        }
    }

}