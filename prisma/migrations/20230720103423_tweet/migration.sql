/*
  Warnings:

  - Added the required column `userId` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);
INSERT INTO "new_Tweet" ("createAt", "description", "id", "updated") SELECT "createAt", "description", "id", "updated" FROM "Tweet";
DROP TABLE "Tweet";
ALTER TABLE "new_Tweet" RENAME TO "Tweet";
CREATE UNIQUE INDEX "Tweet_userId_key" ON "Tweet"("userId");
CREATE INDEX "Tweet_id_idx" ON "Tweet"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
