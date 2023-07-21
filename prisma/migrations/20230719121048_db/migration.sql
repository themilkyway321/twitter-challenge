-- CreateTable
CREATE TABLE "Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Tweet_id_idx" ON "Tweet"("id");
