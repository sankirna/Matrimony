using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel;

namespace Matrimony.Core
{
    public static class EnumHelper
    {
        // Get the value of the description attribute if the   
        // enum has one, otherwise use the value.  
        public static string GetDescription<TEnum>(this TEnum value)
        {
            var fi = value.GetType().GetField(value.ToString());

            if (fi != null)
            {
                var attributes = (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);

                if (attributes.Length > 0)
                {
                    return attributes[0].Description;
                }
            }

            return value.ToString();
        }

        private static IEnumerable<EnumClass> ListFor<T>(T t) where T : struct
        {
            return Enum.GetValues(typeof(T))
                       .Cast<Enum>()
                       .Select(e => new EnumClass { Key = e.ToString(), Value = Convert.ToInt16(e), Description = e.GetDescription() });
        }
    }
}