-- CreateTable
CREATE TABLE "_ProjetosToTecnologia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetosToTecnologia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetosToTecnologia_B_index" ON "_ProjetosToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ProjetosToTecnologia" ADD CONSTRAINT "_ProjetosToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetosToTecnologia" ADD CONSTRAINT "_ProjetosToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
