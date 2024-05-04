CREATE TABLE [dbo].[File] (
    [Id]              INT            IDENTITY (1, 1) NOT NULL,
    [ProfileId]       INT            NOT NULL,
    [Name]            NVARCHAR (MAX) NULL,
    [TypeId]          INT            NOT NULL,
    [CreatedBy]       INT            NULL,
    [CreatedDateTime] DATETIME       NULL,
    [UpdatedBy]       INT            NULL,
    [UpdatedDateTime] DATETIME       NULL,
    [IsDeleted]       BIT            NULL,
    [DisplayOrder]    INT            NULL,
    CONSTRAINT [PK_File] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_File_AspNetUsers] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_File_AspNetUsers1] FOREIGN KEY ([UpdatedBy]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_File_Profile] FOREIGN KEY ([ProfileId]) REFERENCES [dbo].[Profile] ([Id])
);

