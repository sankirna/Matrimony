CREATE TABLE [dbo].[Test] (
    [Id]       INT        IDENTITY (1, 1) NOT NULL,
    [Name]     NCHAR (10) NULL,
    [IsDelete] BIT        NULL,
    CONSTRAINT [PK_Test] PRIMARY KEY CLUSTERED ([Id] ASC)
);

