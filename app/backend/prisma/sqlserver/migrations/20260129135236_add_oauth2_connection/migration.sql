BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[OAuthConnection] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [provider] NVARCHAR(1000) NOT NULL CONSTRAINT [OAuthConnection_provider_df] DEFAULT 'google',
    [accessToken] NVARCHAR(1000) NOT NULL,
    [refreshToken] NVARCHAR(1000),
    [expiresAt] DATETIME2,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [OAuthConnection_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [OAuthConnection_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- AddForeignKey
ALTER TABLE [dbo].[OAuthConnection] ADD CONSTRAINT [OAuthConnection_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
