import { v4 as uuidV4 } from "uuid";

/*
  Classe para representar a entidade de categoria
 */

class CategoryModel {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  /*
    Método construtor da classe de categorias
    Neste caso eu estou utilizando o uuid para gerar um id único para a categoria
    Ele só sera gerado se o id não existir
   */

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

/*
  Aqui eu exporto a classe Category
  para que ela possa ser usada em outros arquivos
 */

export { CategoryModel };
