BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] NVARCHAR(1000) NOT NULL,
    [userName] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [passwordHash] NVARCHAR(1000),
    [role] NVARCHAR(1000) NOT NULL CONSTRAINT [Users_role_df] DEFAULT 'STUDENT',
    [bio] NVARCHAR(1000),
    [avatarUrl] NVARCHAR(1000),
    [googleId] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Users_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Users_googleId_key] UNIQUE NONCLUSTERED ([googleId])
);

-- CreateTable
CREATE TABLE [dbo].[UserRelationships] (
    [id] NVARCHAR(1000) NOT NULL,
    [followerId] NVARCHAR(1000) NOT NULL,
    [followeeId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [UserRelationships_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [UserRelationships_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UserRelationships_followerId_followeeId_key] UNIQUE NONCLUSTERED ([followerId],[followeeId])
);

-- CreateTable
CREATE TABLE [dbo].[Worlds] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Worlds_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Worlds_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[WorldMembers] (
    [id] NVARCHAR(1000) NOT NULL,
    [worldId] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [joinedAt] DATETIME2 NOT NULL CONSTRAINT [WorldMembers_joinedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [WorldMembers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Artifacts] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [body] NVARCHAR(1000) NOT NULL,
    [summaryByAI] NVARCHAR(1000),
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Artifacts_status_df] DEFAULT 'DRAFT',
    [publishedAt] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Artifacts_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Artifacts_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Scraps] (
    [id] NVARCHAR(1000) NOT NULL,
    [parentId] NVARCHAR(1000),
    [userId] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [body] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Scraps_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Scraps_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Comments] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [parentId] NVARCHAR(1000),
    [body] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Comments_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Comments_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Tags] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [slug] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Tags_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Tags_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Tags_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[TagArtifacts] (
    [id] NVARCHAR(1000) NOT NULL,
    [artifactId] NVARCHAR(1000) NOT NULL,
    [tagId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [TagArtifacts_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [TagArtifacts_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Assets] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [url] NVARCHAR(1000) NOT NULL,
    [fileType] NVARCHAR(1000) NOT NULL,
    [originalName] NVARCHAR(1000) NOT NULL,
    [sizeBytes] BIGINT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Assets_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Assets_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Mentions] (
    [id] NVARCHAR(1000) NOT NULL,
    [artifactId] NVARCHAR(1000) NOT NULL,
    [mentionedUserId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Mentions_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Mentions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[TagScraps] (
    [id] NVARCHAR(1000) NOT NULL,
    [scrapId] NVARCHAR(1000) NOT NULL,
    [tagId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [TagScraps_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [TagScraps_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[UserRelationships] ADD CONSTRAINT [UserRelationships_followerId_fkey] FOREIGN KEY ([followerId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRelationships] ADD CONSTRAINT [UserRelationships_followeeId_fkey] FOREIGN KEY ([followeeId]) REFERENCES [dbo].[Users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[WorldMembers] ADD CONSTRAINT [WorldMembers_worldId_fkey] FOREIGN KEY ([worldId]) REFERENCES [dbo].[Worlds]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[WorldMembers] ADD CONSTRAINT [WorldMembers_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Artifacts] ADD CONSTRAINT [Artifacts_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Scraps] ADD CONSTRAINT [Scraps_parentId_fkey] FOREIGN KEY ([parentId]) REFERENCES [dbo].[Scraps]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Scraps] ADD CONSTRAINT [Scraps_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [Comments_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [Comments_parentId_fkey] FOREIGN KEY ([parentId]) REFERENCES [dbo].[Comments]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[TagArtifacts] ADD CONSTRAINT [TagArtifacts_artifactId_fkey] FOREIGN KEY ([artifactId]) REFERENCES [dbo].[Artifacts]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[TagArtifacts] ADD CONSTRAINT [TagArtifacts_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Assets] ADD CONSTRAINT [Assets_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Mentions] ADD CONSTRAINT [Mentions_artifactId_fkey] FOREIGN KEY ([artifactId]) REFERENCES [dbo].[Artifacts]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Mentions] ADD CONSTRAINT [Mentions_mentionedUserId_fkey] FOREIGN KEY ([mentionedUserId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[TagScraps] ADD CONSTRAINT [TagScraps_scrapId_fkey] FOREIGN KEY ([scrapId]) REFERENCES [dbo].[Scraps]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[TagScraps] ADD CONSTRAINT [TagScraps_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
