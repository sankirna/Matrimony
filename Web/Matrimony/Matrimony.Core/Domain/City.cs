using System;
using System.Collections.Generic;

namespace Matrimony.Core.Domain;

public partial class City : BaseEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? StateId { get; set; }

    public virtual State? State { get; set; }
}
