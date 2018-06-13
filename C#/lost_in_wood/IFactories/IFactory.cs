using lost_in_wood.Models;
using System.Collections.Generic;
namespace lost_in_wood.Factory
{
    public interface IFactory<T> where T : BaseEntity
    {
    }
}
