CREATE TABLE [dbo].[State] (
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [Name]      VARCHAR (100) NOT NULL,
    [CountryID] INT           NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CountryID]) REFERENCES [dbo].[Country] ([Id])
);

