using System;
using System.Collections.Generic;

namespace Matrimony.Core.Domain;

public partial class Address
{
    public int Id { get; set; }

    public int ProfileId { get; set; }

    public string? Address1 { get; set; }

    public string? Address2 { get; set; }

    public string? Landmark { get; set; }

    public string? CityId { get; set; }

    public string? StateId { get; set; }

    public string? CountryId { get; set; }

    public string? PinNo { get; set; }

    public string? TypeId { get; set; }

    public int? DisplayOrder { get; set; }

    public int? CreatedBy { get; set; }

    public DateTime? CreatedDateTime { get; set; }

    public int? UpdatedBy { get; set; }

    public DateTime? UpdatedDateTime { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual AspNetUser? CreatedByNavigation { get; set; }

    public virtual Profile Profile { get; set; } = null!;

    public virtual AspNetUser? UpdatedByNavigation { get; set; }
}
