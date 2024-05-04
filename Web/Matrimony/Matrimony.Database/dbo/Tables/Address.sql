CREATE TABLE [dbo].[Address] (
    [Id]              INT        IDENTITY (1, 1) NOT NULL,
    [ProfileId]       INT        NOT NULL,
    [Address1]        NCHAR (10) NULL,
    [Address2]        NCHAR (10) NULL,
    [Landmark]        NCHAR (10) NULL,
    [CityId]          NCHAR (10) NULL,
    [StateId]         NCHAR (10) NULL,
    [CountryId]       NCHAR (10) NULL,
    [PinNo]           NCHAR (10) NULL,
    [TypeId]          NCHAR (10) NULL,
    [DisplayOrder]    INT        NULL,
    [CreatedBy]       INT        NULL,
    [CreatedDateTime] DATETIME   NULL,
    [UpdatedBy]       INT        NULL,
    [UpdatedDateTime] DATETIME   NULL,
    [IsDeleted]       BIT        NULL,
    CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Address_AspNetUsers] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_Address_AspNetUsers1] FOREIGN KEY ([UpdatedBy]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_Address_Profile] FOREIGN KEY ([ProfileId]) REFERENCES [dbo].[Profile] ([Id])
);

