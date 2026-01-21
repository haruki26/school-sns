-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Artifacts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "summaryByAI" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Artifacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Artifacts" ("body", "createdAt", "id", "publishedAt", "status", "summaryByAI", "title", "updatedAt", "userId") SELECT "body", "createdAt", "id", "publishedAt", "status", "summaryByAI", "title", "updatedAt", "userId" FROM "Artifacts";
DROP TABLE "Artifacts";
ALTER TABLE "new_Artifacts" RENAME TO "Artifacts";
CREATE TABLE "new_Assets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "sizeBytes" BIGINT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Assets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Assets" ("createdAt", "fileType", "id", "originalName", "sizeBytes", "url", "userId") SELECT "createdAt", "fileType", "id", "originalName", "sizeBytes", "url", "userId" FROM "Assets";
DROP TABLE "Assets";
ALTER TABLE "new_Assets" RENAME TO "Assets";
CREATE TABLE "new_Comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "parentId" TEXT,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Comments" ("body", "createdAt", "id", "parentId", "updatedAt", "userId") SELECT "body", "createdAt", "id", "parentId", "updatedAt", "userId" FROM "Comments";
DROP TABLE "Comments";
ALTER TABLE "new_Comments" RENAME TO "Comments";
CREATE TABLE "new_Mentions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "artifactId" TEXT NOT NULL,
    "mentionedUserId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Mentions_artifactId_fkey" FOREIGN KEY ("artifactId") REFERENCES "Artifacts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Mentions_mentionedUserId_fkey" FOREIGN KEY ("mentionedUserId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Mentions" ("artifactId", "createdAt", "id", "mentionedUserId") SELECT "artifactId", "createdAt", "id", "mentionedUserId" FROM "Mentions";
DROP TABLE "Mentions";
ALTER TABLE "new_Mentions" RENAME TO "Mentions";
CREATE TABLE "new_TagArtifacts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "artifactId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TagArtifacts_artifactId_fkey" FOREIGN KEY ("artifactId") REFERENCES "Artifacts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TagArtifacts_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TagArtifacts" ("artifactId", "createdAt", "id", "tagId") SELECT "artifactId", "createdAt", "id", "tagId" FROM "TagArtifacts";
DROP TABLE "TagArtifacts";
ALTER TABLE "new_TagArtifacts" RENAME TO "TagArtifacts";
CREATE TABLE "new_TagScraps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scrapId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TagScraps_scrapId_fkey" FOREIGN KEY ("scrapId") REFERENCES "Scraps" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TagScraps_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TagScraps" ("createdAt", "id", "scrapId", "tagId") SELECT "createdAt", "id", "scrapId", "tagId" FROM "TagScraps";
DROP TABLE "TagScraps";
ALTER TABLE "new_TagScraps" RENAME TO "TagScraps";
CREATE TABLE "new_UserRelationships" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "followerId" TEXT NOT NULL,
    "followeeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserRelationships_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserRelationships_followeeId_fkey" FOREIGN KEY ("followeeId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserRelationships" ("createdAt", "followeeId", "followerId", "id") SELECT "createdAt", "followeeId", "followerId", "id" FROM "UserRelationships";
DROP TABLE "UserRelationships";
ALTER TABLE "new_UserRelationships" RENAME TO "UserRelationships";
CREATE UNIQUE INDEX "UserRelationships_followerId_followeeId_key" ON "UserRelationships"("followerId", "followeeId");
CREATE TABLE "new_WorldMembers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "worldId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WorldMembers_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "Worlds" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WorldMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WorldMembers" ("id", "joinedAt", "userId", "worldId") SELECT "id", "joinedAt", "userId", "worldId" FROM "WorldMembers";
DROP TABLE "WorldMembers";
ALTER TABLE "new_WorldMembers" RENAME TO "WorldMembers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
