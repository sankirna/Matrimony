﻿CREATE TABLE [dbo].[Profile] (
    [Id]               INT            IDENTITY (1, 1) NOT NULL,
    [UserId]           INT            NOT NULL,
    [FirstName]        NVARCHAR (MAX) NOT NULL,
    [MiddleName]       NVARCHAR (MAX) NULL,
    [LastName]         NVARCHAR (MAX) NULL,
    [Sex]              INT            NOT NULL,
    [Email]            NVARCHAR (MAX) NOT NULL,
    [AlternateEmail]   NVARCHAR (MAX) NULL,
    [PhoneNo]          NVARCHAR (MAX) NULL,
    [AlternatePhoneNo] NVARCHAR (MAX) NULL,
    [Langauge]         NVARCHAR (MAX) NULL,
    [OtherInformation] NVARCHAR (MAX) NULL,
    [CreatedBy]        INT            NULL,
    [CreatedDateTime]  DATETIME       NULL,
    [UpdatedBy]        INT            NULL,
    [UpdatedDateTime]  DATETIME       NULL,
    [IsDeleted]        BIT            NULL,
    CONSTRAINT [PK_Profile] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Profile_AspNetUsers] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_Profile_AspNetUsers1] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_Profile_AspNetUsers2] FOREIGN KEY ([UpdatedBy]) REFERENCES [dbo].[AspNetUsers] ([Id])
);

