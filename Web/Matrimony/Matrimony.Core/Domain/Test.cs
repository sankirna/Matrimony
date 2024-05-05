using System;
using System.Collections.Generic;

namespace Matrimony.Core.Domain;

public partial class Test : BaseEntity
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public bool? IsDelete { get; set; }
}
