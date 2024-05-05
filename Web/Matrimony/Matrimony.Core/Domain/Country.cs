using System;
using System.Collections.Generic;

namespace Matrimony.Core.Domain;

public partial class Country : BaseEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<State> States { get; set; } = new List<State>();
}
