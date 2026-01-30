/*
  Warnings:

  - Added the required column `artifactId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Comments] ADD [artifactId] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [Comments_artifactId_fkey] FOREIGN KEY ([artifactId]) REFERENCES [dbo].[Artifacts]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
